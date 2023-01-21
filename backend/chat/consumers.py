from chat.models import Message
from accounts.models import Account
from chat.models import Conversation
from asgiref.sync import async_to_sync
from channels.generic.websocket import JsonWebsocketConsumer
from chat.serializer import MessageSerializer
import json
from uuid import UUID


class UUIDEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, UUID):
            # if the obj is uuid, we simply return the value of uuid
            return obj.hex
        return json.JSONEncoder.default(self, obj)
    
    
class ChatConsumer(JsonWebsocketConsumer):
    """
    This consumer is used to show user's online status,
    and send notifications.
    """
    @classmethod
    def encode_json(cls, content):
        return json.dumps(content, cls=UUIDEncoder)

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.user = None
        self.conversation_name = None
        self.conversation = None


    def connect(self):
        self.user = self.scope["user"]
        if not self.user.is_authenticated:
            return

        self.accept()
        self.conversation_name = f"{self.scope['url_route']['kwargs']['conversation_name']}"
        self.conversation, created = Conversation.objects.get_or_create(name=self.conversation_name)

        async_to_sync(self.channel_layer.group_add)(
        self.conversation_name,
        self.channel_name,
        )
        messages = self.conversation.messages.all().order_by("-timestamp")[0:50]
        self.send_json({
         "type": "last_50_messages",
            "messages": MessageSerializer(messages, many=True).data,
            })

    def disconnect(self, code):
        print("Disconnected!")
        return super().disconnect(code)

    def receive_json(self, content, **kwargs):
        message_type = content["type"]
        if message_type == "chat_message":
            message = Message.objects.create(
            from_user=self.user,
            to_user=self.get_receiver(),
            content=content["message"],
            conversation=self.conversation
    )
            async_to_sync(self.channel_layer.group_send)(
                self.conversation_name,
                {
                    "type": "chat_message_echo",
                    "name": self.user.first_name,
                    "message": MessageSerializer(message).data,
                },
            )

        return super().receive_json(content, **kwargs)
    
    def get_receiver(self):
        firstnames = self.conversation_name.split("__")
        for firstname in firstnames:
            if firstname != self.user.first_name:
            # This is the receiver
             return Account.objects.get(first_name=firstname)   
        
        
        
    def chat_message_echo(self, event):
        print(event)
        self.send_json(event)
        
        
# from django.contrib.auth import get_user_model
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import WebsocketConsumer
# import json
# from .models import Message

# User = get_user_model()

# class ChatConsumer(WebsocketConsumer):

#     def fetch_messages(self, data):
#         messages = Message.last_10_messages(self)
#         content = {
#             'command': 'messages',
#             'messages': self.messages_to_json(messages)
#         }
#         self.send_message(content)

#     def new_message(self, data):
#         author = data['from']
#         author_user = User.objects.filter(username=author)[0]
#         message = Message.objects.create(
#             author=author_user, 
#             content=data['message'])
#         content = {
#             'command': 'new_message',
#             'message': self.message_to_json(message)
#         }
#         return self.send_chat_message(content)

#     def messages_to_json(self, messages):
#         result = []
#         for message in messages:
#             result.append(self.message_to_json(message))
#         return result

#     def message_to_json(self, message):
#         return {
#             'author': message.author.username,
#             'content': message.content,
#             'timestamp': str(message.timestamp)
#         }

#     commands = {
#         'fetch_messages': fetch_messages,
#         'new_message': new_message
#     }

#     def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = 'chat_%s' % self.room_name
#         async_to_sync(self.channel_layer.group_add)(
#             self.room_group_name,
#             self.channel_name
#         )
#         self.accept()

#     def disconnect(self, close_code):
#         async_to_sync(self.channel_layer.group_discard)(
#             self.room_group_name,
#             self.channel_name
#         )

#     def receive(self, text_data):
#         data = json.loads(text_data)
#         self.commands[data['command']](self, data)
        

#     def send_chat_message(self, message):    
#         async_to_sync(self.channel_layer.group_send)(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message
#             }
#         )

#     def send_message(self, message):
#         self.send(text_data=json.dumps(message))

#     def chat_message(self, event):
#         message = event['message']
#         self.send(text_data=json.dumps(message))
# # chat/consumers.py
# import json
# from asgiref.sync import async_to_sync
# from accounts.models import Account
# from channels.generic.websocket import WebsocketConsumer
# from . models import Message

# class ChatConsumer(WebsocketConsumer):
#     def fetch_messages(self, data):
#         print("fetch")
#         messages = Message.last_10_messages(self)
#         print(messages)
#         content ={
            
#             'messages': self.messages_to_json(messages)
#         }
#         self.send_message(content)
        
        
#     def new_message(self, data):
#         author = data['from']
#         author_user = Account.objects.filter(username=author)[0]
#         message = Message.objects.create(author=author_user, content=data['message'])
#         content = {
#             'command':'new-message',
#             'message':self.message_to_json(message)
#         }
#         return self.send_chat_message(content)
    
#     def messages_to_json(self, messages):
#         result = []
    
#         for message in messages:
#             result.append(self.message_to_json(message))
#         return result
    
#     def message_to_json(self, message): 
#         return{
#             'author':message.author.username,
#             'content':message.content,
#             'timestamp': str(message.timestamp)
#         }
    
#     commands = {
#         'fetch_messages': fetch_messages,
#         'new_message':new_message
#     }
#     def connect(self):
#         self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
#         self.room_group_name = "chat_%s" % self.room_name

#         # Join room group
#         async_to_sync(self.channel_layer.group_add)(self.room_group_name, self.channel_name)

#         self.accept()

#     def disconnect(self, close_code):
#         # Leave room group
#         async_to_sync (self.channel_layer.group_discard)(self.room_group_name, self.channel_name)

#     # Receive message from WebSocket
#     def receive(self, text_data):
#         data = json.loads(text_data)
#         self.commands[data['command']](self, data)
        
#     def send_chat_message(self, message):
#         async_to_sync(self.channel_layer.group_send)(
#             self.room_group_name, {"type": "chat_message", "message": message}
#         )


#     def send_message(self,message):
#         self.send(text_data=json.dumps(message))
        
        
#     # Receive message from room group
#     def chat_message(self, event):
#         message = event["message"]
#         self.send(text_data=json.dumps(message))
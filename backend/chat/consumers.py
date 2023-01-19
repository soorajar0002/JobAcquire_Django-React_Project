import json 
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async

class PersonalChatConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        print("FUCK")
        my_id = self.scope['user'].id
        print(my_id,"my_id")
        other_user_id = self.scope['url_route']['kwargs']['id']
        print(other_user_id,"other")
        if int(my_id) > int(other_user_id):
            self.room_name = f'{my_id}-{other_user_id}'
        else:
            self.room_name = f'{other_user_id}-{my_id}'
            
        self.room_group_name = 'chat_%s'%self.room_name
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name,
        )
        
        await self.accept()
        
        
    async def disconnect(self,code):
        self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_layer
        )
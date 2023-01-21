from rest_framework import serializers

from chat.models import Message
from accounts.api.serializers import MessageUserSerializer


class MessageSerializer(serializers.ModelSerializer):
    from_user = serializers.SerializerMethodField()
    to_user = serializers.SerializerMethodField()
    conversation = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = (
            "id",
            "conversation",
            "from_user",
            "to_user",
            "content",
            "timestamp",
            "read",
        )

    def get_conversation(self, obj):
        return str(obj.conversation.id)

    def get_from_user(self, obj):
        return MessageUserSerializer(obj.from_user).data

    def get_to_user(self, obj):
        return MessageUserSerializer(obj.to_user).data
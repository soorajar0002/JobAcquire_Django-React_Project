from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import Account
from django.contrib.auth import get_user_model
User = get_user_model()



class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email','phone_number']
        
        
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email','token','is_superadmin','is_recruiter','is_seeker']
    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)
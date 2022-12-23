from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import UserProfile
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
    
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "phone_number","password","is_seeker","company_name","is_recruiter"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        if validated_data["is_seeker"]:
            user = User(
                first_name=validated_data["first_name"],
                last_name=validated_data["last_name"],
                email=validated_data["email"],
                phone_number=validated_data['phone_number'],
                username=validated_data['email'].split('@')[0],
             )
            user.is_seeker = True
        else:
            user = User(
               first_name=validated_data["first_name"],
               last_name=validated_data["last_name"],
               email=validated_data["email"],
               company_name=validated_data["company_name"],
               phone_number=validated_data["phone_number"],
               username=validated_data["email"].split("@")[0],
        )
            user.is_recruiter = True
       
        user.set_password(validated_data["password"])
        user.is_active = True
        

        user.save()

        return user
    
    

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"
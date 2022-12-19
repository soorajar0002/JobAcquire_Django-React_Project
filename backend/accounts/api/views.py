from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from accounts.models import Account
from rest_framework.parsers import JSONParser
from .serializers import UserSerializerWithToken


 
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k]=v
        print(data)

        return data
 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
 
@api_view(['POST'])
def registerUser(request):
   
    data=JSONParser().parse(request)
            
    print(data)
    user=Account.objects.create(
    first_name=data['first_name'],
    last_name=data['last_name'],
    phone_number=data['phone_number'],
    username=data['email'].split('@')[0],
    email=data['email'],
    password=make_password(data['password']),
    is_seeker=True
    )
    user.is_active=True
    user.save()
            
    message={
    'detail':'user created successfully'
    }
    return Response(message,status=status.HTTP_200_OK)
   
 
@api_view(['POST'])
def registerRecruiter(request):
   
    data=JSONParser().parse(request)
            
    print(data)
    user=Account.objects.create(
    first_name=data['first_name'],
    last_name=data['last_name'],
    phone_number=data['phone_number'],
    company_name=data['company_name'],
    username=data['email'].split('@')[0],
    email=data['email'],
    password=make_password(data['password']),
    is_recruiter=True
    )
    user.is_active=True
    user.save()
            
    message={
    'detail':'recruiter created successfully'
    }
    return Response(message,status=status.HTTP_200_OK)
 
 
 
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/'
        
    ]
    return Response(routes)
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.views import APIView
from accounts.models import Account
from rest_framework.parsers import JSONParser
from .serializers import  RegistrationSerializer, UserProfileSerializer, UserSerializerWithToken


#Login
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
 



#Register
class RegisterView(APIView):
    
    def post(self, request, format=None):
        print(request.data)
        
        serializer = RegistrationSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            data = serializer.data
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    
class UserProfileView(APIView):
    def get(self, request, id):
        user = request.data.id

        serializer = UserProfileSerializer(user)
        return Response(serializer.data) 
    



 
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/'
        
    ]
    return Response(routes)
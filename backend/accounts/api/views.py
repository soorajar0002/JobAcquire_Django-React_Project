from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.views import APIView
from accounts.models import Account,UserProfile,RecruiterProfile
from rest_framework.parsers import JSONParser
from .serializers import  RegistrationSerializer, UserProfileSerializer, UserProfileUpdateSerializer, UserSerializer, UserSerializerWithToken,RecruiterProfileSerializer


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
    
#UserProfile    
class UserProfileView(APIView):
    def post(self, request):
         print(request.data)
         user=Account.objects.get(pk=request.data['id'])
         userprofile=UserProfile.objects.get(user=user)
         serializer = UserProfileSerializer(userprofile)
         return Response(serializer.data) 
    
    def put(self, request):
        print(request.data)
        user=Account.objects.get(pk=request.data["id"])
        userprofile=UserProfile.objects.get(user=user)
        serializer = UserProfileUpdateSerializer(userprofile,data=request.data,context={"request": request})   
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
             

class RecruiterProfileView(APIView):
    def post(self, request):
         print(request.data)
         user=Account.objects.get(pk=request.data['id'])
         rec_profile=RecruiterProfile.objects.get(user=user)
         serializer = RecruiterProfileSerializer(rec_profile)
         return Response(serializer.data)
    
    def put(self, request):
        print(request.data["is_account"])
        user=Account.objects.get(pk=request.data['id'])
        userprof=RecruiterProfile.objects.get(user=user)
        if request.data["is_account"]:
            serializer = UserSerializer(user, data=request.data)
        else:
            serializer = RecruiterProfileSerializer(userprof, data=request.data)
           
            
        if serializer.is_valid():
            serializer.save()
            print(serializer.data,"ser")
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
       
    
    
    
class AdminUserView(APIView):
     def get(self, request):
        users = Account.objects.all().filter(is_seeker=True)
        serializer = UserSerializerWithToken(users,many=True)
        return Response(serializer.data)

class AdminRecruiterView(APIView):
     def get(self, request):
        users = Account.objects.all().filter(is_recruiter=True)
        serializer = UserSerializerWithToken(users,many=True)
        return Response(serializer.data)
    
class UserBlockview(APIView):
    def post(self, request):
        print(request.data)
        user=Account.objects.get(pk=request.data["id"])
        print(user.is_active)
        if user.is_active:
            user.is_active = False
        else:
            user.is_active = True
        user.save()
        
        return Response(status=status.HTTP_200_OK)
    
    

 
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/'
        
    ]
    return Response(routes)
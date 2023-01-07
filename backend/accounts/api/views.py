from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.views import APIView
from recruiter.models import JobApplication
from recruiter.models import Job
from accounts.models import Account,UserProfile,RecruiterProfile
from rest_framework.parsers import JSONParser
from .serializers import  JobApplicationSerializer, JobPostSerializer, RecruiterProfilePicSerializer, RegistrationSerializer, UserProfilePicSerializer, UserProfileSerializer, UserProfileUpdateSerializer, UserSerializer, UserSerializerWithToken,RecruiterProfileSerializer
from rest_framework.parsers import MultiPartParser,FormParser
from django.contrib.auth import authenticate, login, logout
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
 

class LoginView(APIView):
    def post(self,request):
        email = request.data["email"]
        password = request.data["password"]
        user = authenticate(email=email, password=password)
        if user is not None:
            login(request, user)  
            data = UserSerializerWithToken(user).data  
            return Response(data)         
        

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
    parser_classes = [JSONParser, MultiPartParser, FormParser]
    def post(self, request):
         print(request.data,"prof")
         user=Account.objects.get(pk=request.data['id'])
         userprofile=UserProfile.objects.get(user=user)
         serializer = UserProfileSerializer(userprofile)
         return Response(serializer.data) 
    
    def put(self, request):
        print(request.data)
        user=Account.objects.get(pk=request.data['id'])
        userprof=UserProfile.objects.get(user=user)
        print(userprof)
        if request.data["is_account"]:
            serializer = UserSerializer(user, data=request.data)
        else:
            serializer = UserProfileSerializer(userprof, data=request.data)
           
            
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, format=None):
        print("the data", request.data)
        user = Account.objects.get(pk=request.data["id"])
        print(user)
        userprofile = UserProfile.objects.get(user=user)

        print("userprofile", userprofile)
        serializer = UserProfilePicSerializer(instance=userprofile, data=request.data)
        if serializer.is_valid():

            serializer.save()
            print("serializer", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
             

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
    
    def patch(self, request, format=None):
        print("the data", request.data)
        user = Account.objects.get(pk=request.data["id"])
        print(user)
        recprofile = RecruiterProfile.objects.get(user=user)

        print("userprofile", recprofile)
        serializer = RecruiterProfilePicSerializer(instance=recprofile, data=request.data)
        if serializer.is_valid():

            serializer.save()
            print("serializer", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
       
    
    
    
class AdminUserView(APIView):
     def get(self, request):
        users = Account.objects.all().filter(is_seeker=True)
        print(users)
        serializer = UserSerializerWithToken(users,many=True)
        return Response(serializer.data)

class AdminRecruiterView(APIView):
     def get(self, request):
        users = Account.objects.all().filter(is_recruiter=True)
        print(users)
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
    

    
class JobPostRecruiterView(APIView):
     def get(self, request,id):
         print(id)
         user=Account.objects.get(pk=id)
         print(user)
         rec_profile=RecruiterProfile.objects.get(user=user)
         
         jobs=Job.objects.filter(company=rec_profile)
         print(jobs)
         
         serializer = JobPostSerializer(jobs,many=True)
         print(serializer.data)
         
         return Response(serializer.data)
     
     def post(self,request):
         serializer = JobPostSerializer(data=request.data, context={'user_id':request.data["id"]})
         if serializer.is_valid():
             serializer.save()
             print(serializer)
             return Response(status=status.HTTP_201_CREATED)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
         
     def put(self, request):
        print(request.data)
        job=Job.objects.get(pk=request.data['id'])
        print(job)
        serializer = JobPostSerializer(job, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
     def delete(self,request,id):
         print(id,"JOB IDDDDDDDDDDDDD")
         job = Job.objects.get(pk=id)
         job.delete()
         return Response(status=status.HTTP_200_OK)
        
    
    
    
    
class JobPostView(APIView):
    def post(self, request):
        print(request.data)
        jobs=Job.objects.filter(pk=request.data['id'])
        print(jobs)
         
        serializer = JobPostSerializer(jobs,many=True)
        print(serializer.data)
         
        return Response(serializer.data)
    
   
                  
            
       
    
    
     
class UserJobsList(APIView):
    def get(self, request):
        jobs = Job.objects.all()
        serializer = JobPostSerializer(jobs, many=True)
        print(serializer.data)
        
        return Response(serializer.data)
    
    def post(self, request):
        print(request.data)
        jobs=Job.objects.filter(pk=request.data['id'])
        print(jobs)
         
        serializer = JobPostSerializer(jobs,many=True)
        print(serializer.data)
         
        return Response(serializer.data)
            

class JobApplicationView(APIView):
    def post(self,request):
        data = request.data["ids"]
        job_id = data["job_id"]
        user_id = data["user_id"]
        user = UserProfile.objects.get(pk=user_id)
        job = Job.objects.get(pk=job_id)
        apply = JobApplication.objects.create(user=user,job=job,applied=True)
        print(apply)
        job.applicants += 1
        job.save()
        serializer = JobApplicationSerializer(apply,many=False)
        return Response(serializer.data)
    
        



























 
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/'
        
    ]
    return Response(routes)
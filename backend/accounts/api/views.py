from payments.models import RazorpayPayment
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.views import APIView
from accounts.emails import send_otp_via_email
from recruiter.models import JobApplication
from recruiter.models import Job
from accounts.models import Account, UserProfile, RecruiterProfile
from rest_framework.parsers import JSONParser
from .serializers import JobApplicationReportSerializer, JobApplicationSerializer, JobPostSerializer, RecruiterJobApplicationSerializer, RecruiterProfilePicSerializer, RecruiterUserProfileSerializer, RegistrationSerializer, UserProfilePicSerializer, UserProfileSerializer, UserProfileUpdateSerializer, UserSerializer, UserSerializerWithToken, RecruiterProfileSerializer, VerifyAccountSerailizer
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import authenticate, login
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from django.db.models import Sum


# Login


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        print(data)

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]
        user = authenticate(email=email, password=password)
        if user is not None:
            login(request, user)
            data = UserSerializerWithToken(user).data
            return Response(data)


# Register
class RegisterView(APIView):

    def post(self, request, format=None):
        if request.data["verify"]:

            user_id = request.data["id"]
            id = user_id["id"]
            user = Account.objects.get(id=id)
            print(user)
            otp = request.data["otp"]
            print(user.otp, otp)
            if user.otp != otp:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            user.is_active = True
            user.save()
            return Response(status=status.HTTP_201_CREATED)

        else:
            print(request.data, "SOoarj")

            serializer = RegistrationSerializer(data=request.data)

            print(serializer)

            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data['email'])
                data = serializer.data

                return Response(data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# UserProfile


class UserProfileView(APIView):
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    def post(self, request):
        print(request.data, "prof")
        user = Account.objects.get(pk=request.data['id'])
        userprofile = UserProfile.objects.get(user=user)
        serializer = UserProfileSerializer(userprofile)
        return Response(serializer.data)

    def put(self, request):
        print(request.data)
        user = Account.objects.get(pk=request.data['id'])
        userprof = UserProfile.objects.get(user=user)
        print(userprof)
        if request.data["is_account"]:
            serializer = UserSerializer(user, data=request.data)
        else:
            serializer = UserProfileSerializer(userprof, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, format=None):
        print("the data", request.data)
        user = Account.objects.get(pk=request.data["id"])
        print(user)
        userprofile = UserProfile.objects.get(user=user)

        print("userprofile", userprofile)
        serializer = UserProfilePicSerializer(
            instance=userprofile, data=request.data)
        if serializer.is_valid():

            serializer.save()
            print("serializer", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RecruiterProfileView(APIView):
    def post(self, request):
        print(request.data)
        user = Account.objects.get(pk=request.data['id'])
        rec_profile = RecruiterProfile.objects.get(user=user)
        serializer = RecruiterProfileSerializer(rec_profile)
        return Response(serializer.data)

    def put(self, request):
        print(request.data)
        print(request.data["is_account"])
        user = Account.objects.get(pk=request.data['id'])
        userprof = RecruiterProfile.objects.get(user=user)
        if request.data["is_account"]:
            serializer = UserSerializer(user, data=request.data)
        else:
            print("here ethi")
            serializer = RecruiterProfileSerializer(
                userprof, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data, "ser")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, format=None):
        print("the data", request.data)
        user = Account.objects.get(pk=request.data["id"])
        print(user)
        recprofile = RecruiterProfile.objects.get(user=user)

        print("userprofile", recprofile)
        serializer = RecruiterProfilePicSerializer(
            instance=recprofile, data=request.data)
        if serializer.is_valid():

            serializer.save()
            print("serializer", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminUserView(APIView):
    def get(self, request):
        users = Account.objects.all().filter(is_seeker=True)
        print(users)
        serializer = UserSerializerWithToken(users, many=True)
        return Response(serializer.data)


class AdminRecruiterView(APIView):
    def get(self, request):
        users = Account.objects.all().filter(is_recruiter=True)
        print(users)
        serializer = UserSerializerWithToken(users, many=True)
        return Response(serializer.data)


class AdminJobPostApproveView(APIView):
    def get(self, request, id):
        job = Job.objects.get(id=id)
        print(job)
        serializer = JobPostSerializer(job)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        id = request.data["id"]
        print(id)
        job = Job.objects.get(id=id)
        job.is_active = True
        job.save()
        return Response(status=status.HTTP_200_OK)


class UserBlockview(APIView):
    def post(self, request):
        print(request.data)
        user = Account.objects.get(pk=request.data["id"])
        print(user.is_active)
        if user.is_active:
            user.is_active = False
        else:
            user.is_active = True
        user.save()

        return Response(status=status.HTTP_200_OK)


class JobPostRecruiterView(APIView):
    def get(self, request, id):
        print(id)
        user = Account.objects.get(pk=id)
        print(user)
        rec_profile = RecruiterProfile.objects.get(user=user)

        jobs = Job.objects.filter(company=rec_profile)
        print(jobs)

        serializer = JobPostSerializer(jobs, many=True)
        print(serializer.data)

        return Response(serializer.data)

    def post(self, request):
        serializer = JobPostSerializer(data=request.data, context={'user_id': request.data["id"]})
        if serializer.is_valid():
            serializer.save()
            print(serializer)
            

            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        print(request.data)
        job = Job.objects.get(pk=request.data['id'])
        print(job)
        serializer = JobPostSerializer(job, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        print(id, "JOB IDDDDDDDDDDDDD")
        job = Job.objects.get(pk=id)
        job.delete()
        return Response(status=status.HTTP_200_OK)


class JobPostView(APIView):
    def post(self, request):
        print(request.data)
        jobs = Job.objects.filter(pk=request.data['id'])
        print(jobs)

        serializer = JobPostSerializer(jobs, many=True)
        print(serializer.data)

        return Response(serializer.data)


class UserJobsList(APIView):
    def get(self, request):
        jobs = Job.objects.filter(is_active=True)
        serializer = JobPostSerializer(jobs, many=True)
        print(serializer.data)

        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        jobs = Job.objects.filter(pk=request.data['id'])
        print(jobs)

        serializer = JobPostSerializer(jobs, many=True)
        print(serializer.data)

        return Response(serializer.data)


class setPagination(PageNumberPagination):
    page_size = 7


class PostListView(ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobPostSerializer
    pagination_class = setPagination
    filter_backends = (SearchFilter,)
    search_fields = ("category", "designation", "type", "workmode","skills")


class JobApplicationView(APIView):
    def post(self, request):
        data = request.data["ids"]
        job_id = data["job_id"]
        user_id = data["user_id"]
        rec_id = data["rec_id"]
        user = Account.objects.get(pk=user_id)
        prof = UserProfile.objects.get(user=user)
        rec_prof = RecruiterProfile.objects.get(id=rec_id)
        job = Job.objects.get(pk=job_id)
        print(job)
        apply = JobApplication.objects.create(
            user=prof, recruiter=rec_prof, job=job, applied=True)
        print(apply)
        job.applicants += 1
        job.save()
        serializer = JobApplicationSerializer(apply, many=False)
        return Response(serializer.data)


# class UserAppliedJobsGeneric(generics.RetrieveUpdateDestroyAPIView):

#     queryset = JobApplication.objects.
#     serializer_class = JobApplicationSerializer
#     lookup_field = 'id'

class UserAppliedJobsView(APIView):
    def post(self, request):
        print(request.data, "3211")
        user = Account.objects.get(id=request.data["id"])
        prof = UserProfile.objects.get(user=user)
        print(user)
        jobs = JobApplication.objects.filter(user=prof)
        print(jobs)

        serializer = JobApplicationSerializer(jobs, many=True)
        print(serializer.data)

        return Response(serializer.data)


class JobApplicationRecruiterView(APIView):
    def post(self, request):
        print(request.data, "22222")
        print(request.user, "3211")
        user = Account.objects.get(id=request.data["id"])
        prof = RecruiterProfile.objects.get(user=user)
        print(user)
        print(prof)
        search_data = request.data["search"]
        if request.data["search"] == None:
            jobs = JobApplication.objects.filter(recruiter=prof)
        else:
            print(search_data)
            jobs = JobApplication.objects.filter(
                Q(job__designation__icontains=search_data) & Q(recruiter=prof))
            print("iamhere")
        print(jobs, "ree")

        serializer = RecruiterJobApplicationSerializer(jobs, many=True)
        print(serializer.data)
        return Response(serializer.data)

    def patch(self, request):
        print(request.data)
        job = JobApplication.objects.get(id=request.data["id"])
        print(job, "APPLI")
        job.status = request.data["status"]
        job.save()
        return Response(status=status.HTTP_200_OK)


class RecruiterUserProfileView(APIView):
    def post(self, request):
        user = Account.objects.get(id=request.data["id"])
        prof = UserProfile.objects.get(user=user)
        serializer = RecruiterUserProfileSerializer(prof)
        return Response(serializer.data)


class AdminDashboardView(APIView):
    def get(self, request):
        users = Account.objects.filter(is_seeker=True).count()
        recruiters = Account.objects.filter(is_recruiter=True).count()
        print(users, recruiters)
        total_earnings = RazorpayPayment.objects.all().aggregate(Sum('amount'))
        content = {
            "users": users,
            "recruiters": recruiters,
            "total": total_earnings

        }

        return Response(content, status=status.HTTP_200_OK)

class ReportView(ListAPIView):
        queryset = JobApplication.objects.all()
        serializer_class = JobApplicationReportSerializer
        filter_backends = (SearchFilter,)
        search_fields = ("recruiter") 
        
class View(APIView):
    def post(self, request):
        if request.data["recruiter"]:
            user = request.user
           
            profile = RecruiterProfile.objects.get(user=user)
            print(profile)
            applications = JobApplication.objects.filter(recruiter=profile)
        else:
            applications = JobApplication.objects.all()
        serializer = JobApplicationReportSerializer(applications,many=True)
        return Response(serializer.data)
        

    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/'

    ]
    return Response(routes)

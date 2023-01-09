from django.urls import path
from . import views
from . views import AdminJobPostApproveView, JobApplicationView,AdminRecruiterView, AdminUserView, JobPostRecruiterView, JobPostView, MyTokenObtainPairView, RegisterView,  JobPostView, UserBlockview, UserJobsList, UserProfileView,RecruiterProfileView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', views.getRoutes),
    path('user/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('admin/login/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('recruiter/login/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',RegisterView.as_view(), name='register'),
    path('user/profile/',UserProfileView.as_view(), name='user_profile'),
    path('recruiter/profile/',RecruiterProfileView.as_view(), name='recruiter_profile'),
    path('admin/users/',AdminUserView.as_view(), name='user_view'),
    path('admin/recruiter/',AdminRecruiterView.as_view(), name='rec_view'),
    path('block/',UserBlockview.as_view(), name='user_bloack'),
    path('recruiter/job/post',JobPostRecruiterView.as_view(), name='user_block'),
    path('recruiter/job/post/<str:id>/',JobPostRecruiterView.as_view(), name='user_block'),
    path('user/job/post',JobPostView.as_view(), name='user_block'),
    path('user/jobdiscover', UserJobsList.as_view(), name='user_job_discover'),
    path('user/job/apply', JobApplicationView.as_view(), name='user_job_apply'),
    path('admin/approve/post/<str:id>/', AdminJobPostApproveView.as_view(), name='user_job_apply'),
    path('admin/approve/post', AdminJobPostApproveView.as_view(), name='user_job_apply'),
    
   
   
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
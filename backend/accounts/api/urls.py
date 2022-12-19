from django.urls import path
from . import views
from . views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('', views.getRoutes),
    path('user/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('admin/login/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('recruiter/login/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/register/',views.registerUser, name='register'),
    path('recruiter/register/',views.registerRecruiter, name='register'),
   
]
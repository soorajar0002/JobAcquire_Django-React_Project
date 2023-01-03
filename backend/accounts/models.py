from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext_lazy as _

from .views import upload_to

# Create your models here.


class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, username, email, password=None):
        if not email:
            raise ValueError('User must have an email address')

        if not username:
            raise ValueError('User must have an username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,

        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    email = models.CharField(max_length=50, unique=True)
    phone_number = models.CharField(max_length=50)
    

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_recruiter = models.BooleanField(default=False)
    is_seeker = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = MyAccountManager()

    def full_name(self):
        return f'{self.first_name} { self.last_name}'

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True

class UserProfile(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=30,blank=True,null=True)
    profile_picture = models.ImageField(_("Image"), upload_to=upload_to, default='profile/default.jpg')
    bio = models.TextField(max_length=500,blank=True,null=True)
    resume = models.FileField(upload_to='resume',blank=True,null=True)
    skill = models.CharField(max_length=30,blank=True,null=True)
    desired_job = models.CharField(max_length=30,blank=True,null=True)
    desired_location = models.CharField(max_length=30,blank=True,null=True)
    degree = models.CharField(max_length=50,blank=True,null=True)
    college = models.CharField(max_length=50,blank=True,null=True)
    joining_year = models.IntegerField(blank=True,null=True)
    passout_year = models.IntegerField(blank=True,null=True)
    designation = models.CharField(max_length=30,blank=True,null=True)
    company = models.CharField(max_length=30,blank=True,null=True)
    start = models.IntegerField(blank=True,null=True)
    end = models.IntegerField(blank=True,null=True)
    description = models.TextField(blank=True,null=True)
    percentage = models.IntegerField(blank=True,null=True)
    
    def __str__(self):
        return self.user.first_name
    
    



class RecruiterProfile(models.Model):
    user = models.OneToOneField(Account,on_delete=models.CASCADE,unique=True)
    position = models.CharField(max_length=30)
    profile_picture = models.ImageField(_("Image"), upload_to=upload_to, default='profile/recruiter/default.jpg')
    recruiter_bio = models.TextField(max_length=255)
    location = models.CharField(max_length=30)
    company_name = models.CharField(max_length=30)
    company_website = models.CharField(max_length=30)
    company_email = models.EmailField(max_length=30,unique=True)
    company_mobile = models.CharField(max_length=10,unique=True)
    company_address_line1 = models.CharField(max_length=30)
    company_address_line2 = models.CharField(max_length=30)
    description = models.TextField()
    
    def __str__(self):
        return self.user.first_name
    



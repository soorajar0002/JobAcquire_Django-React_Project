from django.db import models
from accounts.models import RecruiterProfile
from accounts.models import UserProfile
# Create your models here.

class Job(models.Model):
    company = models.ForeignKey(RecruiterProfile,related_name='jobs', on_delete=models.CASCADE)
    category = models.CharField(max_length=225,blank=True,null=True)
    designation = models.CharField(max_length=30,blank=True,null=True)
    skills = models.CharField(max_length=30,blank=True,null=True)
    vacancies = models.CharField(max_length=30,null=True,blank=True)
    location = models.CharField(max_length=30,blank=True,null=True)
    type =models.CharField(max_length=30,default="Full Time")
    workmode =models.CharField(max_length=30,default="On-Site")
    experience_from = models.CharField(max_length=30,blank=True,null=True)
    experience_to = models.CharField(max_length=30,blank=True,null=True)
    job_description = models.TextField(blank=True,null=True)
    criteria = models.TextField(blank=True,null=True)
    payscale_from = models.CharField(max_length=30,null=True,blank=True)
    payscale_to = models.CharField(max_length=30,null=True,blank=True)
    applicants = models.IntegerField(default=0)
    hired = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    
    def __str__(self) :
        return self.designation
    
    
    
class JobApplication(models.Model):
    user = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    recruiter = models.ForeignKey(RecruiterProfile,on_delete=models.CASCADE)
    job = models.ForeignKey(Job,on_delete=models.CASCADE)
    status = models.CharField(max_length=30,default='PENDING')
    applied = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
        
    def __str__(self):
        return self.job.designation
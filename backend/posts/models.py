from django.db import models

# Create your models here.

class PostPlans(models.Model):
    plan_name = models.CharField(max_length=20,null=True,blank=True)
    no_of_post = models.IntegerField(null=True,blank=True)
    amount = models.IntegerField(null=True,blank=True)
    
    def __str__(self):
        return self.plan_name
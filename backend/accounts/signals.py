from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.emails import send_post_approval_via_email
from recruiter.models import Job

@receiver(post_save, sender=Job)
def job_post_is_created(sender,instance, created, **kwargs):
    if created:
        id = instance.id
        print(id,"SIGNALS")
        print("_________________________________CREATED__________________________________")
        send_post_approval_via_email(id)
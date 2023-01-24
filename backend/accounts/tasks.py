import random
from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
from .models import Account



@shared_task
def send_otp_via_email(email):
    subject = "JOBACQUIRE ACCOUNT VERIFICATION "
    otp = random.randint(1000, 9999)
    message = f'YOUR ONE TIME PASSWORD IS {otp}'
    email_from = settings.EMAIL_HOST
    send_mail(subject,message, email_from, [email])
    print(subject,"S",otp,"D",email_from,"V",message,"",email)
    user_obj = Account.objects.get(email=email)
    user_obj.otp = otp
    user_obj.save()
    return True


from django.core.mail import send_mail
import random
from django.conf import settings
from .models import Account


# def send_otp_via_email(email):
#     subject = "YOUR ACCOUNT VERIFICATION E-MAIL"
#     otp = random.randint(1000, 9999)
#     message = f'YOUR ONE TIME PASSWORD IS {otp}'
#     email_from = settings.EMAIL_HOST
#     send_mail(subject,message, email_from, [email])
#     print(subject,"S",otp,"D",email_from,"V",message,"",email)
#     user_obj = Account.objects.get(email=email)
#     user_obj.otp = otp
#     user_obj.save()
    
    
def send_post_approval_via_email(id):
    subject = "RECRUITER POST APPROVAL"
    message = f'Check the mew job posted  http://localhost:3000/admin_approve_post/{id}'
    email_from = settings.EMAIL_HOST
    email = 'jobacquire0002@gmail.com'
    send_mail(subject,message, email_from, [email])
    print(subject,"S",id,email_from,"V",message,"",email)
    
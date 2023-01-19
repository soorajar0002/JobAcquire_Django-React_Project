from django.shortcuts import render
from django.contrib.auth import get_user_model

from accounts.models import Account
# Create your views here.


User = get_user_model

def index(request):
    print(request.user.username)
    users = Account.objects.exclude(username=request.user.username)
    return render(request, 'index.html',context={'users':users})

def chatPage(request,username):
    print(username,"aaaaaaaaaaaadddddddd")
    user_obj = Account.objects.get(username=username)
    print(user_obj)
    users = Account.objects.exclude(username=request.user.username)
    return render(request, 'main_chat.html', context={'users':users,'user':user_obj})
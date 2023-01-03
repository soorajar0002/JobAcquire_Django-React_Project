from django.shortcuts import render

# Create your views here.
def upload_to(instance, filename):
    return 'profile/{filename}'.format(filename=filename)
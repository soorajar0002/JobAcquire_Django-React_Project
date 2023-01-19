
from django.contrib import admin
from django.urls import path,include
from chat.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('accounts.api.urls')),
    path('chat/',include('chat.urls', namespace='chat'))
]


from django.contrib import admin
from django.urls import path,include
from chat.views import index
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='index.html')),
    path('api/',include('accounts.api.urls')),
    path('chat/',include('chat.urls', namespace='chat'))
]

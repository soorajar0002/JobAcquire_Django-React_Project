from django.db import models

from accounts.models import Account

# Create your models here.
class Message(models.Model):
    author = models.ForeignKey(Account, related_name='author_messages',on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.author.username
    
    def last_10_messages(self):
        return Message.objects.order_by('-timestamp').all()[:10]
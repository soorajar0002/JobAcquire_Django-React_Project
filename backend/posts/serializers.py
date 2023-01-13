from rest_framework import serializers
from .models import PostPlans



class PostPlansSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPlans
        fields = "__all__"
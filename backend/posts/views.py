from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PostPlansSerializer

from posts.models import PostPlans
# Create your views here.

class PostPlansView(APIView):
    def get(self, request):
        plans = PostPlans.objects.all()
        serializer = PostPlansSerializer(plans,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        print(request.data)
        plan = PostPlans.objects.get(id=request.data["planId"])
        serializer = PostPlansSerializer(plan)
        return Response(serializer.data)
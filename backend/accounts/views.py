from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer


class LogoutAPIView(APIView):
    permission_classes = (IsAuthenticated, )
    
    def post(self, request):
        request.user.auth_token.delete()
        return Response(data={'message': f"Bye {request.user.username}!"})

class UserRegistration(generics.CreateAPIView):
    serializer_class = UserSerializer

class Profile(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get(self, request):
        user = request.user
        return Response(data={'username': user.username, 'email': user.email})
    
    def put(self, request):
        user = request.user
        user.username = request.POST.get('username')
        user.email = request.POST.get('email')
        user.password = request.POST.get('password')
        user.save()
        return Response(data={'message': f"{user.username}'s Profile Updated!"})

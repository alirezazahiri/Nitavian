from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

class LogoutAPIView(APIView):
    permission_classes = (IsAuthenticated, )
    
    def post(self, request):
        request.user.auth_token.delete()
        return Response(data={'message': f"Bye {request.user.username}!"})

class UserRegistration(generics.CreateAPIView):
    serializer_class = UserSerializer

class Gold(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get(self, request):
        if request.method == 'GET':
            user = request.user
            return Response({'username': user.username, 'email': user.email, 'gold': user.gold, 'swordmen': user.swordmen})
        return Response({'message': 'User Not Found!'})
    
    def post(self, request):
            user = request.user
            try:
                user.gold = 0
                user.save()
                return Response({'message': f"{user.username}'s coins increased to {user.gold}", 'gold': user.gold})
            except user.DoesNotExist:
                return Response({'message': f'{user.username} does not exist'})

class SwordMen(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get(self, request):
        if request.method == 'GET':
            user = request.user
            return Response({'username': user.username, 'email': user.email, 'gold': user.gold, 'swordmen': user.swordmen})
        return Response({'message': 'User Not Found!'})
    
    def post(self, request):
            user = request.user
            try:
                user.swordmen = 0
                user.save()
                return Response({'message': f"{user.username}'s swordmen increased to {user.swordmen}", 'swordmen': user.swordmen, 'gold': user.gold})
            except user.DoesNotExist:
                return Response({'message': f'{user.username} does not exist'})

class GoldX(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get(self, request):
        if request.method == 'GET':
            user = request.user
            return Response({'username': user.username, 'email': user.email, 'gold': user.gold, 'swordmen': user.swordmen})
        return Response({'message': 'User Not Found!'})
    
    def post(self, request):
            user = request.user
            try:
                user.gold -= 50
                user.save()
                return Response({'message': f"{user.username}'s coins increased to {user.gold}", 'gold': user.gold})
            except user.DoesNotExist:
                return Response({'message': f'{user.username} does not exist'})


class SwordMenX(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get(self, request):
        if request.method == 'GET':
            user = request.user
            return Response({'username': user.username, 'email': user.email, 'gold': user.gold, 'swordmen': user.swordmen})
        return Response({'message': 'User Not Found!'})
    
    def post(self, request):
            user = request.user
            try:
                user.swordmen -= 1
                user.save()
                return Response({'message': f"{user.username}'s swordmen increased to {user.swordmen}", 'swordmen': user.swordmen})
            except user.DoesNotExist:
                return Response({'message': f'{user.username} does not exist'})

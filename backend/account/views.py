from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics

from django.contrib.auth import authenticate, login
from django.shortcuts import redirect

class SignUpView(generics.CreateAPIView):
    serializer_class = UserSerializer

def sign_in(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        response = redirect('http://localhost:3000/dashboard')
        return response
    else:
        response = redirect('http://localhost:3000/not_success')
        return response

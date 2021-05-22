from rest_framework import serializers
from django.contrib.auth.models import AbstractBaseUser
from .models import User

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ("username", "email", "password")
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password1=validated_data['password'],
        )
        user.save()

        return user

from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=150)
    
    def __str__(self):
        return '{} {}'.format(username, email)

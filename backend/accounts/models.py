from django.contrib.auth.models import AbstractUser
from django.db import models
# Create your models here.
class User(AbstractUser):
    gold = models.IntegerField(default=0)
    swordmen = models.IntegerField(default=0)
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    pass

class GoldMine(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gold = models.IntegerField()

class Barracks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    soldiers = models.IntegerField()

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    notification = models.CharField(max_length=700)

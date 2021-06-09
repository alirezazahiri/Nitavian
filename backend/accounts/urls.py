from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserRegistration, LogoutAPIView, Gold, SwordMen, GoldX, SwordMenX

urlpatterns = [
    path('login/', obtain_auth_token),
    path('logout/', LogoutAPIView.as_view()),
    path('register/', UserRegistration.as_view()),
    path('gold_get/', Gold.as_view()),
    path('gold_inc/', Gold.as_view()), 
    path('gold_dec/', GoldX.as_view()), 
    path('swordmen_get/', SwordMen.as_view()),
    path('swordmen_inc/', SwordMen.as_view()),
    path('swordmen_dec/', SwordMenX.as_view())
]

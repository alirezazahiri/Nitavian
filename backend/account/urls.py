from django.urls import path
from .views import SignUpView, sign_in
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register', view=SignUpView),
    path('login', view=obtain_auth_token)
]

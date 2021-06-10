from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin

from accounts.models import User


@admin.register(User)
class UserAdmin(DefaultUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
    )
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active')
    list_editable = ('is_staff', 'is_active')

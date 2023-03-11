from django.contrib import admin

# Register your models here.
from django.contrib.auth import get_user_model

from django.contrib.auth.admin import UserAdmin
from .models import *

class CustomUserAdmin(UserAdmin):
    model = UserProfile
    list_display = ('email','username','Profilepic','date_joined','is_superuser','is_staff','is_active',)
    list_filter = ('is_staff',)
    search_fields = ('email','username')
    ordering = ('email','username')

UserProfile = get_user_model()
admin.site.register(UserProfile, CustomUserAdmin)

admin.site.register(domain)
admin.site.register(multi_image)
admin.site.register(reviews)
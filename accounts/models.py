from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomUserManager
from django.utils import timezone

class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    username = models.CharField(('username'), max_length=150, unique=True,error_messages={'unique': "A user with that username already exists.",} )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    firstname= models.CharField(blank=True, max_length=150)
    lastname= models.CharField(blank=True, max_length=150)
    bio = models.TextField(blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    Profilepic = models.FileField(upload_to='user_profile/', null=True, blank=True)
    is_photographer = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

class multi_image(models.Model):
    user = models.ForeignKey(UserProfile, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profilealbum/",blank=True, null=True)

class domain(models.Model):
    Domain_Choices = (('food', 'food'),
              ('portrait', 'portrait'),
              ('corporate_event', 'corporate_event'),
              ('corporate_headshots', 'corporate_headshots'),
              ('personal', 'personal'))
    user = models.ForeignKey(UserProfile, default=None, on_delete=models.CASCADE)
    domain_title = models.CharField(choices=Domain_Choices, blank=True, max_length=150)
    price = models.IntegerField(blank=True)

class reviews(models.Model):
    user = models.ForeignKey(UserProfile, default=None, on_delete=models.CASCADE)
    review = models.TextField(blank=True)
    avgrev = models.IntegerField(blank=True, default=100)


# class CodeEmail(models.Model):
#     code = models.IntegerField()
#     email = models.EmailField(max_length=254)

'''
Email address: super@gmail.com
Password:super
'''
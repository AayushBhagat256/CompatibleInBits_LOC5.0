from django.db import models
from accounts.models import *
# Create your models here.

class booking(models.Model):
    booker = models.ForeignKey(UserProfile, default=None, on_delete=models.CASCADE, related_name='per1')
    booked_user = models.ForeignKey(UserProfile, default=None, on_delete=models.CASCADE, related_name='per2')
    date = models.DateField(blank = True)


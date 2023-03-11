from django.db import models
from accounts.models import *

# Create your models here.
class Album(models.Model):
    Title = models.CharField(max_length=255, blank=False)
    Description = models.TextField(blank=True)
    availability = models.BooleanField(default=True)
    publisher = models.CharField(blank=False, max_length=15)
    photographer = models.ForeignKey(UserProfile, null=False, on_delete=models.CASCADE)
    price = models.IntegerField(default=100)
    coverphoto = models.FileField(upload_to='album_cover_pic/', null=True)

    def __str__(self):
        return self.Title
    
class album_multi_image(models.Model):
    album = models.ForeignKey(Album, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="marketplace_album/",blank=True, null=True)

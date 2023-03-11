from rest_framework import serializers
from .models import *

class AlbumSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Album
        exclude = ['photographer', ]
    
    def save(self, request):
        photographer =request.user.email
        print(photographer)
        album = Album(
            photographer=UserProfile.objects.get(email=photographer),
            Title=self.validated_data['Title'],
            Description=self.validated_data['Description'],
            availability=self.validated_data['availability'],
            publisher=self.validated_data['publisher'],
            price=self.validated_data['price'],
            coverphoto=self.validated_data['coverphoto'],
        )
        album.save()

class Market_Album_Image_serializer(serializers.ModelSerializer):
    
    class Meta(object):
        model = album_multi_image
        fields = ['image']
        # fields = '__all__'

    def save(self, request, pk):
        # user_email = request.user.email
        # print(user_email,self.validated_data['image'])
        image_inst = album_multi_image(
            album=Album.objects.get(id=pk),
            image=self.validated_data['image'],
        )
        image_inst.save()
        return image_inst
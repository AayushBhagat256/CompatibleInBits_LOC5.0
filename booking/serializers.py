from rest_framework import serializers
from .models import *

class booking_serializer(serializers.ModelSerializer):
    
    class Meta(object):
        model = booking
        exclude = ['booker','id','booked_user' ]

    def save(self, request, username):
        booker =request.user.email
        bookinginst = booking(
            booker=UserProfile.objects.get(email=booker),
            date=self.validated_data['date'],
            booked_user=username,
        )
        bookinginst.save()

class booking_serializer_get(serializers.ModelSerializer):
    
    class Meta(object):
        model = booking
        fields= '__all__'
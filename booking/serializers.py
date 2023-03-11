from rest_framework import serializers
from .models import *

class booking_serializer(serializers.ModelSerializer):
    
    class Meta(object):
        model = booking
        exclude = ['booker', ]

    def save(self, request):
        booker =request.user.email
        bookinginst = booking(
            booker=UserProfile.objects.get(email=booker),
            date=self.validated_data['date'],
            booked=UserProfile.objects.get(email=booker),
        )
        bookinginst.save()

class booking_serializer_get(serializers.ModelSerializer):
    
    class Meta(object):
        model = booking
        fields= '__all__'
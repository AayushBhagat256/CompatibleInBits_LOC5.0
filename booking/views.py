from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FileUploadParser,FormParser,MultiPartParser
import json

# Create your views here.
class BookingView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = booking_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, request):
        user_email=request.user.email
        user=UserProfile.objects.get(email=user_email)
        return reviews.objects.filter(user__email=user_email)
    
    def get(self, request, *args, **kwargs):
        username = kwargs.get('username')
        bookings = booking.objects.filter(booked_user__username=username)
        serializer = booking_serializer_get(bookings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        username = kwargs.get('username')
        serializer = booking_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(request, username)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

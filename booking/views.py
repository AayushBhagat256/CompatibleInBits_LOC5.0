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
    
    def get(self, request):
        review = reviews.objects.all()
        serializer = booking_serializer_get(review, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
    
    def post(self, request):
        serializer = booking_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

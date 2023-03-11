from django.shortcuts import render

# Create your views here.
from rest_framework.generics import GenericAPIView
from .models import UserProfile
from . serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FileUploadParser,FormParser,MultiPartParser
import json

class UserRegistration(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            account=serializer.save()
            data['serializer_data']=serializer.data
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = UserSerializer
    parser_classes = (FormParser, MultiPartParser)

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        serializer_data = request.data
        serializer = UserSerializer(request.user, data=serializer_data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DomainView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Domain_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, request):
        user_email=request.user.email
        user=UserProfile.objects.get(email=user_email)
        # try:
        return domain.objects.filter(user__email=user_email)
        # except domain.DoesNotExist:
        #     raise status.HTTP_404_NOT_FOUND

    def get(self, request):
        domains = self.get_object(request)
        serializer = Domain_serializer(domains, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)

    def put(self, request, *args, **kwargs):
        serializer_data = request.data
        serializer = Domain_serializer(request.user, data=serializer_data, partial=True)
        if serializer.is_valid(raise_exception=True):
            inst = serializer.save(request)
            serializer_inst = Domain_serializer(inst)
            return Response(serializer_inst.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ImageAlbumView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Image_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, request):
        user_email=request.user.email
        user=UserProfile.objects.get(email=user_email)
        # try:
        return multi_image.objects.filter(user__email=user_email)
        # except domain.DoesNotExist:
        #     raise status.HTTP_404_NOT_FOUND

    def get(self, request):
        images = self.get_object(request)
        serializer = Image_serializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
    
    def put(self, request, *args, **kwargs):
        serializer_data = request.data
        serializer = Image_serializer(request.user, data=serializer_data, partial=True)
        if serializer.is_valid(raise_exception=True):
            inst = serializer.save(request)
            serializer_inst = Image_serializer(inst)
            return Response(serializer_inst.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ParticularDomainView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Domain_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, name):
        try:
            return domain.objects.filter(domain_title=name)
        except domain.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self,request, *args, **kwargs):
        name = kwargs.get('name')
        domains = self.get_object(name)
        userlist =[]
        for inst in domains:
            userlist.append(UserProfile.objects.get(email=inst.user))
        serializer = UserSerializer(userlist, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
    
class Reviewview(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Review_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, request):
        user_email=request.user.email
        user=UserProfile.objects.get(email=user_email)
        return reviews.objects.filter(user__email=user_email)
    
    def get(self, request):
        reviews = self.get_object(request)
        serializer = Review_serializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
    
    def put(self, request, *args, **kwargs):
        serializer_data = request.data
        serializer = Review_serializer(request.user, data=serializer_data, partial=True)
        if serializer.is_valid(raise_exception=True):
            inst = serializer.save(request)
            serializer_inst = Review_serializer(inst)
            return Response(serializer_inst.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
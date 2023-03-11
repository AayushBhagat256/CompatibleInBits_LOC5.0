from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FileUploadParser,FormParser,MultiPartParser
from accounts.models import *
from accounts.serializers import *
# Create your views here.

class AlbumListView(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class = AlbumSerializer
    parser_classes = (FormParser, MultiPartParser)
    def get(self, request):
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class AlbumDetailView(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class = AlbumSerializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, pk):
        try:
            return Album.objects.get(pk=pk)
        except Album.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data)

    def put(self, request, pk):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        album = self.get_object(pk)
        album.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class MarketImageAlbumView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Market_Album_Image_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, pk):
        album=Album.objects.get(pk=pk)
        # user=UserProfile.objects.get(email=user_email)
        # try:
        return album_multi_image.objects.filter(album__id=album.id)
        # except domain.DoesNotExist:
        #     raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        images = self.get_object(pk)
        serializer = Market_Album_Image_serializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
    
    def put(self, request, pk, *args, **kwargs):
        serializer_data = request.data
        serializer = Market_Album_Image_serializer(request.user, data=serializer_data, partial=True)
        if serializer.is_valid(raise_exception=True):
            inst = serializer.save(request, pk)
            serializer_inst = Market_Album_Image_serializer(inst)
            return Response(serializer_inst.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MarketImageAlbumProfileView(GenericAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = Market_Album_Image_serializer
    parser_classes = (FormParser, MultiPartParser)

    def get_object(self, pk):
        album=Album.objects.get(pk=pk)
        # user=UserProfile.objects.get(email=user_email)
        # try:
        return UserProfile.objects().get(email=album.photographer)
        # except domain.DoesNotExist:
        #     raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_302_FOUND)
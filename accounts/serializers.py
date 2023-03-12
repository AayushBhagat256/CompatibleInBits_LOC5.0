from rest_framework import serializers
from .models import *

class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)

    class Meta:
        model=UserProfile
        fields = ['email','username','password','password2','is_photographer']
        extra_kwargs = {
            'password': {'write_only':True}
        }

    def save(self):
        profile = UserProfile(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            is_photographer=self.validated_data['is_photographer'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password':'Passwords must match.'})
        profile.set_password(password)
        profile.is_active=True

        profile.save()

        return profile

class UserSerializer(serializers.ModelSerializer):

    date_joined = serializers.ReadOnlyField()

    class Meta(object):
        model = UserProfile
        fields = ['email','username','Profilepic','date_joined','firstname','lastname','bio']
        extra_kwargs = {'password': {'write_only': True}}

class Multi_imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = multi_image
        fields = ['image']

class Domain_serializer(serializers.ModelSerializer):
    
    class Meta(object):
        model = domain
        fields = ['domain_title','price']
        # fields = '__all__'

    def save(self, request):
        user_email = request.user.email
        print(user_email,self.validated_data['domain_title'],self.validated_data['price'])
        domain_inst = domain(
            user=UserProfile.objects.get(email=user_email),
            domain_title=self.validated_data['domain_title'],
            price=self.validated_data['price'],
        )
        domain_inst.save()
        return domain_inst
    
class Image_serializer(serializers.ModelSerializer):
    
    class Meta(object):
        model = multi_image
        fields = ['image']
        # fields = '__all__'

    def save(self, request):
        user_email = request.user.email
        # print(user_email,self.validated_data['image'])
        image_inst = multi_image(
            user=UserProfile.objects.get(email=user_email),
            image=self.validated_data['image'],
        )
        image_inst.save()
        return image_inst
    
# class Specific_Domain_serializer(serializers.ModelSerializer):
#     user = 
#     class Meta(object):
#         model = domain
#         fields = ['domain_title','price']

class Review_serializer(serializers.ModelSerializer):
    class Meta(object):
        model = reviews
        fields = ['review']
    
    def save(self, request):
        user_email = request.user.email
        image_inst = reviews(
            user=UserProfile.objects.get(email=user_email),
            review=self.validated_data['review'],
        )
        image_inst.save()
        return image_inst

class Review_Per_serializer(serializers.ModelSerializer):
    class Meta(object):
        model = reviews
        fields = ['user','review','avgrev']
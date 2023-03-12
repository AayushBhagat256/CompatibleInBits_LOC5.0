from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FileUploadParser,FormParser,MultiPartParser
import json
import razorpay
from loc.settings import RAZORPAY_API_SECRET_KEY, RAZORPAY_API_KEY


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
    
client = razorpay.Client(auth=(RAZORPAY_API_KEY, RAZORPAY_API_SECRET_KEY))
def pay(request, amount):

    if request.POST==True:
        razorpay_payment_id = request.razorpay_payment_id
        razorpay_order_id  = request.razorpay_order_id
        razorpay_signature = request.razorpay_signature

        bool = client.utility.verify_payment_signature({
            'razorpay_order_id': razorpay_order_id,
            'razorpay_payment_id': razorpay_payment_id,
            'razorpay_signature': razorpay_signature
        })


    actual_amount = amount*100
    amount_disp = amount
    DATA = {
        "amount": actual_amount,
        "currency": "INR",
    }
    pay_order = client.order.create(data=DATA)
    pay_order_id = pay_order['id']

    context = {
        'amount': actual_amount,
        'api_key': RAZORPAY_API_KEY,
        'order_id': pay_order_id,
        'amount_disp' : amount_disp,
    }
    return render(request,'payment.html',context)



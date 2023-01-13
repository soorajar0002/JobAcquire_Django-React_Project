import json
import os
import razorpay
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import Account, RecruiterProfile

from posts.models import PostPlans
from payments.constants import PaymentStatus
from  django.conf import settings
from payments.models import RazorpayPayment

# Get Razorpay Key id and secret for authorize razorpay client.
RAZOR_KEY_ID = settings.RAZOR_KEY_ID
RAZOR_KEY_SECRET = settings.RAZOR_KEY_SECRET 

# Creating Razorpay Client instance.
razorpay_client = razorpay.Client(auth=(RAZOR_KEY_ID, RAZOR_KEY_SECRET))

class RazorpayPaymentView(APIView):
    """
    APIView for Creating Razorpay Order.
    :return: list of all necessary values to open Razopary SDK
    """

    http_method_names = ('post',)

    @staticmethod
    def post(request, *args, **kwargs):
        print(request.data)
        plan = PostPlans.objects.get(id=request.data["planId"])
        print(plan)
        # Take Order Id from frontend and get all order info from Database.
        # order_id = request.data.get('order_id', None)

        # Here We are Using Static Order Details for Demo.
        name = "Swapnil Pawar"
        amount = plan.amount

        # Create Order
        razorpay_order = razorpay_client.order.create(
            {"amount": int(amount) * 100, "currency": "INR", "payment_capture": "1"}
        )

        # Save the order in DB
        order = RazorpayPayment.objects.create(
            name=name, amount=amount, provider_order_id=razorpay_order["id"]
        )

        data = {
            "name" : name,
            "merchantId": RAZOR_KEY_ID,
            "amount": amount,
            "currency" : 'INR' ,
            "orderId" : razorpay_order["id"],
            }

        # save order Details to frontend
        return Response(data, status=status.HTTP_200_OK)

class RazorpayCallback(APIView):
    
    """
    APIView for Verifying Razorpay Order.
    :return: Success and failure response messages
    """

    @staticmethod
    def post(request, *args, **kwargs):
        print(request.data)
        # geting data form request
        response = request.data["datas"]
        user_id = request.data["user_id"]
        print(user_id)
        plan_id = request.data["planId"]
        print(plan_id)
        
        """
            if razorpay_signature is present in request 
            it will try to verify
            else throw error_reason
        """
        if "razorpay_signature" in response:

            # Verifying Payment Signature
            data = razorpay_client.utility.verify_payment_signature(response)

            # if we get here Ture signature
            if data:
                payment_object = RazorpayPayment.objects.get(provider_order_id = response['razorpay_order_id'])                # razorpay_payment = RazorpayPayment.objects.get(order_id=response['razorpay_order_id'])
                payment_object.status = PaymentStatus.SUCCESS
                payment_object.payment_id = response['razorpay_payment_id']
                payment_object.signature_id = response['razorpay_signature']          
                payment_object.save()
                plan = PostPlans.objects.get(id=plan_id)
                user = Account.objects.get(id=user_id)
                recruiter_profile = RecruiterProfile.objects.get(user=user)
                recruiter_profile.post_balance = recruiter_profile.post_balance + plan.no_of_post
                recruiter_profile.save()

                return Response({'status': 'Payment Done'}, status=status.HTTP_200_OK)
            else:
                return Response({'status': 'Signature Mismatch!'}, status=status.HTTP_400_BAD_REQUEST)

        # Handling failed payments
        else:
            error_code = response['error[code]']
            error_description = response['error[description]']
            error_source = response['error[source]']
            error_reason = response['error[reason]']
            error_metadata = json.loads(response['error[metadata]'])

            razorpay_payment = RazorpayPayment.objects.get(provider_order_id=error_metadata['order_id'])
            razorpay_payment.payment_id = error_metadata['payment_id']
            razorpay_payment.signature_id = "None"
            razorpay_payment.status = PaymentStatus.FAILURE
            razorpay_payment.save()

            error_status = {
                'error_code': error_code,
                'error_description': error_description,
                'error_source': error_source,
                'error_reason': error_reason,
            }

            return Response({'error_data': error_status}, status=status.HTTP_401_UNAUTHORIZED)

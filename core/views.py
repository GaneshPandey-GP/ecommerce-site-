from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from core.serializers import ItemSerializer, ItemDetailSerializer, UserSerializer, CreateUserSerializer, LoginUserSerializer
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework import viewsets, permissions, generics
from knox.models import AuthToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from core.models import Item, OrderItem, Order

class ItemListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class ItemDetailView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ItemDetailSerializer
    queryset = Item.objects.all()


class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
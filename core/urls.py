from django.urls import path, include
from core.views import (
    ItemListView,
    ItemDetailView,
    RegistrationAPI,
    LoginAPI,
    UserAPI,
)

from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('products/', ItemListView.as_view(), name='product-list'),
    path('product/<pk>/', ItemDetailView.as_view(), name='product-detail'),
    path("auth/register/", RegistrationAPI.as_view(), name="auth-registration"),
    path("auth/login/", LoginAPI.as_view()),
    path("auth/user/", UserAPI.as_view()),


]

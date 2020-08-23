from django.urls import path, include
from core.views import (
    ItemListView,
    ItemDetailView,
)
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('products/', ItemListView.as_view(), name='product-list'),
    path('product/<pk>/', ItemDetailView.as_view(), name='product-detail'),
]

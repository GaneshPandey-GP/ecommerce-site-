from rest_framework import serializers
from core.models import Item
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class ItemSerializer(serializers.ModelSerializer):
    label = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = (
            'id',
            'item_name',
            'price',
            'discount_price',
            'category',
            'label',
            'slug',
            'description',
            'thumbnail'
        )

    def get_label(self, obj):
        return obj.get_label_display()

class ItemDetailSerializer(serializers.ModelSerializer):
    label = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = (
            'id',
            'item_name',
            'price',
            'discount_price',
            'category',
            'label',
            'slug',
            'description',
            'thumbnail'
        )

    def get_label(self, obj):
        return obj.get_label_display()


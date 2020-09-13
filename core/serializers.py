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

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        validated_data['email'],
                                        None,
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")
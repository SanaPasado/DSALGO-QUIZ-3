from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'image', 'description', 'rating', 'price', 'duration_of_service', 'name_of_the_expert', 'created_at']

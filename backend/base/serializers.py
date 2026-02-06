from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model = Service
        fields = ['id', 'name', 'image', 'description', 'rating', 'price', 'duration_of_service', 'name_of_the_expert', 'created_at']
    
    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            else:
                return f"http://127.0.0.1:8000{obj.image.url}"
        return None

# it can be "fields = ['all'], but don't include password field in login serializer"
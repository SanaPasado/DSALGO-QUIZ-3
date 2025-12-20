from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'description', 'category', 'price', 'countInStock', 'rating', 'numReviews']


# Serializer for plain dict objects (when using backend-side products list)
class ProductDictSerializer(serializers.Serializer):
    _id = serializers.CharField()
    name = serializers.CharField()
    image = serializers.CharField(allow_blank=True, allow_null=True)
    description = serializers.CharField(allow_blank=True, allow_null=True)
    category = serializers.CharField(allow_blank=True, allow_null=True)
    price = serializers.FloatField()
    countInStock = serializers.IntegerField()
    rating = serializers.FloatField()
    numReviews = serializers.IntegerField()

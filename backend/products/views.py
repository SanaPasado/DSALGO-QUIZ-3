from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

# Use the backend products list when the database-backed model is not desired.
from .products import products as PRODUCTS_LIST
from .serializers import ProductDictSerializer


class ProductListAPIView(APIView):
    """Return the list of products from the backend `products.py` list."""

    def get(self, request):
        serializer = ProductDictSerializer(PRODUCTS_LIST, many=True)
        return Response(serializer.data)


class ProductDetailAPIView(APIView):
    """Return a single product by _id from the backend `products.py` list."""

    def get_object(self, pk):
        for p in PRODUCTS_LIST:
            if p.get('_id') == str(pk) or p.get('_id') == pk:
                return p
        raise Http404

    def get(self, request, pk):
        try:
            product = self.get_object(pk)
        except Http404:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductDictSerializer(product)
        return Response(serializer.data)

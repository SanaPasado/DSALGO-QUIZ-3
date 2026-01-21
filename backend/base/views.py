from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render

from backend.base.products import Product

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api/routes/',
        '/api/products/',
        '/api/products/<id>/',
        '/api/users/login/',
        '/api/users/register/',
        '/api/users/profile/',
        '/api/orders/',
        '/api/orders/<id>/',
        '/api/products/<id>/reviews/',
        '/api/products/delete/<id>/',
        '/api/products/update/<id>/',
        '/api/products/create/',
    ]

    return JsonResponse(routes, safe=False)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    return JsonResponse(products, safe=False)

def getProduct(request, pk):
    products = Product.objects.get(id=pk)

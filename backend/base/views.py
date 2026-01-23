from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Service
from .serializers import ServiceSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/token/refresh/',
        '/api/users/profile/',
        '/api/services/',
        '/api/stockphotos/',
        '/api/admin/users/',

    ]
    return JsonResponse(routes, safe=False)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def getServices(request):
    if request.method == 'GET':
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def getServiceDetail(request, pk):
    service = Service.objects.get(id=pk)
    
    if request.method == 'GET':
        serializer = ServiceSerializer(service)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ServiceSerializer(service, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    elif request.method == 'DELETE':
        service.delete()
        return Response({'detail': 'Service deleted'}, status=204)

@api_view(['POST'])
def register_user(request):
    print(request.data['username'])
    username_field = request.data['username']
    password_field = request.data['password']
    email_field = request.data['email'] 

    User.objects.create_user(username=username_field, password=make_password(password_field), email=email_field)
    return Response ({'detail': request.data})

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializer(self.user).data 
       
        for k, v in serializer.items():
            data[k] = v
        
        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
   
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'username', 'email', 'isAdmin']
    
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


@api_view(['GET'])
@permission_classes([AllowAny])
def getStockPhotos(request):
    stock_photos = [
        {
            '_id': 1,
            'name': 'Bedroom Organization',
            'image': '/images/pic1.jpg',
            'description': 'Transform your living space into an organized sanctuary with our professional home organizing services. Creating serene, clutter-free environments.',
            'rating': 5,
            'price': 2500,
            'duration_of_service': '6 hours',
            'name_of_the_expert': 'Maria Santos',
        },
        {
            '_id': 2,
            'name': 'Kitchen Optimization',
            'image': '/images/pic2.jpg',
            'description': 'Expert decluttering and space optimization tailored to your lifestyle. Let us help you maximize functionality and minimize chaos in every room.',
            'rating': 4,
            'price': 2000,
            'duration_of_service': '5 hours',
            'name_of_the_expert': 'John Cruz',
        },
        {
            '_id': 3,
            'name': 'Living Room Redesign',
            'image': '/images/pic3.jpg',
            'description': 'Professional organization solutions designed to streamline your daily life. From closets to kitchens, we create systems that truly work for you.',
            'rating': 4,
            'price': 1800,
            'duration_of_service': '4 hours',
            'name_of_the_expert': 'Angela Torres',
        },
    ]
    return Response(stock_photos)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserDetail(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)




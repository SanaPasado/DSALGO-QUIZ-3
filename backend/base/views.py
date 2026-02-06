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
        '/api/users/login/',
        '/api/users/register/',
        '/api/users/profile/',
        '/api/services/',
        '/api/service/<id>/',
        '/api/admin/users/',

    ]
    return JsonResponse(routes, safe=False)

@api_view(['GET'])
def getServices(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True, context={'request': request})
    return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def getServiceDetail(request, pk):
    service = Service.objects.get(pk=pk)
    serializer = ServiceSerializer(service, many=False, context={'request': request})
    return Response(serializer.data)

#Rule: parameters must 
# match exactly what you put in the URL path.

# ex. urls.py: path('service/<str:service_id>/review/<int:review_id>/')
# def getReview(request, service_id, review_id):

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




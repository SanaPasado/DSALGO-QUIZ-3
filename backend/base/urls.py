from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('auth/register/', views.register_user, name='register'),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users.user/profile/', views.getUserProfile, name='user-profile'),
    path('api/services/', views.getServices, name='services'),
    path('api/services/<str:pk>/', views.getServiceDetail, name='service-detail'),
    path('api/stockphotos/', views.getStockPhotos, name='stockphotos'),
    path('api/admin/users/', views.getUsers, name='admin-users-list'),
    path('api/users/<str:pk>/', views.getUserDetail, name='user-detail'),
]
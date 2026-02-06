from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('routes', views.getRoutes, name="routes"),
    path('users/register', views.register_user, name='register'),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile', views.getUserProfile, name='user-profile'),
    path('services', views.getServices, name='services'),
    path('service/<str:pk>', views.getServiceDetail, name='service-detail'),
    path('admin/users', views.getUsers, name='admin-users-list'),
    path('users/<str:pk>', views.getUserDetail, name='user-detail'),
]
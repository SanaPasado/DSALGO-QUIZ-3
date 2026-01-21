from django.urls import path
from backend import views
from views import getRoutes, getProducts

urlpatterns = [
    path( '', getRoutes, name='Routes' ),]
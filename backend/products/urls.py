from django.urls import re_path
from .views import ProductListAPIView, ProductDetailAPIView

# Accept optional trailing slash so frontend requests with or without
# a trailing slash will succeed (e.g. /api/products and /api/products/)
urlpatterns = [
    re_path(r'^$', ProductListAPIView.as_view(), name='product-list'),
    re_path(r'^(?P<pk>\d+)/?$', ProductDetailAPIView.as_view(), name='product-detail'),
]

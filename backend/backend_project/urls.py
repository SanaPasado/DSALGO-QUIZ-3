from django.urls import path, include
from django.http import JsonResponse
from django.urls import reverse
from django.views.generic import TemplateView


def api_index(request):
    routes = [
        {'path': '/api/', 'methods': ['GET'], 'description': 'List available endpoints'},
        {'path': '/api/products', 'methods': ['GET'], 'description': 'List all products'},
        {'path': '/api/products/<id>', 'methods': ['GET'], 'description': 'Product detail'},
    ]
    return JsonResponse({'endpoints': routes})


urlpatterns = [
    # API routes
    path('api/', api_index, name='api-root'),
    path('api/products/', include('products.urls')),

    # Serve the React app's index.html at the root URL. After running
    # `npm run build` in `frontend/`, Django will serve the built app.
    path('', TemplateView.as_view(template_name='index.html'), name='frontend-index'),
]

# CORS Configuration Guide

## What is CORS?

CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts requests from different domains. This prevents malicious websites from accessing your API without permission.

## Current CORS Configuration

The backend is configured in `backend/settings.py`:

```python
CORS_ALLOW_ALL_ORIGINS = False  # Only allow specific origins

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",      # React development server
    "http://127.0.0.1:3000",      # Alternative localhost
    "http://localhost:8000",      # Django development server
    "http://127.0.0.1:8000",      # Alternative localhost
]

CORS_ALLOW_CREDENTIALS = True    # Allow cookies/credentials

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',              # JWT tokens
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
```

## Frontend Configuration

No special CORS setup needed in React. Just ensure API calls include proper headers:

```javascript
// Example API call with Authorization header
axios.get('http://127.0.0.1:8000/api/users/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

## Troubleshooting CORS Errors

### Error: "Access to XMLHttpRequest at 'http://...' from origin 'http://localhost:3000' has been blocked by CORS policy"

**Solution**: Add your frontend URL to `CORS_ALLOWED_ORIGINS` in `backend/settings.py`

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",     # Your frontend URL
    "http://127.0.0.1:3000",
    # Add more URLs as needed
]
```

### Error: "Response to preflight request doesn't pass access control check"

**Solution**: Ensure all required headers are in `CORS_ALLOW_HEADERS`

### Localhost Not Working?

Make sure you're using the same localhost format in both places:
- Frontend: `http://127.0.0.1:3000` or `http://localhost:3000`
- Backend API calls: `http://127.0.0.1:8000` or `http://localhost:8000`
- CORS Settings: Include both formats

## Production CORS Configuration

For production, be more restrictive:

```python
CORS_ALLOWED_ORIGINS = [
    "https://yourdomain.com",
    "https://www.yourdomain.com",
    "https://api.yourdomain.com",
]

CORS_ALLOW_CREDENTIALS = True
```

## Middleware Order

CORS middleware MUST be before other middleware:

```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # ← Must be first
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # ... other middleware
]
```

## Reference

- [django-cors-headers Documentation](https://github.com/adamchainz/django-cors-headers)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

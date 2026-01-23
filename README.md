# DSALGO Quiz 3 - Organization Service Platform

A full-stack web application for managing home organization services. Built with Django REST Framework (backend) and React (frontend).

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Navigation Guide](#navigation-guide)

---

## 🎯 Project Overview

DSALGO Quiz 3 is a platform that connects users with professional home organization service providers. Users can:
- Browse available services
- View service details
- Manage user profiles
- Admin can manage all users and services

---

## 🛠 Tech Stack

### Backend
- **Framework**: Django 6.0
- **API**: Django REST Framework
- **Authentication**: JWT (Simple JWT)
- **Database**: SQLite
- **CORS**: django-cors-headers

### Frontend
- **Library**: React 18
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Framework**: Bootstrap 5

---

## 📁 Project Structure

```
DSALGO-QUIZ-3/
├── backend/
│   ├── backend/
│   │   ├── settings.py          # Django settings
│   │   ├── urls.py              # Main URL configuration
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── base/
│   │   ├── views.py             # API endpoints
│   │   ├── models.py            # Database models
│   │   ├── serializers.py       # DRF serializers
│   │   ├── urls.py              # App URLs
│   │   └── migrations/
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3
│   └── media/                   # User-uploaded media
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Banner.jsx
│   │   │   └── Photo.jsx
│   │   ├── screens/
│   │   │   ├── Homescreen.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ServiceDetail.jsx
│   │   │   ├── Users.jsx        # User list page
│   │   │   ├── UserProfile.jsx  # User detail page
│   │   │   ├── Users.css
│   │   │   └── UserProfile.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── stockphotos.js
│   ├── package.json
│   └── public/
│
└── README.md                    # This file
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create .env file**
   ```bash
   cp .env.sample .env
   # Edit .env with your configuration
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (admin account)**
   ```bash
   python manage.py createsuperuser
   # Follow the prompts to create an admin account
   ```

7. **Create media directories** (Windows)
   ```bash
   mkdir media
   mkdir media\images
   ```
   Or (macOS/Linux):
   ```bash
   mkdir -p media/images
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify API URL**
   - Check that all API calls point to `http://127.0.0.1:8000`
   - Update API base URL in components if needed

---

## 🔑 Environment Variables

### Backend (.env file)

Copy `.env.sample` to `.env` and configure:

```env
DEBUG=True
SECRET_KEY=your-django-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
JWT_ACCESS_TOKEN_LIFETIME=1
JWT_REFRESH_TOKEN_LIFETIME=1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### Frontend

The frontend uses hardcoded API URLs:
- API Base: `http://127.0.0.1:8000`
- Update in component files if deploying to production

---

## 🚀 Running the Project

### Backend Server

```bash
cd backend
# Activate virtual environment
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux

# Run development server
python manage.py runserver
```

Server runs at: `http://127.0.0.1:8000`

### Frontend Server

```bash
cd frontend
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 📡 API Endpoints

### Public Routes
- `GET /` - API routes list
- `POST /auth/register/` - Register new user

### Authentication Routes
- `POST /users/login/` - Login (returns JWT tokens)
- `POST /api/token/` - Get JWT token
- `POST /api/token/refresh/` - Refresh JWT token

### Stock Photos (Public)
- `GET /api/stockphotos/` - Get all stock photos with images

### Services (Authenticated)
- `GET /api/services/` - List all services
- `POST /api/services/` - Create service (requires auth)
- `GET /api/services/<id>/` - Get service detail (requires auth)
- `PUT /api/services/<id>/` - Update service (requires auth)
- `DELETE /api/services/<id>/` - Delete service (requires auth)

### Users (Requires Authentication)
- `GET /api/users/` - List all users (requires admin)
- `GET /api/users/<id>/` - Get user detail (requires auth)
- `GET /users.user/profile/` - Get current user profile (requires auth)

---

## ✨ Features

### User Features
- Browse home organization services
- View detailed service information
- View user profiles
- Secure JWT authentication
- Responsive design with Bootstrap

### Admin Features (Superuser)
- Access all users list
- View individual user details
- Create, update, delete services
- Full service management

### Service Features
- Service listing with images
- Service details (name, description, price, expert, rating, duration)
- Image serving via media endpoint
- CORS-enabled for frontend access

---

## 🧭 Navigation Guide

### Frontend Pages

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home - Service list | Public |
| `/about` | About page | Public |
| `/contact` | Contact form | Public |
| `/photo/:id` | Service detail | Public |
| `/users` | Team members list | Authenticated |
| `/users/:userId` | User profile | Authenticated |

### Admin Interface

Access Django admin at: `http://127.0.0.1:8000/admin/`
- Login with superuser credentials
- Manage services, users, and other data

---

## 🔐 Authentication Flow

1. **Register/Login**
   - User submits credentials at login
   - Backend returns JWT access and refresh tokens
   - Tokens stored in localStorage

2. **Protected Requests**
   - Frontend includes `Authorization: Bearer <token>` header
   - Backend validates token
   - Returns 401 if token invalid/expired

3. **Token Refresh**
   - When access token expires, use refresh token
   - Get new access token without re-login

---

## 🔒 Permissions

| Endpoint | Permission | Access |
|----------|-----------|--------|
| `/api/services/` | IsAuthenticated | Any logged-in user |
| `/api/services/<id>/` | IsAuthenticated | Any logged-in user |
| `/api/users/` | IsAuthenticated + IsAdminUser | Superuser only |
| `/api/users/<id>/` | IsAuthenticated | Any logged-in user |
| `/users.user/profile/` | IsAuthenticated | Current user only |

---

## 🐛 Troubleshooting

### CORS Errors
- Ensure `CORS_ALLOWED_ORIGINS` in settings.py includes your frontend URL
- Check that frontend API URL matches backend URL

### Token Expired
- Clear localStorage and re-login
- Or implement automatic token refresh

### Media Files Not Loading
- Ensure media directories exist in backend
- Check `MEDIA_URL` and `MEDIA_ROOT` in settings.py

### Database Issues
- Run migrations: `python manage.py migrate`
- Reset database: `rm db.sqlite3` then run migrate again

---

## 📦 Dependencies

### Backend (requirements.txt)
```
Django==6.0
djangorestframework
django-cors-headers
djangorestframework-simplejwt
python-decouple
```

### Frontend (package.json)
```
react
react-router-dom
axios
bootstrap
react-bootstrap
```

---

## 🚀 Deployment

### Backend (Production)
1. Set `DEBUG=False` in .env
2. Update `ALLOWED_HOSTS` with your domain
3. Use a production WSGI server (Gunicorn, uWSGI)
4. Use PostgreSQL instead of SQLite
5. Enable HTTPS

### Frontend (Production)
1. Run `npm run build`
2. Deploy `build/` folder to static hosting
3. Update API endpoints to production server

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check browser console for errors
4. Review Django logs with `DEBUG=True`

---

**Last Updated**: January 23, 2026

/commissions: Commission Request Form.

/cart: Shopping Cart.

Backend (Django Admin & API)
/admin: The built-in Django dashboard to manage your crochet inventory and view commission requests.

/api/products/: Returns a list of all crochet items in JSON format.

/api/commissions/: Endpoint to receive and store custom order forms.

🌟 Key Features for LoopedByKlayd
Django Admin: Klayd can easily add new plushies or update prices without touching any code.

REST Framework: Clean JSON data exchange between the Python backend and the JavaScript frontend.

Image Handling: Django's ImageField manages the high-quality photos of the crochet crafts.

🚀 Quick Start Summary
Backend: Activate venv, run pip install -r requirements.txt, then python manage.py runserver.

Frontend: Run npm install then npm start.

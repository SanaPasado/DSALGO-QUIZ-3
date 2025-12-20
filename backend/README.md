# Django Backend API for DSALGO-QUIZ-1

This backend provides a small REST API used by the frontend project (Quiz 1).
It uses Django + Django REST Framework and is configured via environment
variables. The API exposes the same endpoints as the previous Flask
implementation:

Endpoints
- `GET /api/` — list available endpoints
- `GET /api/products/` — list all products
- `GET /api/products/<id>/` — get detail for a product

Features
- Django REST Framework serializers for proper serialization
- CORS configured from `CORS_ALLOWED_ORIGINS` environment variable (do not
  use `*`)

Requirements
- Python 3.8+
- See `requirements.txt` for Python packages

Setup (development)

1. Create a virtual environment and activate it

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

2. Install dependencies

```powershell
pip install -r requirements.txt
```

3. Copy `.env.example` to `.env` and set values

```powershell
copy .env.example .env
# Edit .env and ensure CORS_ALLOWED_ORIGINS contains your frontend origin(s), e.g.:
# CORS_ALLOWED_ORIGINS=http://localhost:3000
# You can set DATABASE_URL=sqlite:///db.sqlite3 to create db.sqlite3 in this folder
```

4. Create the database file and seed sample data (helper)

```powershell
python create_db_django.py
```

This will generate `db.sqlite3` in the `backend` folder and insert sample
products into the `products_product` table. After this you can run the
development server.

5. Run Django development server

```powershell
# (Make sure venv is activated)
python manage.py runserver 0.0.0.0:8000
```

Security & notes
- Do not commit your real `.env` file. Use `.env.example` as reference.
- `CORS_ALLOWED_ORIGINS` must list allowed origins explicitly — `*` is not
  allowed.

API examples

List endpoints:
```
GET http://localhost:8000/api/
```

List products:
```
GET http://localhost:8000/api/products/
```

Product detail:
```
GET http://localhost:8000/api/products/1/
```

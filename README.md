# DSALGO-QUIZ-1 — Frontend + Backend

This repository contains two projects for Quiz 1 and Quiz 2:

- `backend/` — Django REST API providing product data
- `frontend/` — React (Create React App) frontend that consumes the API

Overview
- The backend exposes three API endpoints:
  - `GET /api/` — returns a JSON list of available endpoints (API routes)
  - `GET /api/products/` — returns the list of all products
  - `GET /api/products/<id>/` — returns product detail for a specific id

Environment variables
- Backend uses `python-dotenv`. Copy `backend/.env.example` to `backend/.env` and edit values.
- Frontend uses `REACT_APP_API_URL`. Copy `frontend/.env.example` to `frontend/.env`.

Backend setup (Windows / PowerShell)

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
# edit .env to set CORS_ALLOWED_ORIGINS, e.g. CORS_ALLOWED_ORIGINS=http://localhost:3000
python create_db_django.py
python manage.py runserver 0.0.0.0:8000
```

Frontend setup (Windows / PowerShell)

```powershell
cd frontend
npm install
copy .env.example .env
# if you need to change the API URL, update REACT_APP_API_URL in frontend/.env
npm start
```

CORS
- The backend reads `CORS_ALLOWED_ORIGINS` from environment. Do NOT use a wildcard `*`.

Notes
- Do not commit your `.env` files. Use the provided `.env.example` files.
- `backend/create_db_django.py` seeds `backend/db.sqlite3` with sample products.

Branch information
- The Quiz 2 backend implementation and related changes are on the `quiz2` branch.
  To view or switch to that branch locally:

```powershell
git fetch origin
git checkout quiz2
```

If you do not have the `quiz2` branch locally, the `git fetch` command above will retrieve it from the remote.

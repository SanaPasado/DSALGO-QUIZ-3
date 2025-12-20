🧶 LoopedByKlayd: Full-Stack (Django & React)
This project is the official e-commerce platform for LoopedByKlayd. It uses a React frontend for a smooth shopping experience and a Django backend to manage products, commissions, and user data.

🏗️ System Architecture
The application follows a decoupled architecture where the React frontend communicates with the Django backend via a REST API.

🛠️ Backend Setup (Django)
To get the backend up and running, follow these steps to ensure all dependencies and database configurations are correctly applied.

1. Environment Setup
It is highly recommended to use a virtual environment (venv) to keep dependencies isolated.

Bash

# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
2. Install Requirements
Once the environment is active, install the necessary Python packages:

Bash

pip install -r requirements.txt
Key packages include: django, djangorestframework, django-cors-headers, and Pillow (for crochet product images).

3. Database & Server Launch
Initialize the database and start the development server:

Bash

# Apply database migrations
python manage.py migrate

# Start the server
python manage.py runserver
The API will now be accessible at http://127.0.0.1:8000/.

💻 Project Routes
Frontend (React)
/: HomeScreen (Featured items).

/shop: ProductCatalog (Fetched from Django API).

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

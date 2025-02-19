📚 BookSwap Backend
This is the backend for BookSwap, a platform designed to facilitate book exchanges and direct sales between users. Built with Node.js, Express.js, and MongoDB, it provides secure authentication, book management, and API endpoints for frontend integration.

🚀 Features
User Authentication: Secure login/signup using JWT
Book Management: CRUD operations for book listings
User Profiles: Manage account details and preferences
Search & Filter: Fetch books based on categories, title, or author
RESTful API: Well-structured API endpoints for frontend communication
Upcoming Features: Payment gateway and messaging system
🛠️ Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT (JSON Web Token), bcrypt.js
API Documentation: Postman / Swagger (Optional)
Deployment: Render / AWS / Heroku

📦 bookswap-backend
 ┣ 📂 config
 ┃ ┗ 📜 db.js              # MongoDB connection setup
 ┣ 📂 controllers
 ┃ ┣ 📜 authController.js   # Handles user authentication
 ┃ ┣ 📜 bookController.js   # Handles book-related operations
 ┃ ┗ 📜 userController.js   # Manages user profiles
 ┣ 📂 middleware
 ┃ ┗ 📜 authMiddleware.js   # JWT authentication middleware
 ┣ 📂 models
 ┃ ┣ 📜 Book.js            # Schema for books
 ┃ ┣ 📜 User.js            # Schema for users
 ┃ ┗ 📜 Order.js           # (Future) Schema for transactions/orders
 ┣ 📂 routes
 ┃ ┣ 📜 authRoutes.js      # Routes for authentication
 ┃ ┣ 📜 bookRoutes.js      # Routes for book operations
 ┃ ┗ 📜 userRoutes.js      # Routes for user management
 ┣ 📂 utils
 ┃ ┗ 📜 helpers.js         # Utility functions
 ┣ 📜 .env                 # Environment variables
 ┣ 📜 .gitignore           # Ignore sensitive files
 ┣ 📜 server.js            # Main server entry point
 ┣ 📜 package.json         # Dependencies and scripts
 ┣ 📜 README.md            # This file

 🏗️ Installation & Setup
To run the backend locally:

Clone the repository:
git clone https://github.com/NoobOtaku-terminal/bookswap-backend.git
cd bookswap-backend
Install dependencies:
npm install
Set up environment variables:
Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the server:
npm start
API will run on: http://localhost:5000/
🔗 Frontend Integration
To connect with the BookSwap Frontend, update the frontend's API URLs in src/services/api.js with:
javascript
const API_BASE_URL = "http://localhost:5000";
🌍 Deployment
The backend is currently hosted at: BookSwap Backend Live (Replace with actual URL)

📌 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login and get a token
GET	/api/books	Fetch all books
POST	/api/books	Add a new book
PUT	/api/books/:id	Update book details
DELETE	/api/books/:id	Remove a book listing
GET	/api/users/me	Fetch user profile
🏆 Contributors
Dheeraj Dhakad (GitHub)
Rohan Regar (GitHub)


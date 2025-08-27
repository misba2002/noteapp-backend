📝 NoteApp Backend

This is the backend API for the NoteApp project, built with Node.js, Express.js, and MongoDB.
It handles user authentication with JWT and provides secure CRUD operations for notes.

🚀 Features

✅ User Authentication (Signup & Login with JWT)

✅ Passwords hashed using bcrypt

✅ JWT authentication middleware

✅ Notes CRUD (Create, Read, Update, Delete)

✅ Protected routes – accessible only with valid token

✅ Deployed on Render

✅ Works with the NoteApp Frontend


🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

jsonwebtoken

bcryptjs

cors

⚙️ Setup Instructions
1. Clone the repository
git clone [https://github.com/misba2002/noteapp-backend.git](https://github.com/misba2002/noteapp-backend/tree/main)
cd noteapp-backend

2. Install dependencies
npm install

3. Environment Variables

Create a .env file in the root with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. Run development server
npm run dev


Server will run on http://localhost:5000
.

📦 Deployment

Backend is deployed on Render

Update the frontend .env.local to point to the backend:

NEXT_PUBLIC_API_URL=https://noteapp-backend-emvn.onrender.com

📂 Project Structure  

src/  
 ├── models/          # Mongoose models (User, Notes)  
 ├── routes/          # Auth routes, Notes routes  
 ├── middleware/      # Auth middleware (JWT verification)  
 ├── controllers/     # Route controllers (Auth, Notes)  
 ├── server.js        # App entry point  
 

🔑 Authentication Flow

User signs up → password is hashed and stored in DB

On login → JWT is signed with user ID & returned

Client stores JWT in localStorage (frontend)

Protected endpoints check JWT via middleware

📡 API Endpoints
Auth Routes

POST /auth/signup → Register new user

POST /auth/login → Login user & return JWT

Notes Routes (Protected)

GET /notes → Get all notes for logged-in user

POST /notes → Create a new note

PUT /notes/:id → Update a note

DELETE /notes/:id → Delete a note

✅ Checklist

 User signup & login with JWT

 Password hashing with bcrypt

 JWT middleware protection

 Notes CRUD API

 Deployment on Render

Now both frontend and backend have professional README files 🚀.

👉 Do you also want me to create a combined README (for submission/portfolio) that explains both frontend + backend together in one document?

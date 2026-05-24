TaskFlow MERN Project 🚀

TaskFlow is a complete MERN (MongoDB/Express.js/React.js/Node.js) application built to ease users' daily work. The project features secure authentication, secure routing and task management systems in a clean and responsive interface.

Users can register and secure login with JWT authentication, add new task and delete completed task from this application. The frontend utilizes React and Tailwind CSS, while the backend uses Node.js, Express.js, and MongoDB Atlas for managing the database.

🌐 Live Demo
Frontend (Vercel)
https://your-vercel-link.vercel.app
Backend (Render)
https://taskflow-mern-project.onrender.com
✨ Features

TaskFlow provides a number of helpful task-management and authentication capabilities:

User Registration and Login
JWT-based Authentication
Protected Dashboard Access
Add New Tasks
Delete Existing Tasks
MongoDB Database Integration
Responsive User Interface
Secure Backend APIs
Full Stack Deployment
🛠️ Tech Stack

The project is created with the latest web technologies.

Frontend Technologies
React.js
Vite
Tailwind CSS
Axios
React Router DOM
Backend Technologies
Node.js
Express.js
MongoDB Atlas
Mongoose
JSON Web Token (JWT)
bcryptjs
📁 Project Structure
Taskflow/
│
├── client/       # React Frontend
│
├── server/       # Node.js Backend
│
└── README.md
⚙️ Installation and Setup

In order to run this project on your system follow the steps below.

In the first step you'll clone the Repository.The first step is CLONING THE REPOSITORY.
git clone https://github.com/your-username/Taskflow_mern_project.git
In Step 2, install Frontend Dependencies, install the following packages:
cd client
npm install
Install Backend Dependencies:
cd server
npm install
🔑 Environment Variables

Inside the server folder, you will need to make a .env file and input the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

The following environment variables are necessary for database connection and JWT authentication.

▶️ Running the Application
Run Frontend
cd client
npm run dev

The frontend will start on:

http://localhost:5173
Run Backend
cd server
npm run dev

The server will be up and running on the backend:

http://localhost:5000
📡 API Endpoints

The back end offers authentication and task management APIs.

Authentication Routes
POST /api/auth/register
POST /api/auth/login
Task Routes
GET /api/tasks
POST /api/tasks
DELETE /api/tasks/:id
🚀 Deployment

The frontend of the application is deployed on Vercel and the backend API is deployed on Render. MongoDB Atlas is used as the cloud database service.

Deployment Platforms
Frontend → Vercel
Backend → Render
Database → MongoDB Atlas

👨‍💻 Author
Uday Pratap Singh

GitHub Profile:

https://github.com/Udaypratapsingh500
⭐ Support

Consider giving this project a ⭐ on GitHub if you liked it.

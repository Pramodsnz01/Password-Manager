# Password Manager - MongoDB Version

A full-stack password manager application with MongoDB database backend. Features client-server architecture with persistent data storage and API endpoints.

## Features

- 🔐 **Secure Password Storage**: Store website URLs, usernames, and passwords in MongoDB
- 👁️ **Password Visibility Toggle**: Show/hide passwords with a single click
- 📋 **One-Click Copy**: Copy any field (URL, username, password) to clipboard
- ✏️ **Edit Passwords**: Modify existing password entries with real-time updates
- 🗑️ **Delete Passwords**: Remove passwords with confirmation dialog
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful interface with animations and icons
- 🔔 **Toast Notifications**: User feedback for all actions
- 🌐 **API Backend**: RESTful API for data operations
- 💾 **Database Persistence**: MongoDB for reliable data storage

## Technology Stack

### Frontend
- **React**: 19.1.1
- **Vite**: 7.1.7 (Build tool)
- **Tailwind CSS**: 4.1.13 (Styling)
- **React Toastify**: 11.0.5 (Notifications)
- **UUID**: 13.0.0 (Unique IDs)
- **Lord Icons**: Interactive icons

### Backend
- **Express.js**: 5.1.0 (Web framework)
- **MongoDB**: 6.20.0 (Database)
- **CORS**: 2.8.5 (Cross-origin requests)
- **Body Parser**: 2.2.0 (Request parsing)
- **dotenv**: 17.2.3 (Environment variables)

## Prerequisites

Before running this application, ensure you have:

1. **Node.js** (v14 or higher)
2. **MongoDB** installed and running locally
3. **npm** or **yarn** package manager

## Installation

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd Password_Manager/password_manager\ mongo
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Start MongoDB
Make sure MongoDB is running on your local machine:
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
# or
mongod
```

### 5. Start the Backend Server
```bash
cd backend
node server.js
```

The backend will start on `http://localhost:3000`

### 6. Start the Frontend (in a new terminal)
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## API Endpoints

The backend provides the following REST API endpoints:

### GET `/`
- **Description**: Retrieve all passwords
- **Response**: Array of password objects
- **Example**: `GET http://localhost:3000/`

### POST `/`
- **Description**: Create a new password entry
- **Body**: `{ site, username, password, id }`
- **Response**: `{ success: true, result: insertResult }`
- **Example**: `POST http://localhost:3000/`

### DELETE `/`
- **Description**: Delete a password by ID
- **Body**: `{ id }`
- **Response**: `{ success: true, result: deleteResult }`
- **Example**: `DELETE http://localhost:3000/`

## Database Schema

The MongoDB collection `passwords` stores documents with the following structure:

```javascript
{
  _id: ObjectId,           // MongoDB auto-generated ID
  id: String,              // UUID for frontend reference
  site: String,            // Website URL
  username: String,        // Username/email
  password: String         // Password (stored in plain text for demo)
}
```

## Usage

### Adding a Password
1. Enter the website URL
2. Enter your username/email
3. Enter your password
4. Click the "Save" button
5. Password is saved to MongoDB database

### Managing Passwords
- **View**: Passwords are masked by default (shown as asterisks)
- **Show/Hide**: Click the eye icon to toggle password visibility
- **Copy**: Click the copy icon next to any field to copy it to clipboard
- **Edit**: Click the edit icon to modify an existing password
- **Delete**: Click the delete icon to remove a password (with confirmation)

## Data Storage

This version uses MongoDB for data persistence:
- ✅ Data persists across sessions and devices
- ✅ Scalable database solution
- ✅ ACID transactions
- ✅ Data backup and recovery
- ✅ Multi-user support potential

## Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
node server.js       # Start backend server
```

## Project Structure

```
password_manager mongo/
├── src/
│   ├── components/
│   │   ├── Manager.jsx      # Main password management component
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── backend/
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── node_modules/        # Backend dependencies
├── public/                  # Static assets
├── package.json             # Frontend dependencies
└── README.md                # This file
```

## Environment Configuration

Create a `.env` file in the backend directory for environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=password-manager
```

## Security Considerations

⚠️ **Important Security Notes**:
- This is a demo application for learning purposes
- Passwords are stored in plain text in the database
- No authentication or authorization implemented
- For production use, implement:
  - Password encryption (bcrypt, scrypt)
  - User authentication (JWT, OAuth)
  - HTTPS/SSL certificates
  - Input validation and sanitization
  - Rate limiting and CORS policies
  - Database connection security
  - Environment variable security

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running: `mongod`
   - Check connection string in `server.js`

2. **CORS Issues**
   - Backend CORS is configured for `localhost:5173`
   - Adjust CORS settings if using different ports

3. **Port Conflicts**
   - Backend runs on port 3000
   - Frontend runs on port 5173
   - Change ports in respective configuration files if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both frontend and backend
5. Submit a pull request

## License

This project is for educational purposes. Please ensure you understand the security implications before using in production.
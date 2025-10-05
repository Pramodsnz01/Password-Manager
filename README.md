# Password Manager Projects

This repository contains two different implementations of a password manager application built with React and Vite. Both versions provide secure password storage and management capabilities with different data persistence approaches.

## Project Structure

```
Password_Manager/
├── password_manager localStorage/     # Client-side storage version
├── password_manager mongo/           # MongoDB database version
└── README.md                        # This file
```

## Versions

### 1. localStorage Version (`password_manager localStorage/`)
- **Storage**: Browser localStorage
- **Data Persistence**: Client-side only
- **Use Case**: Personal use, single device
- **Features**: Add, edit, delete, and view passwords with copy-to-clipboard functionality

### 2. MongoDB Version (`password_manager mongo/`)
- **Storage**: MongoDB database
- **Data Persistence**: Server-side with database
- **Use Case**: Multi-device access, data backup
- **Features**: Full CRUD operations with backend API, data synchronization

## Key Features

Both versions include:
- 🔐 Secure password storage
- 👁️ Password visibility toggle
- 📋 One-click copy to clipboard
- ✏️ Edit existing passwords
- 🗑️ Delete passwords with confirmation
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI with animations
- 🔔 Toast notifications for user feedback

## Technology Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend** (MongoDB version): Express.js, MongoDB
- **Dependencies**: React Toastify, UUID, Lord Icons
- **Development**: ESLint, Hot Module Replacement

## Getting Started

Each version has its own setup instructions. Please refer to the individual README files in each project directory for specific installation and running instructions.

## Security Note

⚠️ **Important**: These are demo applications for learning purposes. For production use, consider implementing additional security measures such as:
- Password encryption
- User authentication
- HTTPS
- Input validation and sanitization
- Rate limiting

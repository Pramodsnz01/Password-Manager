# Password Manager - localStorage Version

A secure password manager application that stores passwords locally in the browser's localStorage. Built with React, Vite, and Tailwind CSS.

## Features

- 🔐 **Secure Password Storage**: Store website URLs, usernames, and passwords
- 👁️ **Password Visibility Toggle**: Show/hide passwords with a single click
- 📋 **One-Click Copy**: Copy any field (URL, username, password) to clipboard
- ✏️ **Edit Passwords**: Modify existing password entries
- 🗑️ **Delete Passwords**: Remove passwords with confirmation dialog
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful interface with animations and icons
- 🔔 **Toast Notifications**: User feedback for all actions

## Technology Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Lord Icons
- **Notifications**: React Toastify 11.0.5
- **UUID**: UUID 13.0.0 for unique IDs
- **Linting**: ESLint 9.36.0

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd Password_Manager/password_manager\ localStorage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Adding a Password
1. Enter the website URL
2. Enter your username/email
3. Enter your password
4. Click the "Save" button

### Managing Passwords
- **View**: Passwords are masked by default (shown as asterisks)
- **Show/Hide**: Click the eye icon to toggle password visibility
- **Copy**: Click the copy icon next to any field to copy it to clipboard
- **Edit**: Click the edit icon to modify an existing password
- **Delete**: Click the delete icon to remove a password (with confirmation)

## Data Storage

This version uses browser localStorage to store passwords. This means:
- ✅ Data persists between browser sessions
- ✅ No server required
- ✅ Works offline
- ⚠️ Data is tied to the specific browser/device
- ⚠️ Data can be lost if browser data is cleared

## Security Considerations

⚠️ **Important Security Notes**:
- This is a demo application for learning purposes
- Passwords are stored in plain text in localStorage
- For production use, implement:
  - Password encryption
  - User authentication
  - HTTPS
  - Input validation
  - Rate limiting

## Project Structure

```
src/
├── components/
│   ├── Manager.jsx      # Main password management component
│   ├── Navbar.jsx       # Navigation component
│   └── Footer.jsx       # Footer component
├── App.jsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles
└── main.jsx             # App entry point
```

## Development

The project uses:
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality
- **React Hooks** for state management

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please ensure you understand the security implications before using in production.
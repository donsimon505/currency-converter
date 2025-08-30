# Currency Converter – ALX Front‑end Capstone Project

This project is a **React‑based Currency Converter** featuring authentication, state management, and responsive UI.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Folder Structure](#folder-structure)
7. [Usage](#usage)
8. [Authentication & Route Protection](#authentication--route-protection)
9. [Error Handling](#error-handling)
10. [Contributing](#contributing)
11. [License](#license)

---

## Project Overview

A web app that lets users convert between currencies, authenticate (signup/login), switch favourites, and manage their account securely—all powered by React, Firebase, and Zustand. Built as an ALX Front‑end Capstone.

---

## Tech Stack

- **React** (frontend framework)
- **React Router** (routing)
- **Firebase Auth** (authentication)
- **Zustand** (state management + persistence)
- **Tailwind CSS** (UI styling)
- **Axios** (API calls)
- **ExchangeRate API** (currency conversion data)
- **flagcdn.com** (currency flags via helper)

---

## Features

- Responsive currency converter with flag icons
- User signup, login, logout flows
- Secure password update (with re-authentication)
- Dynamic list of favourites, persisted across sessions
- Protected and public route handling (`ProtectedRoute`, `PublicRoute`)
- Client-side error abstraction and clean messaging

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/donsimon505/currency-converter.git
   cd currency-converter/capstone
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup Firebase** – create a new project in Firebase console and enable Email/Password auth.

4. **Add `.env` file** in root (Vite format):

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_CURRENCY_CONVERTER_KEY=your_api_key_here
   ```

5. **Run the app**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open on browser** at `http://localhost:5173`

---

## Folder Structure

```
/src
  /components
    Dashboard.jsx, Sidebar.jsx, Converter.jsx, SettingsCard.jsx, …
  /stores
    useAuthStore.js
    useCurrencyStore.js
    useCurrencyFavouriteStore.js
  /helpers
    currencyHelper.js
  /utils
    errorUtils.js
  /assets
    logo.svg, other assets
  App.jsx
  main.jsx
  index.css (Tailwind base imports)
```

---

## Usage

- **Sign up** for an account
- **Login**
- **Convert currencies** with live data
- **Add/remove favourites** from settings or converter
- **Update password** via Settings (includes validation and feedback)

---

## Authentication & Route Protection

| File                 | Purpose                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `ProtectedRoute.jsx` | Ensures only authenticated users access Dashboard, Favourites, Settings |
| `PublicRoute.jsx`    | Redirects logged-in users away from login/signup pages                  |

These leverage Zustand’s `currentUser` and `loading` states to manage access.

---

## Error Handling

Errors from Firebase (like wrong password, weak password, invalid email) are mapped to **clean, consistent messages** using a shared helper:

```js
import { getFirebaseErrorMessage } from "../utils/errorUtils";
```

This utility strips `"Firebase: Error (…)"` syntax and replaces it with readable messages.

---

## Contributing

Contributions are welcome! Here's how to help:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Implement and test your feature
4. Commit (`git commit -m 'Describe feature'`)
5. Push (`git push origin feature/your-feature`)
6. Submit a Pull Request

---

## License

Specify your license here (e.g. MIT, ISC). If not included, add a `LICENSE` file.

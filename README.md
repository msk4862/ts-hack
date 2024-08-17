# React + TypeScript + Vite Project

This project is a React application using TypeScript and Vite.

## Project Structure

```
├── src/                  # Main source directory
│ ├── App.tsx             # Root component of the application
| |-- main.tsx            # Entry point for the React application
| |-- index.css           # Application base styles
│ ├── components/         # UI components
│ │ ├── shared/           # Shared components used across the app
│ ├── contexts/           # Context providers for global state management
│ ├── data/               # Static or mock data files
│ ├── hooks/              # Custom React hooks
│ ├── layouts/            # Layout components that structure pages
│ ├── pages/              # Page components representing different routes
│ ├── utils/              # Common application utilities
│ └── types.ts            # Common type definitions
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration for the build process
```

## Overview

- **Authentication**:
  - Login and Register forms with validation ([`LoginForm`](src/components/AuthForm/LoginForm.tsx), [`RegisterForm`](src/components/AuthForm/RegisterForm.tsx)).
  - Custom hooks for form handling and modal state ([`useForm`](src/hooks/useForm.ts), [`useAuthModal`](src/hooks/useAuthModal.ts)).

- **UI Components**:
  - Shared primitive components like Button, Input, and Modal ([`Button`](src/components/shared/Button.tsx), [`Input`](src/components/shared/Input.tsx), [`Modal`](src/components/shared/Modal.tsx)).

- **Pages**:
  - Home page with post creation and listing ([`Home`](src/pages/Home.tsx)).
  - Authentication pages ([`Login`](src/pages/Login.tsx), [`Register`](src/pages/Register.tsx)).

- **Global State Management**:
  - Context providers for authentication and modal state ([`AuthContext`](src/contexts/AuthContext.tsx), [`ModalContext`](src/contexts/ModalContext.tsx)).

- **Styling**:
  - Tailwind CSS for styling ([`index.css`](src/index.css), [`tailwind.config.js`](tailwind.config.js)).

- **Static Data**:
  - Mock posts data ([`posts.json`](src/data/posts.json)).

## Commands

### Install Dependencies

To install the project dependencies, run:

```sh
yarn install
```

### Start Development Server

To start the development server, run:

```sh
yarn dev
```

### Build for Production

To build the project for production, run:

```sh
yarn build
```

### Preview Production Build

To preview the production build, run:

```sh
yarn preview
```

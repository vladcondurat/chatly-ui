# Chatly

A modern real-time chat application built with React and TypeScript, offering a seamless messaging experience with live communication features.

## 🚀 Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **SignalR** - Real-time communication
- **Lucide React** - Icon library
- **SweetAlert2** - Beautiful alerts and modals

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **SWC** - Fast TypeScript/JavaScript compiler
- **PWA Support** - Progressive Web App capabilities

## 📁 Project Structure

```
src/
├── api/          # API integration and endpoints
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable UI components
├── config/       # Configuration files
├── emitters/     # Event emitters
├── hooks/        # Custom React hooks
├── layout/       # Layout components
├── mappers/      # Data transformation utilities
├── modules/      # Feature modules
├── router/       # Route definitions
├── services/     # Business logic and services
├── store/        # Redux store configuration
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
└── App.tsx       # Root component
```

## 🛠️ Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd chatly
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on `.env.sample`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run start-nginx` - Start Nginx server
- `npm run start-ngrok` - Start ngrok tunnel

## 🔧 Configuration

The project uses environment variables for configuration. Copy `.env.sample` to `.env` and adjust the values as needed.

## 🚀 Deployment

The application can be built for production using:

```bash
npm run build
```

The build output will be in the `dist` directory.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

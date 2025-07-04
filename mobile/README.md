# Finance Tracker Mobile App

A React Native mobile application for personal finance management, built with Expo and TypeScript.

## Features

- **Dashboard**: Real-time financial overview with income, expenses, and net balance
- **Transaction Management**: Add, view, and manage financial transactions
- **Category System**: Organize transactions with customizable categories
- **Secure Authentication**: Email/password authentication with Supabase
- **Cross-Platform**: Works on both iOS and Android devices

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Supabase** for backend and authentication
- **Zustand** for state management
- **React Navigation** for navigation
- **Expo Vector Icons** for icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on your preferred platform:
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web (for testing)
   npm run web
   ```

## Project Structure

```
mobile/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/            # Screen components
│   ├── store/              # Zustand stores
│   ├── lib/                # Utilities and configurations
│   └── types/              # TypeScript type definitions
├── assets/                 # Images, fonts, and other assets
├── app.json               # Expo configuration
└── package.json           # Dependencies and scripts
```

## Key Components

### Screens
- **AuthScreen**: Login and registration
- **DashboardScreen**: Financial overview and metrics
- **TransactionsScreen**: Transaction list and management
- **AddTransactionScreen**: Add new transactions
- **BudgetScreen**: Budget tracking (coming soon)
- **TargetsScreen**: Financial goals (coming soon)
- **SettingsScreen**: App settings and user preferences

### Components
- **TransactionCard**: Individual transaction display
- **MetricCard**: Dashboard metric display
- **Navigation**: Bottom tab navigation

### State Management
- **authStore**: User authentication state
- **transactionStore**: Transaction data and operations
- **categoryStore**: Category data and operations

## Features in Development

- Budget tracking and management
- Financial goal setting and tracking
- Receipt scanning with OCR
- Push notifications
- Biometric authentication
- Offline mode with sync
- Data export functionality

## Building for Production

### Android
```bash
npm run build:android
```

### iOS
```bash
npm run build:ios
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on both platforms
5. Submit a pull request

## License

This project is licensed under the MIT License.
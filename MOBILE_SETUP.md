# 📱 Mobile Application Setup & Launch Guide

## Quick Start (Recommended)

### 1. Navigate to Mobile Directory
```bash
cd mobile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

This will open the Expo development tools in your browser and show a QR code.

## Running on Different Platforms

### Option A: Physical Device (Easiest)

1. **Install Expo Go App**:
   - **iOS**: Download "Expo Go" from the App Store
   - **Android**: Download "Expo Go" from Google Play Store

2. **Scan QR Code**:
   - Open Expo Go app on your phone
   - Scan the QR code displayed in your terminal/browser
   - The app will download and run on your device

### Option B: iOS Simulator (Mac Only)

1. **Install Xcode** from the Mac App Store
2. **Run iOS simulator**:
   ```bash
   cd mobile
   npm run ios
   ```

### Option C: Android Emulator

1. **Install Android Studio**
2. **Set up Android emulator** in Android Studio
3. **Start emulator** and run:
   ```bash
   cd mobile
   npm run android
   ```

### Option D: Web Browser (Testing)

```bash
cd mobile
npm run web
```

## Prerequisites Installation

### 1. Node.js
Download and install from [nodejs.org](https://nodejs.org/) (v16 or higher)

### 2. Expo CLI
```bash
npm install -g @expo/cli
```

### 3. For iOS Development (Mac only)
- Install Xcode from Mac App Store
- Install Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```

### 4. For Android Development
- Download and install [Android Studio](https://developer.android.com/studio)
- Set up Android SDK and emulator through Android Studio

## Available Scripts

```bash
# Start development server
npm start

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web

# Build for production
npm run build:android  # Android APK
npm run build:ios      # iOS build
```

## Mobile App Features

Your mobile app includes:

✅ **User Authentication** - Secure login/signup
✅ **Dashboard** - Financial overview with real-time metrics
✅ **Transaction Management** - Add, edit, delete transactions
✅ **Category System** - Organize income and expenses
✅ **Budget Tracking** - Monitor spending (coming soon)
✅ **Financial Targets** - Set and track goals (coming soon)
✅ **Settings** - User preferences and account management
✅ **Offline Support** - Works without internet connection
✅ **Data Sync** - Automatic synchronization with web app

## Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   cd mobile
   expo start --clear
   ```

2. **Cache problems**:
   ```bash
   cd mobile
   expo start --reset-cache
   ```

3. **Dependency issues**:
   ```bash
   cd mobile
   rm -rf node_modules
   npm install
   ```

4. **Expo Go not connecting**:
   - Ensure your phone and computer are on the same WiFi network
   - Try restarting the Expo development server

### Network Issues

If you can't connect via QR code:
1. Make sure both devices are on the same network
2. Try using the tunnel option: `expo start --tunnel`
3. Check your firewall settings

## Development Tips

1. **Hot Reload**: Changes to your code will automatically refresh the app
2. **Debug Menu**: Shake your device or press Cmd+D (iOS) / Cmd+M (Android) to open debug menu
3. **Console Logs**: Use `console.log()` to debug - logs appear in your terminal
4. **Element Inspector**: Enable in debug menu to inspect UI elements

## Production Deployment

When ready to deploy:

1. **Build APK (Android)**:
   ```bash
   cd mobile
   npm run build:android
   ```

2. **Build for iOS**:
   ```bash
   cd mobile
   npm run build:ios
   ```

3. **Submit to App Stores**:
   ```bash
   # Android Play Store
   npm run submit:android
   
   # iOS App Store
   npm run submit:ios
   ```

## Next Steps

1. Start the mobile app using the quick start guide above
2. Test all features on your device
3. Customize the app icon and splash screen in `mobile/app.json`
4. Configure push notifications if needed
5. Test on multiple devices and screen sizes

---

**Need Help?** 
- Check the React Native documentation: https://reactnative.dev/
- Expo documentation: https://docs.expo.dev/
- React Navigation: https://reactnavigation.org/
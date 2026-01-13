# react-native-login-signup-screens

A reusable React Native UI library for login and signup screens with customizable components.

## Features

- 📧 Email + Password login screen (with optional Google sign-in)
- 📱 Phone number login with OTP flow (with optional Google sign-in)
- 🔐 Google sign-in only screen
- 🎨 Fully customizable UI components
- 📱 TypeScript support
- 🔧 Easy to integrate

## Installation

```bash
npm install react-native-login-signup-screens
# or
yarn add react-native-login-signup-screens
```

## Usage

### Email + Password Login Screen

```tsx
import { EmailPasswordLoginScreen } from 'react-native-login-signup-screens';

function App() {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic
    console.log('Login:', email, password);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in
    console.log('Google Sign In');
  };

  return (
    <EmailPasswordLoginScreen
      onLogin={handleLogin}
      onGoogleSignIn={handleGoogleSignIn}
      showGoogleSignIn={true}
    />
  );
}
```

### Phone Number Login with OTP

```tsx
import { PhoneOTPLoginScreen } from 'react-native-login-signup-screens';

function App() {
  const handlePhoneSubmit = (phoneNumber: string) => {
    // Handle phone number submission
    console.log('Phone:', phoneNumber);
  };

  const handleOTPVerify = (otp: string) => {
    // Handle OTP verification
    console.log('OTP:', otp);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in
    console.log('Google Sign In');
  };

  return (
    <PhoneOTPLoginScreen
      onPhoneSubmit={handlePhoneSubmit}
      onOTPVerify={handleOTPVerify}
      onGoogleSignIn={handleGoogleSignIn}
      showGoogleSignIn={true}
    />
  );
}
```

### Google Sign-In Only Screen

```tsx
import { GoogleSignInScreen } from 'react-native-login-signup-screens';

function App() {
  const handleGoogleSignIn = () => {
    // Handle Google sign-in
    console.log('Google Sign In');
  };

  return (
    <GoogleSignInScreen onGoogleSignIn={handleGoogleSignIn} />
  );
}
```

## API Reference

### EmailPasswordLoginScreen

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| onLogin | `(email: string, password: string) => void` | Yes | Callback when user submits login form |
| onGoogleSignIn | `() => void` | No | Callback when user taps Google sign-in button |
| showGoogleSignIn | `boolean` | No | Show/hide Google sign-in option (default: false) |

### PhoneOTPLoginScreen

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| onPhoneSubmit | `(phoneNumber: string) => void` | Yes | Callback when user submits phone number |
| onOTPVerify | `(otp: string) => void` | Yes | Callback when user submits OTP |
| onGoogleSignIn | `() => void` | No | Callback when user taps Google sign-in button |
| showGoogleSignIn | `boolean` | No | Show/hide Google sign-in option (default: false) |

### GoogleSignInScreen

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| onGoogleSignIn | `() => void` | Yes | Callback when user taps Google sign-in button |

## Development

### Building the Library

```bash
npm run build
```

This will compile the TypeScript source files and generate the library in the `lib` directory.

### Local Testing

To test the library locally in another React Native project:

1. In the library directory, run:
```bash
npm link
```

2. In your React Native project, run:
```bash
npm link react-native-login-signup-screens
```

3. For iOS, you may need to:
```bash
cd ios && pod install && cd ..
```

### Publishing

Before publishing, make sure to:

1. Update the version in `package.json`
2. Build the library: `npm run build`
3. Test the library in a sample app
4. Publish to npm:

```bash
npm publish
```

For private npm registry:
```bash
npm publish --registry=https://your-registry-url
```

## Project Structure

```
react-native-login-signup-screens/
├── src/
│   ├── screens/
│   │   ├── EmailPasswordLoginScreen.tsx
│   │   ├── PhoneOTPLoginScreen.tsx
│   │   └── GoogleSignInScreen.tsx
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── lib/                    # Generated build output
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT

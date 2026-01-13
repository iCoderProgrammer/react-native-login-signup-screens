# Quick Start Guide

## Installation

```bash
npm install react-native-login-signup-screens
# or
yarn add react-native-login-signup-screens
```

## Basic Usage

### 1. Email + Password Login

```tsx
import { EmailPasswordLoginScreen } from 'react-native-login-signup-screens';

<EmailPasswordLoginScreen
  onLogin={(email, password) => {
    console.log('Login:', email, password);
    // Your login logic here
  }}
  onGoogleSignIn={() => {
    console.log('Google Sign In');
    // Your Google sign-in logic here
  }}
  showGoogleSignIn={true}
/>
```

### 2. Phone Number + OTP Login

```tsx
import { PhoneOTPLoginScreen } from 'react-native-login-signup-screens';

<PhoneOTPLoginScreen
  onPhoneSubmit={(phoneNumber) => {
    console.log('Phone:', phoneNumber);
    // Send OTP logic here
  }}
  onOTPVerify={(otp) => {
    console.log('OTP:', otp);
    // Verify OTP logic here
  }}
  onGoogleSignIn={() => {
    console.log('Google Sign In');
    // Your Google sign-in logic here
  }}
  showGoogleSignIn={true}
/>
```

### 3. Google Sign-In Only

```tsx
import { GoogleSignInScreen } from 'react-native-login-signup-screens';

<GoogleSignInScreen
  onGoogleSignIn={() => {
    console.log('Google Sign In');
    // Your Google sign-in logic here
  }}
/>
```

## Next Steps

- See `EXAMPLE.md` for more detailed examples
- See `README.md` for full API documentation
- Customize the screens by modifying the styles in the source code

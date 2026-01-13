# Usage Examples

This file contains detailed usage examples for each screen component in the library.

## Email + Password Login Screen

```tsx
import React from 'react';
import { EmailPasswordLoginScreen } from 'react-native-login-signup-screens';

export default function LoginScreen() {
  const handleLogin = async (email: string, password: string) => {
    try {
      // Your authentication logic here
      console.log('Logging in with:', email);
      // await authService.login(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Your Google sign-in logic here
      console.log('Google sign-in initiated');
      // await authService.signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
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

## Phone Number Login with OTP

```tsx
import React from 'react';
import { PhoneOTPLoginScreen } from 'react-native-login-signup-screens';

export default function PhoneLoginScreen() {
  const handlePhoneSubmit = async (phoneNumber: string) => {
    try {
      // Send OTP to phone number
      console.log('Sending OTP to:', phoneNumber);
      // await authService.sendOTP(phoneNumber);
    } catch (error) {
      console.error('OTP send error:', error);
    }
  };

  const handleOTPVerify = async (otp: string) => {
    try {
      // Verify OTP
      console.log('Verifying OTP:', otp);
      // await authService.verifyOTP(otp);
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Your Google sign-in logic here
      console.log('Google sign-in initiated');
      // await authService.signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
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

## Google Sign-In Only Screen

```tsx
import React from 'react';
import { GoogleSignInScreen } from 'react-native-login-signup-screens';

export default function GoogleOnlyLoginScreen() {
  const handleGoogleSignIn = async () => {
    try {
      // Your Google sign-in logic here
      console.log('Google sign-in initiated');
      // await authService.signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return <GoogleSignInScreen onGoogleSignIn={handleGoogleSignIn} />;
}
```

## Complete App Example with Navigation

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  EmailPasswordLoginScreen,
  PhoneOTPLoginScreen,
  GoogleSignInScreen,
} from 'react-native-login-signup-screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmailLogin">
        <Stack.Screen
          name="EmailLogin"
          component={EmailPasswordLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneLogin"
          component={PhoneOTPLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoogleLogin"
          component={GoogleSignInScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

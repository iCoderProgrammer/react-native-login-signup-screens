export interface EmailPasswordLoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
  showGoogleSignIn?: boolean;
}

export interface PhoneOTPLoginScreenProps {
  onPhoneSubmit: (phoneNumber: string) => void;
  onOTPVerify: (otp: string) => void;
  onGoogleSignIn?: () => void;
  showGoogleSignIn?: boolean;
}

export interface GoogleSignInScreenProps {
  onGoogleSignIn: () => void;
}

const firebaseErrorMessages = {
  // 🔑 Password & Credentials
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/weak-password": "Password must be at least 6 characters long.",
  "auth/missing-password": "Password is required.",
  "auth/invalid-password": "Password is invalid or missing.",
  "auth/requires-recent-login":
    "For security reasons, please log in again before changing your password.",

  // 👤 User Account
  "auth/user-not-found": "No account found with this email.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/user-disabled":
    "This account has been disabled. Contact support for help.",

  // 📧 Email & Verification
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/missing-email": "Email is required to continue.",
  "auth/unverified-email":
    "Your email is not verified. Please check your inbox.",

  // 📱 Phone Auth (if you add it later)
  "auth/missing-phone-number": "Phone number is required.",
  "auth/invalid-phone-number": "Invalid phone number format.",
  "auth/invalid-verification-code":
    "Invalid verification code. Please try again.",

  // ⏳ Throttling / Limits
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/network-request-failed": "Network error. Please check your connection.",

  // 🔒 Other
  "auth/operation-not-allowed": "This sign-in method is not enabled.",
  "auth/popup-closed-by-user":
    "The sign-in popup was closed before completing.",
  "auth/cancelled-popup-request": "Sign-in request was cancelled.",
};

export function getFirebaseErrorMessage(error) {
  if (!error) {
    return "An unknown error occured";
  }

  if (firebaseErrorMessages[error.code]) {
    return firebaseErrorMessages[error.code];
  } else {
    return error.message
      .replace(/^Firebase:\s*/i, "")
      .replace(/^Error\s*/i, "")
      .replace(/[()]/g, "")
      .trim();
  }
}

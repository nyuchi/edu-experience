// Firebase Configuration
// Values come from the PUBLIC_FIREBASE_* environment variables (see .env.example).
// Get them from Firebase Console > Project Settings > General > Your apps.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error(
    "Firebase is not configured: set the PUBLIC_FIREBASE_* variables (see .env.example).",
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

// Export the app instance
export default app;

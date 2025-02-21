// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import getAuth for authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9h1z3KhFDtw8DU87eDazSC40_Ouc4KtQ",
  authDomain: "netflix-gpt-24544.firebaseapp.com",
  projectId: "netflix-gpt-24544",
  storageBucket: "netflix-gpt-24544.firebasestorage.app",
  messagingSenderId: "658540453420",
  appId: "1:658540453420:web:92f7a4454f6c0a0e447b89",
  measurementId: "G-T79J6EMVJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize authentication

// Export auth so it can be used in other files
export { app, auth, analytics };

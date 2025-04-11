// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiIkRJBwCjJb0v5cpnfhMHQmNDcgGZ9-k",
  authDomain: "netflix-gpt-85e08.firebaseapp.com",
  projectId: "netflix-gpt-85e08",
  storageBucket: "netflix-gpt-85e08.firebasestorage.app",
  messagingSenderId: "407327160880",
  appId: "1:407327160880:web:778687aa65da14174bcbf5",
  measurementId: "G-6KSWYPEC8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();

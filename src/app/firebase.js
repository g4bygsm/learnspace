// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

  

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLsUeaY0i5RRP8vpriQtGijtfJwLWVWGE",
  authDomain: "http://localhost:3000",
  projectId: "learnspace-abdba",
  storageBucket: "learnspace-abdba.appspot.com",
  messagingSenderId: "486304457604",
  appId: "1:486304457604:web:f3e4e442615f3a1c5d33d1",
  measurementId: "G-Q79ZJ4TXCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env. VITE_FIREBASE_API_KEY_PICHONI,
  authDomain: "final88010-pichoni.firebaseapp.com",
  projectId: "final88010-pichoni",
  storageBucket: "final88010-pichoni.firebasestorage.app",
  messagingSenderId: "88760012552",
  appId: "1:88760012552:web:8300ce9bb7b6d0a04fe6bd"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
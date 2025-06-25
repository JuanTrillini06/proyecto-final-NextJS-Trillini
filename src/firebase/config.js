import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN7oXc8OBKqu7G_JIXQgTsMFViVtvNlxs",
  authDomain: "juandrobenext.firebaseapp.com",
  projectId: "juandrobenext",
  storageBucket: "juandrobenext.firebasestorage.app",
  messagingSenderId: "971456713185",
  appId: "1:971456713185:web:45c66529ad7b07a42202a0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
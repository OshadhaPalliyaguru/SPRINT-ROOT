import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSy...", 
  authDomain: "sprint-root.firebaseapp.com",
  projectId: "sprint-root",
  storageBucket: "sprint-root.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




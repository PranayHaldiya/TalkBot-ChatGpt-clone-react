import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUk5A2b4P-qb2ieLmR0ckKXle1I8BQY4g",
  authDomain: "bot-talk-3d11c.firebaseapp.com",
  projectId: "bot-talk-3d11c",
  storageBucket: "bot-talk-3d11c.firebasestorage.app",
  messagingSenderId: "1054292915455",
  appId: "1:1054292915455:web:8c4f19c1f023c5d0ba48ca",
  measurementId: "G-7E4N33FDY9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
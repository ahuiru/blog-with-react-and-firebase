import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRQwaFC7a-FjFsC2y1xYan1Uur46j-tio",
  authDomain: "blog-76d25.firebaseapp.com",
  projectId: "blog-76d25",
  storageBucket: "blog-76d25.appspot.com",
  messagingSenderId: "861300374055",
  appId: "1:861300374055:web:a94fa0ec0503b7ab2a6c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};

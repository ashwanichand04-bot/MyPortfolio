import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYAeUy0TuMK81pl9mQGeokawSaNq_l3BM",
  authDomain: "myportfolio-8343b.firebaseapp.com",
  projectId: "myportfolio-8343b",
  storageBucket: "myportfolio-8343b.firebasestorage.app",
  messagingSenderId: "729045420264",
  appId: "1:729045420264:web:6b1225cf33209894e4615d",
  measurementId: "G-DQ692Q82SG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
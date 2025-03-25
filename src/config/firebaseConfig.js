
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuBAXhp8E_wMDGJ2ILHorEgDSyuIsQPmc",
  authDomain: "react-login-ptac3.firebaseapp.com",
  projectId: "react-login-ptac3",
  storageBucket: "react-login-ptac3.firebasestorage.app",
  messagingSenderId: "113393309155",
  appId: "1:113393309155:web:a834962245458d273a3cd6",
  measurementId: "G-VX0M5ZTHW1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
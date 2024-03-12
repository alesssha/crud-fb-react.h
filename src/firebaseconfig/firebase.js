// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgCD0ZwyvWci83h4Bl-2--StjeY8se_sM",
  authDomain: "cafeteria-183ec.firebaseapp.com",
  databaseURL: "https://cafeteria-183ec-default-rtdb.firebaseio.com",
  projectId: "cafeteria-183ec",
  storageBucket: "cafeteria-183ec.appspot.com",
  messagingSenderId: "805104645533",
  appId: "1:805104645533:web:0a3066e6777930ef25ab74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Importing the functions 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCd9y23w-92e4PoT0Y7O06qHfyPNK3Vbx4",
  authDomain: "utkristi-blogs-1.firebaseapp.com",
  projectId: "utkristi-blogs-1",
  storageBucket: "utkristi-blogs-1.appspot.com",
  messagingSenderId: "224076230386",
  appId: "1:224076230386:web:6ef2d258abc944698d6a6b",
  measurementId: "G-Z30VN3VP39"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
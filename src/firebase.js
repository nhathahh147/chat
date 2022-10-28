
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANlw2t4cW4mgS9S-D40JZ6EpzxdHmdbeo",
  authDomain: "user-22a44.firebaseapp.com",
  databaseURL: "https://user-22a44-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "user-22a44",
  storageBucket: "user-22a44.appspot.com",
  messagingSenderId: "229134344548",
  appId: "1:229134344548:web:d8181b4ab26051f7949a71"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
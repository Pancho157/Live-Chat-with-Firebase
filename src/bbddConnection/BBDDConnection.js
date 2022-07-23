import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZQoH_1CnZY9aMAgREnqdLTdPT6Ygsi2s",
  authDomain: "proyecto-simbionte.firebaseapp.com",
  projectId: "proyecto-simbionte",
  storageBucket: "proyecto-simbionte.appspot.com",
  messagingSenderId: "161642418542",
  appId: "1:161642418542:web:06ee23bcdc360fceca717f",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjnUJNtpzPYLo8mwsnw9umr4xXb85SZBU",
  authDomain: "live-chat-react-26f41.firebaseapp.com",
  projectId: "live-chat-react-26f41",
  storageBucket: "live-chat-react-26f41.appspot.com",
  messagingSenderId: "740263721806",
  appId: "1:740263721806:web:e49c1b40e1166cccd2bc1f",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

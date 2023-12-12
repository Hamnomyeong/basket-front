// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQdBrmbWEfHPfEwjdn7ZlYm5dahw3Q9iU",
  authDomain: "basket-9dea8.firebaseapp.com",
  databaseURL: "https://basket-9dea8-default-rtdb.firebaseio.com",
  projectId: "basket-9dea8",
  storageBucket: "basket-9dea8.appspot.com",
  messagingSenderId: "484778720919",
  appId: "1:484778720919:web:041e31b9d83745327273d2",
  measurementId: "G-GMBVDTQSFY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

firebase.initializeApp(firebaseConfig);

export { auth };
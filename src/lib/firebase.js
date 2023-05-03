// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcQBYk4MRummz0S1XU4Cu8IRz5jp84B88",
    authDomain: "website1-92e89.firebaseapp.com",
    projectId: "website1-92e89",
    storageBucket: "website1-92e89.appspot.com",
    messagingSenderId: "134778940064",
    appId: "1:134778940064:web:bac0e1dbfe3c4ac8ddf7c5",
    measurementId: "G-MY61ZM3NE2"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth, };
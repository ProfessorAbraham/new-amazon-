// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

//from maru current update
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWMj4nTzAZXrm8CZkbDqPsbJ27otuaGHs",
    authDomain: "dec-22edb.firebaseapp.com",
    projectId: "dec-22edb",
    storageBucket: "dec-22edb.appspot.com",
    messagingSenderId: "24161255129",
    appId: "1:24161255129:web:7a862a18324ed952b148c8",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };
//from maru
// Use these for db & auth
// intialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };

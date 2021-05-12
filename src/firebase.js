import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCN00rUJaJCJvG-bMl8iBq2X2az-lCBQAo",
    authDomain: "rest-api-boilerplate.firebaseapp.com",
    projectId: "rest-api-boilerplate",
    storageBucket: "rest-api-boilerplate.appspot.com",
    messagingSenderId: "350399116535",
    appId: "1:350399116535:web:112b4f077bd6551b280ff2",
    measurementId: "G-XWDD3JHGMT"
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const auth = firebase.auth;
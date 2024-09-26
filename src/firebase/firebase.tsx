// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-h-5MgjAwwbRsjYkw2x8gk4Gw9ocLyhQ",
    authDomain: "message-psicologia-cultura.firebaseapp.com",
    projectId: "message-psicologia-cultura",
    storageBucket: "message-psicologia-cultura.appspot.com",
    messagingSenderId: "585532002937",
    appId: "1:585532002937:web:fc66e55702bc54cc73faa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



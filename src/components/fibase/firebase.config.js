// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7cpF2PeniaeGOEEVrZao7OFNahlkE1Bo",
    authDomain: "coffee-store-49061.firebaseapp.com",
    projectId: "coffee-store-49061",
    storageBucket: "coffee-store-49061.appspot.com",
    messagingSenderId: "1072705508009",
    appId: "1:1072705508009:web:fd3984ebedec2da2c68fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
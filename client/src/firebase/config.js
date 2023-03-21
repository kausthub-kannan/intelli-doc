import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
    apiKey: "AIzaSyBgW8YDrmPBCv2GJyAekuGGfKbOLiE1duI",
    authDomain: "med-cord-497a4.firebaseapp.com",
    projectId: "med-cord-497a4",
    storageBucket: "med-cord-497a4.appspot.com",
    messagingSenderId: "329925984653",
    appId: "1:329925984653:web:abc3c9c30cd8a250977dc4",
    measurementId: "G-JG643QZX53"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}
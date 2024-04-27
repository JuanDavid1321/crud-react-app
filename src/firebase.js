import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBstGYXU7uvkUhWLBJ2ZpQ8NIzjx9TAQrE",
    authDomain: "crud-app-electiva.firebaseapp.com",
    projectId: "crud-app-electiva",
    storageBucket: "crud-app-electiva.appspot.com",
    messagingSenderId: "1003216541194",
    appId: "1:1003216541194:web:92f05fcb9651fd30fab1f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
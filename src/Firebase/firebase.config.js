// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAANWlmacKUrlHLqpOmj65h-4caaoqHICc",
    authDomain: "bistroboss-70669.firebaseapp.com",
    projectId: "bistroboss-70669",
    storageBucket: "bistroboss-70669.appspot.com",
    messagingSenderId: "1008434256407",
    appId: "1:1008434256407:web:70217ac8fbec34034b9a52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
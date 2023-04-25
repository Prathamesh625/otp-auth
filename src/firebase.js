import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA3ecuy65QYYNqXIZVP3Hq2kLd6dMx0g9I",
authDomain: "otp-auth-934d6.firebaseapp.com",
projectId: "otp-auth-934d6",
storageBucket: "otp-auth-934d6.appspot.com",
messagingSenderId: "191624897606",
appId: "1:191624897606:web:75e8845b345aa2bb061647",
measurementId: "G-FCWYCFNJ0D"
};

const app = initializeApp(firebaseConfig);











export const auth = getAuth(app);
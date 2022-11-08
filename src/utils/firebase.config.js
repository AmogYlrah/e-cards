

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "kpop-2ca4c.firebaseapp.com",
    projectId: "kpop-2ca4c",
    storageBucket: "kpop-2ca4c.appspot.com",
    messagingSenderId: "651983200861",
    appId: "1:651983200861:web:c6457822efb69b2c9ba3b4",
    measurementId: "G-8PJWH48E36"
});

export const auth = app.auth();
export default app;
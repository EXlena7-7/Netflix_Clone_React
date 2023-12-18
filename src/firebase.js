
// import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLrnk3b32YV9v_2d7A8FcDFInajZ_vTlc",
  authDomain: "netflix-marjory.firebaseapp.com",
  projectId: "netflix-marjory",
  storageBucket: "netflix-marjory.appspot.com",
  messagingSenderId: "650839076442",
  appId: "1:650839076442:web:4e59248fb8b4e3ea14f263",
  measurementId: "G-P0C8BCCCB7"
};

// Initialize Firebase

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = firebaseApp.auth()
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {auth};
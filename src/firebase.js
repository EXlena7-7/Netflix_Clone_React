import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCLrnk3b32YV9v_2d7A8FcDFInajZ_vTlc",
    authDomain: "netflix-marjory.firebaseapp.com",
    projectId: "netflix-marjory",
    storageBucket: "netflix-marjory.appspot.com",
    messagingSenderId: "650839076442",
    appId: "1:650839076442:web:4e59248fb8b4e3ea14f263",
    measurementId: "G-P0C8BCCCB7"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = auth();

  export {auth}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"; 
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAl1klytqD83fRj0vK84A1sRIkkhz-5x8A",
    authDomain: "clone-535fb.firebaseapp.com",
    projectId: "clone-535fb",
    storageBucket: "clone-535fb.appspot.com",
    messagingSenderId: "870108009398",
    appId: "1:870108009398:web:9d5347968738c58154a717",
    measurementId: "G-CF02PRZNN1"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
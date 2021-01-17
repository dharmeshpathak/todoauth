import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAl9cDtBE18yobJb0hkJx_iYyEgA3mAyxg",
    authDomain: "todo-250d0.firebaseapp.com",
    projectId: "todo-250d0",
    storageBucket: "todo-250d0.appspot.com",
    messagingSenderId: "933990275354",
    appId: "1:933990275354:web:58d80f6b504c4fb42374a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
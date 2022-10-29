import firebase from "firebase";
//require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDTWV1B_Y7GykWjhhUYYdXJNTr4YbljuSI",
  authDomain: "biblioteca-fd13b.firebaseapp.com",
  projectId: "biblioteca-fd13b",
  storageBucket: "biblioteca-fd13b.appspot.com",
  messagingSenderId: "522048804719",
  appId: "1:522048804719:web:d40af98b0d6de56338ba9a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
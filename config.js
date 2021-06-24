import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg2dA1HX9gf2HOdoyYnNCL0kjel27ZDbQ",
  authDomain: "project-60-5d079.firebaseapp.com",
  databaseURL: "https://project-60-5d079-default-rtdb.firebaseio.com",
  projectId: "project-60-5d079",
  storageBucket: "project-60-5d079.appspot.com",
  messagingSenderId: "106724653541",
  appId: "1:106724653541:web:13f09e6ccccf23daa6170c"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

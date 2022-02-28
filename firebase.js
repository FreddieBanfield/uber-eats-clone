import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhUkbmRc5mW1f5WefK-rCAuHWn1cjwTzw",
  authDomain: "fb-uber-eats-clone-4e5cb.firebaseapp.com",
  projectId: "fb-uber-eats-clone-4e5cb",
  storageBucket: "fb-uber-eats-clone-4e5cb.appspot.com",
  messagingSenderId: "1090555912937",
  appId: "1:1090555912937:web:d3d43c319b540660fc8678",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { firebase, db, auth };

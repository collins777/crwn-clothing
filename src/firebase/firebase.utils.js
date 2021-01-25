import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth"; // user authentication

const config = {
  apiKey: "AIzaSyBEfVj_zroP0CQXtJ7qlf5BxdzIwM6aKK4",
  authDomain: "crown-db-4f544.firebaseapp.com",
  projectId: "crown-db-4f544",
  storageBucket: "crown-db-4f544.appspot.com",
  messagingSenderId: "860409503832",
  appId: "1:860409503832:web:5e16144b88f01ac93d2a2d",
  measurementId: "G-VP2PMJ6SRE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication Utitlity
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // triggers google pop-up whenever we use the google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

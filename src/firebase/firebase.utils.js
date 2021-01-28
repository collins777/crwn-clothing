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

// allows us to take the userAuth object returned from our authentication library then store in into our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); // get data from userRef object
  //console.log(snapShot); // queryRefernce Object
  // if the snapshot does not exist we want to create data in place of it found in our cloud firestore account
  // snapShot: a picture of the data at a particular database reference at a single point in time
  if (!snapShot.exists) {
    // what properties do we want to store
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // set is our method used to create a new object
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef; // in case we need the object elsewhere
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication Utitlity
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // triggers google pop-up whenever we use the google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

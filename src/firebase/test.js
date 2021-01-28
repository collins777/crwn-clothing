import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// fetching data from our NoSQL firestore database
// i.e. "tunneling down" into our collections for needed data
firestore
  .collection("users")
  .doc("VxbEo4Z6QsYfHlqOCoiP")
  .collection("cartItems")
  .doc("LdSuqoLXupeomVM6tNFv");

// Another Way - query reference
firestore.doc("/users/VxbEo4Z6QsYfHlqOCoiP/cartItems/LdSuqoLXupeomVM6tNFv");

// Collection of cart items - query reference
firestore.collection("/users/VxbEo4Z6QsYfHlqOCoiP/cartItems");

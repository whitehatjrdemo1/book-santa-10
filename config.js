import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDq56j4B-iefhlMy88vupPzYeLTGKgva5U",
  authDomain: "booksanta-ed432.firebaseapp.com",
  projectId: "booksanta-ed432",
  storageBucket: "booksanta-ed432.appspot.com",
  messagingSenderId: "170037333138",
  appId: "1:170037333138:web:a4064adfda04b9cbf52a4b",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();

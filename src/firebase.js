import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQkfnAxlBwNIRq8WYL95dby1SnHNLFk4o",
  authDomain: "warrior-mc.firebaseapp.com",
  projectId: "warrior-mc",
  storageBucket: "warrior-mc.appspot.com",
  messagingSenderId: "74120167656",
  appId: "1:74120167656:web:cedf2aa973335d1792c95d",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };

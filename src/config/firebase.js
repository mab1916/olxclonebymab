import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyCOfHKREaaUBpzKaoV1yMAzHMb3Q-wlGDo",
    authDomain: "olx-clone-shop.firebaseapp.com",
    projectId: "olx-clone-shop",
    storageBucket: "olx-clone-shop.appspot.com",
    messagingSenderId: "1028253444445",
    appId: "1:1028253444445:web:4cb78a55547ff90eb020b4",
    measurementId: "G-6KC01LD21B"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
// export const storage = firebase.storage();
export const auth = firebase.auth();

// const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// GoogleProvider.setCustomParameters({ prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
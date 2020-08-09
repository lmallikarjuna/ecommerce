import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4hvgcoEU4JO2m5vbwP_3slWeEJC-tJDY",
  authDomain: "ecommerce-8e2c9.firebaseapp.com",
  databaseURL: "https://ecommerce-8e2c9.firebaseio.com",
  projectId: "ecommerce-8e2c9",
  storageBucket: "ecommerce-8e2c9.appspot.com",
  messagingSenderId: "945925222948",
  appId: "1:945925222948:web:e9101e3533dc6fb307deb1",
  measurementId: "G-TC1KE2KJQG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

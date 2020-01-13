import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1RNALNMZf5LI-y69JGwwIfpCUzTE9nb0",
    authDomain: "crwn-clothing-4e50c.firebaseapp.com",
    databaseURL: "https://crwn-clothing-4e50c.firebaseio.com",
    projectId: "crwn-clothing-4e50c",
    storageBucket: "crwn-clothing-4e50c.appspot.com",
    messagingSenderId: "236252231394",
    appId: "1:236252231394:web:dc93bb1454fe978620d0bb"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;

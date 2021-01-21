import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyefcQ9JscYZHuAizDVb4UsJ0SFN7CvZc",
    authDomain: "clth-db-74156.firebaseapp.com",
    projectId: "clth-db-74156",
    storageBucket: "clth-db-74156.appspot.com",
    messagingSenderId: "435630190554",
    appId: "1:435630190554:web:b0e69b834964da826e9ae3",
    measurementId: "G-6WXBEFCY5D"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:  'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
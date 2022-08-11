import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCki3y8pwj0Q7YINxv5QKzl4BTYRNn1LYE",
    authDomain: "facebook-clone-c82c4.firebaseapp.com",
    projectId: "facebook-clone-c82c4",
    storageBucket: "facebook-clone-c82c4.appspot.com",
    messagingSenderId: "712202430729",
    appId: "1:712202430729:web:10546cf1617cf45f1c0bd8"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db; 
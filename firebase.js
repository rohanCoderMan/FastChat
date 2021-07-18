import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCjtlO_EBUfunaXwULfqnxrVPQMK2kZgs4",
    authDomain: "fast-chat-web.firebaseapp.com",
    projectId: "fast-chat-web",
    storageBucket: "fast-chat-web.appspot.com",
    messagingSenderId: "594041855140",
    appId: "1:594041855140:web:11cc4cb9719c4a9e291a31",
    measurementId: "G-03CBMB0Z4D"
  };

const app = !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};
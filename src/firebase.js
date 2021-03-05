import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBheSSfw7_SjSxzSd9j8AzOJ9Nl1zn8V34",
    authDomain: "assess-bc5e0.firebaseapp.com",
    projectId: "assess-bc5e0",
    storageBucket: "assess-bc5e0.appspot.com",
    messagingSenderId: "431410011970",
    appId: "1:431410011970:web:d24177fd2c821a779772db",
    measurementId: "G-M3YPG1DDK5"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
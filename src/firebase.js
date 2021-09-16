import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxj5jwrQS_DU-9dbfC_MyUjY9ufSakzYw",
  authDomain: "react-firechat-cc6fe.firebaseapp.com",
  projectId: "react-firechat-cc6fe",
  storageBucket: "react-firechat-cc6fe.appspot.com",
  messagingSenderId: "683632896457",
  appId: "1:683632896457:web:f5294d2cc44fcc436be018",
  measurementId: "G-22V2H5JHX8"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}
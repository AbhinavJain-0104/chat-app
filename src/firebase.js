// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAizRrjubJuG95cEj9DVIIBX33UABKO0BU",
    authDomain: "slack-clone-9cbc1.firebaseapp.com",
    projectId: "slack-clone-9cbc1",
    storageBucket: "slack-clone-9cbc1.appspot.com",
    messagingSenderId: "465749631482",
    appId: "1:465749631482:web:e6839fae0515a5e39cc443",
    measurementId: "G-Y2S512QT5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider,db}
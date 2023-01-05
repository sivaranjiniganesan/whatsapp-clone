import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1rDcgiPdlD199ZQoSuoRKA-0pjs9wh4k",
    authDomain: "whatsapp-clone-78249.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-78249.firebaseio.com",
    projectId: "whatsapp-clone-78249",
    storageBucket: "whatsapp-clone-78249.appspot.com",
    messagingSenderId: "1032593839802",
    appId: "1:1032593839802:web:3969f4a020cde7504f9483",
    measurementId: "G-9YDPSHLPLL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  
  export default db;
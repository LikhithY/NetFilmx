import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

 
const firebaseConfig = {
    apiKey: "AIzaSyBC9UzG1eu75IkJfNpJLAuuGnOwPvpKNCU",
    authDomain: "netflix-clone-f1e4b.firebaseapp.com",
    projectId: "netflix-clone-f1e4b",
    storageBucket: "netflix-clone-f1e4b.appspot.com",
    messagingSenderId: "920452164196",
    appId: "1:920452164196:web:307f5d45271c0d7408cd71"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };
import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCd5YnUq-imhrg5C7Zv8beBfk3TXOZGY20",
    authDomain: "email-clone-mothichandra-67f04.firebaseapp.com",
    projectId: "email-clone-mothichandra-67f04",
    storageBucket: "email-clone-mothichandra-67f04.appspot.com",
    messagingSenderId: "50417605487",
    appId: "1:50417605487:web:b79a86b8e6c6464d42269a"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  //for authentication purposes
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider};
  export default db 
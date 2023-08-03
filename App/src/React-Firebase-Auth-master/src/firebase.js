import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
  apiKey: "AIzaSyCndSodHIwA2Q5HYSMbwCKEMGhf0v55o9Q",
  authDomain: "soccer-app-authentication.firebaseapp.com",
  projectId: "soccer-app-authentication",
  storageBucket: "soccer-app-authentication.appspot.com",
  messagingSenderId: "1050924932550",
  appId: "1:1050924932550:web:6cfeb467c830f76ba9e6c7",
  measurementId: "G-GX53YJ8DQV"
})

export const auth = app.auth()
export default app

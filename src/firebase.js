// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBh2bl7x5_KD7cAq7GdO7Hbf632DlxFIc",
  authDomain: "hosting-e58b2.firebaseapp.com",
  projectId: "hosting-e58b2",
  storageBucket: "hosting-e58b2.appspot.com",
  messagingSenderId: "925148758430",
  appId: "1:925148758430:web:4a47d79a07010b7c20d68f",
}

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmGVNJKakM7Mt25NwBTT5IKuGsB1nQi8I",
  authDomain: "coderhouse-react-cresselia.firebaseapp.com",
  projectId: "coderhouse-react-cresselia",
  storageBucket: "coderhouse-react-cresselia.appspot.com",
  messagingSenderId: "327529008980",
  appId: "1:327529008980:web:8cbe9b1b9a2ea98294c2c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


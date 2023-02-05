import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx7-K4jcCRibhtBSc3ccTBZN5We3AjfzM",
  authDomain: "basic-2b961.firebaseapp.com",
  databaseURL:
    "https://basic-2b961-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "basic-2b961",
  storageBucket: "basic-2b961.appspot.com",
  messagingSenderId: "149447419855",
  appId: "1:149447419855:web:5166dc2b266e2f9c8714ba",
  measurementId: "G-5RQPPYLY3D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

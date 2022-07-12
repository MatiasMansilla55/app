import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW2hUbs0jearS7Ee_RWgkP14HXRfPMK8s",
  authDomain: "coderhouse-69ed2.firebaseapp.com",
  projectId: "coderhouse-69ed2",
  storageBucket: "coderhouse-69ed2.appspot.com",
  messagingSenderId: "462802038846",
  appId: "1:462802038846:web:74c754e4165eb1aff8616f",
  measurementId: "G-SVTB27X9H9",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

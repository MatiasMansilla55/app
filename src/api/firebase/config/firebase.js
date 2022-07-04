// 1)Me traigo le metodo de autenticacion de firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// 2)Traigo los keys privados de la plataforma web
// 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW2hUbs0jearS7Ee_RWgkP14HXRfPMK8s",
  authDomain: "coderhouse-69ed2.firebaseapp.com",
  projectId: "coderhouse-69ed2",
  storageBucket: "coderhouse-69ed2.appspot.com",
  messagingSenderId: "462802038846",
  appId: "1:462802038846:web:74c754e4165eb1aff8616f",
  measurementId: "G-SVTB27X9H9"
};

// 3)Me autentico usando el metodo del paso 1 y los keys del 2
export const app = initializeApp(firebaseConfig);

//4) obtener una referencia/puntero a la base de datos

export const db = getFirestore(app);
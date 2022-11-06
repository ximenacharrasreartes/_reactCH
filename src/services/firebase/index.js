import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCH4-hXral0pSDuhakW1gLdCAturWFo274",
  authDomain: "backend-soap.firebaseapp.com",
  projectId: "backend-soap",
  storageBucket: "backend-soap.appspot.com",
  messagingSenderId: "54241084786",
  appId: "1:54241084786:web:7931e3c283710bf57709eb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
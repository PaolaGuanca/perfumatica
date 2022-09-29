import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbDdAgalyf4p7C1LSmc39NSNby6oxdOBo",
  authDomain: "perfumatica1.firebaseapp.com",
  projectId: "perfumatica1",
  storageBucket: "perfumatica1.appspot.com",
  messagingSenderId: "771050696138",
  appId: "1:771050696138:web:4ec98813cd44d63dd43333"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
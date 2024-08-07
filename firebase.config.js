// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3MZfB1gCyYenvvpZ3O6eLM8hXxQwPTog",
  authDomain: "inventory-management-538f7.firebaseapp.com",
  projectId: "inventory-management-538f7",
  storageBucket: "inventory-management-538f7.appspot.com",
  messagingSenderId: "1005113562280",
  appId: "1:1005113562280:web:e952e1fcd00ecf4d885e9d",
  measurementId: "G-JQZJ5F3EF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
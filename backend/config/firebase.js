import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCLBQNKxrJNmK8Db_9PFd4gfW9AJwE1OTM",
  authDomain: "ecommerce-fbd6a.firebaseapp.com",
  projectId: "ecommerce-fbd6a",
  storageBucket: "ecommerce-fbd6a.appspot.com",
  messagingSenderId: "304211429098",
  appId: "1:304211429098:web:fdb3714ec798c09e6cb993",
  measurementId: "G-HZM8B9D6EM"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

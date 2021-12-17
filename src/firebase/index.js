import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfm4EZqIfGMIej4qaIPlX1uWqS4_l3N-A",
  authDomain: "ahsan-s-hotel.firebaseapp.com",
  projectId: "ahsan-s-hotel",
  storageBucket: "ahsan-s-hotel.appspot.com",
  messagingSenderId: "190717700676",
  appId: "1:190717700676:web:478420030f5ac957fd2a11"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
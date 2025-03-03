import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAy7r4CxV09lV9bHwIc_xuFgPQtqk81G8Q",
  authDomain: "chateo-cbcc7.firebaseapp.com",
  projectId: "chateo-cbcc7",
  storageBucket: "chateo-cbcc7.firebasestorage.app",
  messagingSenderId: "361691169928",
  appId: "1:361691169928:web:a7eef8527ae2aedb024b3d",
  measurementId: "G-D30YGVKS3E",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

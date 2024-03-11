import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW0DW6Q-EBz2vtgOBBVPHadM7C0asxQ-8",
  authDomain: "beatsmith-48cb7.firebaseapp.com",
  projectId: "beatsmith-48cb7",
  storageBucket: "beatsmith-48cb7.appspot.com",
  messagingSenderId: "526720342157",
  appId: "1:526720342157:web:a7e005e19f82ef8ec16ac4",
  measurementId: "G-NK5WCNDWQH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };

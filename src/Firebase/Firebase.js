import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const databaseURL = import.meta.env.VITE_FIREBASE_URL;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey,
    authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};


export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
 export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import * as constants from './constants';


const apiKey = constants.VITE_FIREBASE_API_KEY;
const authDomain = constants.VITE_FIREBASE_AUTH_DOMAIN;
const databaseURL = constants.VITE_FIREBASE_URL;
const projectId = constants.VITE_FIREBASE_PROJECT_ID;
const storageBucket = constants.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = constants.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = constants.VITE_FIREBASE_APP_ID;
const measurementId = constants.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
    authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

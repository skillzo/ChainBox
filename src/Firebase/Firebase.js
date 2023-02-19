import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_gzovqPysv4w9YB2JQ_XVc1h6BnP4H9k",
  authDomain: "the-blog-22579.firebaseapp.com",
  projectId: "the-blog-22579",
  storageBucket: "the-blog-22579.appspot.com",
  messagingSenderId: "29942782089",
  appId: "1:29942782089:web:cc6a7e19629656bd8ece58",
  measurementId: "G-2SCJVGP35V",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB26PR4RAs-t5GBOxuIv38jz19lvxEU9D8",
  authDomain: "test-94ceb.firebaseapp.com",
  projectId: "test-94ceb",
  storageBucket: "test-94ceb.firebasestorage.app",
  messagingSenderId: "151865157202",
  appId: "1:151865157202:web:41575f46a652fa83cfa18b",
  measurementId: "G-VCXLHP6YZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
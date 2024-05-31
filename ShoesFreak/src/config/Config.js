import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFO98Whj_79HX0zyCQ4k8wh7pNeCnplCA",
  authDomain: "shoesfreak-7e431.firebaseapp.com",
  databaseURL: "https://shoesfreak-7e431-default-rtdb.firebaseio.com",
  projectId: "shoesfreak-7e431",
  storageBucket: "shoesfreak-7e431.appspot.com",
  messagingSenderId: "973463102925",
  appId: "1:973463102925:web:9de39d02bb297265601084",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

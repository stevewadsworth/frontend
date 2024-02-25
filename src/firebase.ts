// Firebase App configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw3gFciDEaDOJuJm4jqdxic2yGCFYPVXo",
  authDomain: "portfolio-62576.firebaseapp.com",
  projectId: "portfolio-62576",
  storageBucket: "portfolio-62576.appspot.com",
  messagingSenderId: "837131138375",
  appId: "1:837131138375:web:fa457ccef224c786920862",
  measurementId: "G-7H8Q6Y5JQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)

async function fetchFromStorage(file: string) : Promise<Response>{
  const url = await getDownloadURL(ref(storage, file))
  return await fetch(url, { mode: "cors"})
}

async function getURLForPath(file: string) :Promise<string> {
  return await getDownloadURL(ref(storage, file))
}

const firebase = {
    app,
    analytics,
    storage,
    fetchFromStorage,
    getURLForPath
}

export default firebase

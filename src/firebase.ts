// Firebase App configuration
import { initializeApp } from "firebase/app";
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
const storage = getStorage(app)

async function fetchFromStorage(file: string) : Promise<Response>{
  const url = await getURLForPath(file)
  return await fetch(url, { mode: "cors"})
}

const pathMap = new Map<string, string>()

async function getURLForPath(file: string) :Promise<string> {
  if (!pathMap.has(file)) {
    const filePath = await getDownloadURL(ref(storage, file))
    pathMap.set(file, filePath)
  }
  return new Promise((resolve, reject) => {
    const path = pathMap.get(file)
    if (path) {
      resolve(path)
    } else {
      reject("File not found in storage")
    }
  })
}

const firebase = {
    app,
    storage,
    fetchFromStorage,
    getURLForPath
}

export default firebase

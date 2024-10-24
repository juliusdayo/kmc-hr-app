import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqqwU0k3qVQczjtegVltzK0bLwMGKe3es",
    authDomain: "kmc-hr.firebaseapp.com",
    projectId: "kmc-hr",
    storageBucket: "kmc-hr.appspot.com",
    messagingSenderId: "765533903766",
    appId: "1:765533903766:web:9eb1c3e4a5a30bdf73dbb7",
    measurementId: "G-K3S78YFT06"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function GET() {
    const applicantCollection = collection(db, 'test')
    const data = doc
    return Response.json({ data: 'okay' })
}
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAhykS3Spci8jC10vqjEgH_k5g40ciG1t4",
    authDomain: "farmers-db.firebaseapp.com",
    databaseURL: "https://farmers-db.firebaseio.com",
    projectId: "farmers-db",
    storageBucket: "farmers-db.appspot.com",
    messagingSenderId: "249695488238",
    appId: "1:249695488238:web:92ccf8542676237589cbff",
    measurementId: "G-8CSMG7VZCB"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider).catch(error => console.log(error));


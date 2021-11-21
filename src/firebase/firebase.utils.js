import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, "users", userAuth.uid);
    const docSnapShot = await getDoc(userRef);

    if(!docSnapShot.exists()) {
        const { displayName, email, photoURL, emailVerified, phoneNumber } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                photoURL,
                emailVerified,
                phoneNumber,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 

    return userRef;
}


const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider).catch(error => console.log(error));


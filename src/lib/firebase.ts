import { initializeApp } from 'firebase/app';
import { 
  initializeAuth,
  indexedDBLocalPersistence,
  browserLocalPersistence,
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Use initializeAuth with explicit persistence for better stability in iframes
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence]
});

export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, onAuthStateChanged };

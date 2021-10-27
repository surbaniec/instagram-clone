import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDDJf75d3s__PSjiwW_2yNgLZQ-xJ_AM4M',
  authDomain: 'instagram-clone-d4ca4.firebaseapp.com',
  projectId: 'instagram-clone-d4ca4',
  storageBucket: 'instagram-clone-d4ca4.appspot.com',
  messagingSenderId: '248768306608',
  appId: '1:248768306608:web:122970d85072b1c6e94a75',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1X9PI_7LgNxuZOh1_LxdeC6qNVYr6ISU',
  authDomain: 'kukify.firebaseapp.com',
  projectId: 'kukify',
  storageBucket: 'kukify.appspot.com',
  messagingSenderId: '322836955294',
  appId: '1:322836955294:web:7537eea20ace48a9097b8f',
  measurementId: 'G-03XDBXRTC3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// const storage = getStorage(app);
// export { storage, app };

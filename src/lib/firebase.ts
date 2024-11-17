import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaMvFjQ6zU6FWV9Rbc-mGWKwz-FdAt0AE",
  authDomain: "inicio-de-sesion-c8bd0.firebaseapp.com",
  projectId: "inicio-de-sesion-c8bd0",
  storageBucket: "inicio-de-sesion-c8bd0.firebasestorage.app",
  messagingSenderId: "959741449617",
  appId: "1:959741449617:web:712c8570904d3126ddf630",
  measurementId: "G-EVLDQT3QCJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



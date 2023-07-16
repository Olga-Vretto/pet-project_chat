import React, { createContext } from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCGVo6TMXbRqffpyLcF_NWHaFOBn1phD84',
  authDomain: 'chat-react-real-time.firebaseapp.com',
  projectId: 'chat-react-real-time',
  storageBucket: 'chat-react-real-time.appspot.com',
  messagingSenderId: '887274306354',
  appId: '1:887274306354:web:476b5c09361018928ef52b',
  measurementId: 'G-15K05VBMZF',
});

export const Context = createContext(null);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
      firebaseApp,
    }}
  >
    <App />
  </Context.Provider>,
);

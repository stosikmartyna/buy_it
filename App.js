import React from 'react';
import firebase from 'firebase';
import { AuthProvider } from './context/AuthProvider';
import { AppView } from './components/AppView/AppView';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAF8Dtma3bex7Y_mde-bvqCvb8oj4Z-sFw",
    authDomain: "buyit-e91cc.firebaseapp.com",
    projectId: "buyit-e91cc",
    storageBucket: "buyit-e91cc.appspot.com",
    messagingSenderId: "347966380356",
    appId: "1:347966380356:web:d4a1393ea1eebc7231df11"
  });
} else {
  firebase.app(); 
}

export default function App() {
  return (
    <AuthProvider>
      <AppView />
    </AuthProvider>
  );
}
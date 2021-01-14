import React from 'react';
import firebase from 'firebase';
import { AuthProvider } from './context/AuthProvider';
import { AppView } from './components/AppView/AppView';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCDegAf36ndoUzdpUuPIi0nMbK3VbT3fBU",
    authDomain: "buy-it-faaec.firebaseapp.com",
    databaseURL: "https://buy-it-faaec-default-rtdb.firebaseio.com",
    projectId: "buy-it-faaec",
    storageBucket: "buy-it-faaec.appspot.com",
    messagingSenderId: "971127732697",
    appId: "1:971127732697:web:2032d1720e2aa5666501c8"
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
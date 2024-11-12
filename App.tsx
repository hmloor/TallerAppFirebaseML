import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import firebase from '@react-native-firebase/app';
import Formulario from './formulario'; // Asegúrate de que la ruta sea correcta

const firebaseConfig = {
  apiKey: "AIzaSyCYqDzMd_aC-Ihg8_AuBPLX6a_jpnYPnCQ",
  authDomain: "tallerappfirebase.firebaseapp.com",
  databaseURL: "https://tallerappfirebase.firebaseio.com",
  projectId: "tallerappfirebase",
  storageBucket: "tallerappfirebase.appspot.com",
  messagingSenderId: "243615071915",
  appId: "1:243615071915:android:a54e12019ee1f614a5c1ee"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [puntaje, setPuntaje] = useState('');

    const enviarDatos = () => {
        if (nombre && puntaje) {
            database().ref('/jugadores').push().set({ nombre, puntaje: parseInt(puntaje) }).then(() => console.log('Datos enviados!')).catch(error => console.error('Error al enviar los datos: ', error));
        }
    };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Puntaje"
        value={puntaje}
        onChangeText={setPuntaje}
        keyboardType="numeric"
      />
      <Button title="Enviar" onPress={enviarDatos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10 },
});

export default App;

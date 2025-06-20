// Text input y Alert

// Importaciones
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';


// Ejecución
export default function App(){
  const [nombre, setNombre] = useState('');

  
  const mostrarAlerta = () => {

    if (nombre.trim()===''){
      Alert.alert('error', 'Por favor escribe algo');
      alert('Escribe algo')
    } else {

      Alert.alert('Bienvenido', `hola ${nombre}, bienvenido a nuestra app :P`);
      alert('Hola ' + nombre + ' bienvenido');


    }
  } 

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Ingresa tu nombre </Text>
      <TextInput 
      style={styles.input}
      placeholder='Aquí va algo'
      onChangeText={setNombre}
      value={nombre}
      >
      </TextInput>

      <Button title = 'Enviar' onPress={mostrarAlerta}></Button>

    </View>
  )
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#000'
  }

  }

);
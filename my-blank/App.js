// Importaciones
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';

export default function App() {
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.container}>

        <Button
          title="Presioname"
          color="#841584"
          onPress={() => alert('Me presionaste =P')}
        />
        <Button
          title={botonDesactivado ? 'Desactivado' : 'Desactivame'}
          disabled={botonDesactivado}
          onPress={() => setBotonDesactivado(true)}
        />

        <TouchableOpacity
        style={styles.dynamicButton}
        onPress={() => setContador(contador + 1)}>
          <Text style={styles.dynamicText}>{contador}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress = {() => alert('La pokebola ha sido presionada')}>
          <Image
          source={require('./assets/pokebola.png')}
          style={styles.imagen}></Image>
        </TouchableOpacity>

      </View>

      <View style={styles.botonJustificado}>

        <Button title="left button" color="#674323" />
        <Button title="right button" color="#097865" />

      </View>

    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  botonJustificado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  dynamicButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center'
  },

  dynamicText: {
    color: '#345676',
    fontSize: 18
  },

  imagen: {
    width: 100,
    height: 100
  },
});

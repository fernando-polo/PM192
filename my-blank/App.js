
// Zona 1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'; 

const Texto = () =>{
  const [contenido, setContenido] = useState('Hello world: React.')
  const actualizarTexto = () => {
    setContenido('Estado actualizado')
  }
  return (
          <Text onPress={actualizarTexto}>{contenido}</Text>
  )
}


// Zona 2: Main
export default function App() {
  return (

    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button title='Press this button.'></Button>
      <StatusBar style="auto" />
    </View>
  );

}

// Zona 3: Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

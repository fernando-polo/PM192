
// Zona 1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'; 

const Texto = ({style}) =>{
  const [contenido, setContenido] = useState('Hello world: React.')
  const actualizarTexto = () => {
    setContenido('Estado actualizado')
  }
  return (
          <Text style = {[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}


// Zona 2: Main
export default function App() {
  return (

    <View style={styles.container}>
      <Texto style={styles.red}></Texto>
      <Texto style={styles.blue}></Texto>
      <Texto style={styles.green}></Texto>
      <StatusBar style="auto" />

    </View>
  );

}

// Zona 3: Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'base-line',
    justifyContent: 'center',
    flexDirection:'column'
  },

  text:{
    color: 'white',
    fontSize: 25,
    // height: 100,
    // width: 100,
  },

  red:{
    backgroundColor: 'red',
  },

  green:{
    backgroundColor: 'green',  
  },
  
  blue:{
    backgroundColor: 'blue',  
  },
  

});

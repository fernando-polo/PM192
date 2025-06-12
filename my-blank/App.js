
// Zona 1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Texto = (props) =>{
  const {children} = props
  return (
          <Text> { children } </Text>
  )
}


// Zona 2: Main
export default function App() {
  return (

    <View style={styles.container}>
      <Texto> 'hola' </Texto>
      <Texto> mundo </Texto>
      <Texto> 'React Native' </Texto>
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

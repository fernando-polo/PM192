// Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import react, {useState} from 'react'


// Zona de componentes hijo con props
const IndicadorCarga = ({color, size}) => {
  return <ActivityIndicator style = {styles.indicador} color = {color} size = {size} />
}

// Zona - componenete principal
export default function App(){

  const[cargando, setCargando] = useState(false);

  const iniciarCarga = () =>{
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000); //simulación de carga
  }


  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>  Activity Indicator   </Text>

        {cargando ? (
          <IndicadorCarga color = 'deepskyblue' size = 'large'/>
        ) : (
          <Text style={styles.textoSecundario}> Presiona el botón para comenzar :D</Text>
        )}
      <Button title = 'Iniciar Carga' onPress = {iniciarCarga} color = '#ff6f61'></Button>
        <StatusBar style='auto' />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ccff90',
    alignItems : 'center',
    justifyContent: 'center',
    padding: 20,
  },

  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2e2e2e'
  },

  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: '#3a3a3a'
  },

  indicador:{
    marginBottom: 20,
  }

})



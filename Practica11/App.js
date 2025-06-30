import React, { useState } from 'react';
import {
  View,
} from 'react-native';

export default function App() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [mostrarSplash, setMostrarSplash] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const manejarRegistro = () => {
    if (!nombreCompleto.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu nombre completo');
      return;
    }

    if (!correoElectronico.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico');
      return;
    }

    if (!validarEmail(correoElectronico)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    setMostrarSplash(true);
    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      setMostrarSplash(false);
      Alert.alert(
        'Registro Exitoso',
        `¡Bienvenido!\n\nDatos registrados:\n• Nombre: ${nombreCompleto}\n• Email: ${correoElectronico}`,
        [
          {
            text: 'OK',
            onPress: () => {
              setNombreCompleto('');
              setCorreoElectronico('');
              setAceptaTerminos(false);
            }
          }
        ]
      );
    }, 3000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
          }}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.logoContainer}>
                <View style={styles.logoCircle}>
                  {/* Usa cualquier imagen local aquí si prefieres */}
                  <Image
                    source={require('./assets/COCA.png')}
                    style={styles.logoImage}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <Text style={styles.titulo}>Crear Cuenta</Text>
              <Text style={styles.subtitulo}>Únete a nuestra comunidad</Text>

              <View style={styles.formulario}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Nombre Completo</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre completo"
                    placeholderTextColor="#999"
                    value={nombreCompleto}
                    onChangeText={setNombreCompleto}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Correo Electrónico</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="tu@email.com"
                    placeholderTextColor="#999"
                    value={correoElectronico}
                    onChangeText={setCorreoElectronico}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.terminosContainer}>
                  <Switch
                    value={aceptaTerminos}
                    onValueChange={setAceptaTerminos}
                    trackColor={{ false: '#767577', true: '#F40000' }}
                    thumbColor={aceptaTerminos ? '#ffffff' : '#f4f3f4'}
                  />
                  <Text style={styles.terminosTexto}>
                    Acepto los{' '}
                    <Text style={styles.terminosLink}>términos y condiciones</Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={[styles.botonRegistro, cargando && styles.botonDeshabilitado]}
                  onPress={manejarRegistro}
                  disabled={cargando}
                >
                  {cargando ? (
                    <ActivityIndicator color="#ffffff" />
                  ) : (
                    <Text style={styles.textoBotonRegistro}>Registrarse</Text>
                  )}
                </TouchableOpacity>

                <Text style={styles.textoAdicional}>
                  ¿Ya tienes cuenta?{' '}
                  <Text style={styles.linkIniciarSesion}>Iniciar Sesión</Text>
                </Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>

        {/* Splash simple */}
        <Modal visible={mostrarSplash} transparent={false} animationType="fade">
          <View style={styles.splashSimpleContainer}>
            <Image
              source={require('./assets/COCA.png')}
              style={styles.splashSimpleLogo}
              resizeMode="contain"
            />
            <Text style={styles.splashSimpleTexto}>Registrando...</Text>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  logoContainer: { alignItems: 'center', marginBottom: 30 },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: { width: 60, height: 60 },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.9,
  },
  formulario: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 25,
  },
  inputContainer: { marginBottom: 20 },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  terminosTexto: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#666',
  },
  terminosLink: {
    color: '#F40000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  botonRegistro: {
    backgroundColor: '#F40000',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  botonDeshabilitado: {
    backgroundColor: '#cccccc',
  },
  textoBotonRegistro: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoAdicional: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  linkIniciarSesion: {
    color: '#F40000',
    fontWeight: '600',
  },
  splashSimpleContainer: {
    flex: 1,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashSimpleLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  splashSimpleTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

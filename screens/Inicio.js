import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


const icon = require('./assets/logo.png');
const LoadingIcon = require('./assets/carga.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo centrado */}
      <View style={styles.centeredContent}>
        <Image
          source={icon}
          style={{ width: 400, height: 100, resizeMode: 'contain' }}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}>Log In</Text>
</TouchableOpacity>
    </View>
      <StatusBar style="auto" />  
      {/* puede ser dark, ligth o auto */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FAD50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 40, // separarlo del borde inferior
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000', // Negro
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30, // Bordes bien redondeados
    marginTop: 20,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff', // Blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

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

      {/* Logo de carga abajo */}
      <View style={styles.bottomContent}>
        <Image
          source={LoadingIcon}
          style={{ width: 150, height: 80, resizeMode: 'contain' }}
        />
      </View>

      <StatusBar style="auto" />
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
});
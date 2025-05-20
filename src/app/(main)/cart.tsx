// app/(main)/cart.tsx (o favorites.tsx, etc.)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = () => { // Cambia el nombre según el archivo (ej. FavoritesScreen)
  return (
    <View style={styles.container}>
      <Text>Shopping Cart Screen</Text> {/* Cambia el texto según la pantalla */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // O el color que desees
  },
});

export default CartScreen; // ¡Esta línea es la que falta!
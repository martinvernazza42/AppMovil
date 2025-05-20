// app/(main)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
// Importa tus colores desde donde los hayas definido
import { Colors } from '../../constants/Colors'; // Asegúrate de que la ruta sea correcta
import { Platform, View } from 'react-native'; // Importa View para envolver el ícono de escáner


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary, // Color para el ícono/texto activo (verde en tu diseño)
        tabBarInactiveTintColor: Colors.text, // Color para el ícono/texto inactivo (negro/gris)
        headerShown: false, // ¡Importante! Oculta el encabezado de la pestaña individual, ya que lo manejamos con un componente.
        tabBarStyle: {
          backgroundColor: Colors.lightGreen, // Fondo de la barra (verde claro en tu diseño)
          borderTopLeftRadius: 25, // Esquinas redondeadas superiores
          borderTopRightRadius: 25,
          position: 'absolute', // Asegura que la barra esté fija en la parte inferior
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 90 : 70, // Ajusta la altura (iOS necesita más por la "safe area")
          paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Padding para el safe area en iOS
          paddingTop: 10,
          // Sombra (para darle profundidad)
          shadowColor: Colors.shadowColor,
          shadowOffset: { width: 0, height: -3 }, // Sombra hacia arriba
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 8, // Sombra para Android
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: -5, // Ajusta la posición del texto respecto al ícono
        },
      }}
    >
      <Tabs.Screen
        name="index" // Corresponde a app/(main)/index.tsx (tu pantalla Home)
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites" // Necesitarás crear app/(main)/favorites.tsx
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="scanner" // Necesitarás crear app/(main)/scanner.tsx
        options={{
          title: '', // ¡Importante! Sin texto para el ícono de escáner
          tabBarIcon: ({ color, size }) => (
            <View style={{
                // Puedes ajustar el tamaño o padding si el ícono de escáner es especial
            }}>
                <Ionicons name="scan-sharp" color={color} size={size + 5} /> {/* Tamaño un poco más grande */}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart" // Necesitarás crear app/(main)/cart.tsx
        options={{
          title: 'Shopping Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="more" // Necesitarás crear app/(main)/more.tsx
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
// app/(main)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors'; // Asegúrate de que la ruta sea correcta
import { Platform, View, StyleSheet } from 'react-native'; // Importa View una sola vez
import NavBar from '../../components/NavBar';

const TabsLayout = () => {
  return (
    <>
      <NavBar/>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.text,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.lightGreen,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: Platform.OS === 'ios' ? 90 : 70,
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
            paddingTop: 10,
            shadowColor: Colors.shadowColor,
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: -5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="scanner"
          options={{
            title: '',
            tabBarIcon: ({ color, size }) => (
              <View>
                <Ionicons name="scan-sharp" color={color} size={size + 5} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Shopping Cart',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: 'More',
            tabBarIcon: ({ color, size }) => (
              <Feather name="menu" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

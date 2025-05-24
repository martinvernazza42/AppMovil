// app/(main)/index.tsx

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFilter);


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const colors = [
  '#38B000', // frutas - verde
  '#D1942B', // dairy - dorado
  '#747983', // bebidas - gris
  '#FFE302', // snacks - amarillo
  '#CC1719', // carne - rojo
  '#47D8F9', // limpieza - celeste
];
const categories = [
  {
    name: 'Fruits and Vegetables',
    image: require('../../assets/images/fruits.png'),
  },
  {
    name: 'Dairy and Cereals',
    image: require('../../assets/images/dairy.png'),
  },
  {
    name: 'Beverages',
    image: require('../../assets/images/beverages.png'),
  },
  {
    name: 'Snacks',
    image: require('../../assets/images/snack.png'),
  },
  {
    name: 'Meat',
    image: require('../../assets/images/meet.png'),
  },
  {
    name: 'Cleaning',
    image: require('../../assets/images/cleen.png'),
  },
];


export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}>
      <Text style={styles.title}>What are you looking for?</Text>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search..." style={styles.searchInput} />
        <FontAwesomeIcon icon={faFilter} size={18} color="#000" style={{marginLeft: 8}} />
      </View>



      <View style={styles.grid}>
        {categories.map((cat, index) => (
          <View key={index} style={styles.categoryWrapper}>
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: colors[index],
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                },
              ]}
            >
              <Image source={cat.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.label}>{cat.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
  flexGrow: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 16,
  paddingBottom: 30,
},
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  address: {
    fontSize: 16,
    fontWeight: '500',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  filterIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryWrapper: {
    width: '47%',
    marginBottom: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  label: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 4,
  },
});

// app/(main)/favorites.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MoreScreen;
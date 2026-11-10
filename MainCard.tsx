
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>

      {}
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },

  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

});

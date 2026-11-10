
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MainCard from './MainCard';

const nombre = 'Andreimi jesus';
const apellido = 'Montero Heredia';

export default function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const cambiarEstado = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>

      {}
      <Text style={styles.titulo}>
        Hello World by {nombre} {apellido}
      </Text>

      {}
      <MainCard loading={isLoading} />

      {}
      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        onPress={cambiarEstado}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },

});
import React from 'react';
import { View, Text, StyleSheet, DatePickerAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Meu App </Text>
      <Text style={styles.descricao}>Workshop do zero ao App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,                     //o q eh flex? 
    backgroundColor: 'purple', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 30,
    color: '#FFF'
  },
  descricao:{
    fontSize: 20, 
    color: 'yellow'
  }
});
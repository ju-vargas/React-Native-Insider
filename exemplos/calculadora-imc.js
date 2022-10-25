import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState ('');
  //peso eh onde vai ser armazenado
  //setPeso eh meio oq eh usado para atualizar o valor de peso
  const [altura, setAltura] = useState ('');

  function handleSubmit(){
    const alt = altura / 100
    const imc = peso/(alt*alt);
    if (imc < 18.6)
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2));
    else if (imc >= 18.6 && imc < 24.9) 
      alert('Peso ideal! ' + imc.toFixed(2));
    else if (imc >= 24.9 && imc < 34.9) 
      alert('Levemente acima do peso! ' + imc.toFixed(2));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>  
    
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder = "Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder = "Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}> 
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,                     //o q eh flex? 
  },
  title: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 30
  },
  input: {
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#ffffff',
    fontSize: 20    
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25

  }

});
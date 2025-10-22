import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Esqueceu da sua senha?</Text>
      <Text >Então redefina sua senha abaixo:</Text>
      <TextInput  placeholder='Digite seu email' style={style.input}></TextInput>
      <TouchableOpacity style={style.botao}><Text style={style.butext} >Confirma</Text></TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: '36%', 
  },
  input:{
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 6,
    textAlign: 'center',
    width: 300,
    marginBottom: 20,
  },
  botao:{
    borderWidth: 1,
    borderRadius: 6,
    width: '50%',
    height: 40,
    backgroundColor: 'black',
  },
  butext:{
    color: 'white', 
    marginRight:'auto', 
    marginLeft: 'auto', 
    marginTop: 'auto', 
    marginBottom: 'auto', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
});
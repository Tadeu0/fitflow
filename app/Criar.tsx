import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
export default function Criar() {

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={style.container}>
      <Text style={style.textinput}>Seu Nome Completo</Text>
       <TextInput placeholder="Ex: Francisco Tadeu Esc..." style={style.input}></TextInput>
       <Text style={{fontWeight: 'bold',right: 72,marginBottom: 5}}>Nome de Usuário</Text>
       <TextInput placeholder="Ex: Tadeu01" style={style.input}></TextInput>
       <Text style={{fontWeight: 'bold',right: 70,marginBottom: 5}}>Digite uma Senha</Text>
       <TextInput placeholder="Ex: senha123" keyboardType="numeric" style={style.input}></TextInput>
       <Text style={style.textinput}>Confirme sua senha</Text>
       <TextInput placeholder="Ex: senha123" keyboardType="numeric" style={style.input}></TextInput>
       <TouchableOpacity style={style.botao}><Text style={{fontSize: 24, color : "white"}}>Criar</Text></TouchableOpacity>
       <Text></Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height:"90%",
    marginTop: "16%",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 10
  },
  input:{
    borderWidth: 0.5,
    minWidth: "80%",
    marginBottom: 30,
    textAlign: "center",
    fontWeight: '400',
    borderRadius: 10
  },
  textinput:{
    fontWeight: 'bold',
    right: 60,
    marginBottom: 5
  },
  botao:{
    borderWidth: 0.5,
    minWidth: "80%",
    height: 45,
    marginBottom: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
});

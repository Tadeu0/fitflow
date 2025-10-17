import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [ c, setc] = useState (0) 
  const [altura, setaltura] = useState (0)
  const [iac, setiac] = useState ('')

  

  //Calculando iac
  function calculo() {
    const resultado = Math.ceil(c/(altura*Math.sqrt(altura))-18)
    if (resultado >=8 && resultado <= 20){
      setiac("Resultado: "+resultado+"   Adiposidade Normal")
    }
    if (resultado >=21 && resultado <= 25){
      setiac("Resultado: "+resultado+"   sobrepeso")
    }
    if (resultado >25){
      setiac("Resultado: "+resultado+"   obesidade")
    }
    
    
  }
  return (
    
    <View style={style.container}>
    
    <View style={style.input}>
    <Text style={style.titulo}>Homem</Text>
    <TextInput placeholder="Digite sua circuferência do quadril" keyboardType='numeric' onChangeText={(text) => setc(Number(text))} style={style.inpu}></TextInput>
    <TextInput placeholder="Digite sua altura" keyboardType='numeric' onChangeText={(text) => setaltura(Number(text))} style={style.inpu}></TextInput>
    <TouchableOpacity onPress={calculo} style={style.bot}><Text style={{ color: "white"}}>Calcular</Text></TouchableOpacity>
    <Text style={style.res} >{iac}</Text>
    </View>
    </View>
   
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#828485ff',
    width: "100%",
    height: "100%",

  },
  titulo:{
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 15
  },
  input:{
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: 'center',
  
  },
  inpu:{
    marginTop: 10,
    width: "90%",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
  },
  bot:{
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: "green",
    padding: 5,
    borderRadius: 20,
    width: '60%',
    alignItems: "center",
    
  },
  res:{
    width: "30%",
    height: 80,
    left: 10,
    borderRadius: 4,

  },
});

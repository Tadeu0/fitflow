import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
export default function App() {


  const [ cm,setcm] = useState (0) 
  const [am,setam] = useState (0)
  const [iacm, setiacm] = useState ("")


    function cal() {
    const resultado = Math.ceil(cm/(am*Math.sqrt(am))-18)
  
    if (resultado >= 21 && resultado <= 32){
      setiacm("Resultado: "+resultado+"   Adiposidade Normal")
    }
    if (resultado >=33 && resultado <= 38){
      setiacm("Resultado: "+resultado+"   sobrepeso")
    }
    if (resultado >38){
      setiacm("Resultado: "+resultado+"   obesidade")
    }
    
  }
  return (
    <View style={styles.container}>
    
    <View style={styles.input}>
    <Text style={styles.titulo}>Mulher</Text>
    <TextInput placeholder="Digite sua circuferência do quadril" onChangeText={(text) => setcm(Number(text))} style={styles.inpu}></TextInput>
    <TextInput placeholder="Digite sua altura" onChangeText={(text) => setam(Number(text))} style={styles.inpu}></TextInput>
    <TouchableOpacity onPress={cal} style={styles.bot}><Text style={{ color: "white"}}>Calcular</Text></TouchableOpacity>
    <Text style={styles.res} >{iacm}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
export default function Home() {
  const [peso,setpeso] = useState (0) // setpeso => adiciona algo na var peso
  const [altura,setaltura] = useState (0)
  const [imc, setimc] = useState (0)

  //Calculando imc
  function calculo() {
    const resultado = Math.ceil(peso/(altura*altura))
    setimc(resultado)
  }
return (
     <View style={style.container}>

            <TextInput 
            placeholder="Qual o seu peso(kg)" 
            keyboardType="numeric" 
            onChangeText={(texto) => setpeso(Number(texto))}
            ></TextInput>
            <TextInput 
            placeholder="Qual sua altura (m)"
             keyboardType="numeric" 
              onChangeText={(texto) => setaltura(Number(texto))}
             ></TextInput>

            <TouchableOpacity
            onPress={calculo}
            ><Text>Calcular</Text></TouchableOpacity>
            <Text>{imc}</Text>
            

</View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC"
  },
})
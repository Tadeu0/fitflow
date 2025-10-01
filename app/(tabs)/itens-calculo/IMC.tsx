import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput, 
    TouchableOpacity,
    View
} from "react-native";
export default function Home() {
  const [peso,setpeso] = useState (0) 
  const [altura,setaltura] = useState (0)
  const [imc, setimc] = useState ("")

  //Calculando imc
  function calculo() {
    const resultado = Math.ceil(peso/(altura*altura))
    if (resultado < 18){
      setimc("A media é: "+resultado+ "Entãovocêesta no nivel" )
    }
    if (resultado > 18 && resultado <= 24){
      setimc("Resultado é: "+resultado+"  Peso normal" )
    }
    if(resultado >= 25 && resultado <= 29){
      setimc("Resultado é: "+resultado+"  Excesso de peso"  )
    }
    if(resultado >=30 && resultado <=34){
      setimc("Resultado é: "+resultado+"  Obesidade classe 1  " )
    }
     if(resultado >=35 && resultado <=39){
      setimc("Resultado é: "+resultado+"  Obesidade classe 2   " )
    } if(resultado > 40){
      setimc("Resultado é: "+resultado+"  Obesidade classe 3  " )
    }
  }
return (
     <View style={style.container}>

            <TextInput 
            placeholder="Qual o seu peso(kg)" 
            keyboardType="numeric" 
            onChangeText={(texto) => setpeso(Number(texto))}
            ></TextInput>
            <TextInput 
            placeholder="Qual sua altura (cm)"
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
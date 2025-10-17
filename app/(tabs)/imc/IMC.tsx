import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
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
           style={style.input}
           ></TextInput>
           <TextInput 
           placeholder="Qual sua altura (cm)"
            keyboardType="numeric" 
             onChangeText={(texto) => setaltura(Number(texto))}
             style={style.input}
            ></TextInput>

           <TouchableOpacity
           onPress={calculo}
           style={style.botao}
           ><Text style={{color: 'white', fontWeight: 'bold'}}>Calcular</Text></TouchableOpacity>
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
  input:{
    borderWidth: 0.5,
    borderRadius: 20,
    width: '70%',
    marginBottom: 10,
    textAlign: 'center',
  },
  botao:{
    backgroundColor: 'black',
    borderRadius: 20,
    width: '50%',
    height: 40,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})


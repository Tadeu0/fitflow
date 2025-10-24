import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Home() {

  return (
    <View style={{alignItems: 'center'}}>
   <View style={style.Topo}><Text style={{fontSize: 34, fontWeight: "bold",color:"black"}}>Inicio</Text>
   
   </View>
   <ScrollView style={style.scroll}>
    
    
    <Text style={{fontSize: 24, fontWeight: "bold",color:"black", marginBottom: -50, top: 5}}>Alimentações :</Text>
    
    <TouchableOpacity style={style.botao} onPress={() => router.push("/(tabs)/comidas/principal")}>
      <Image
   style={style.imagem}
   source={{
     uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9e25e2dba69e62b0e2563a6500e5fbad",
   }}/>
    </TouchableOpacity>
   
      
      <Text style={{fontSize: 24, fontWeight: "bold",color:"black", marginBottom: -50, top: 5}}>Excercísios físicos :</Text>
      <TouchableOpacity style={style.botao} onPress={() => router.push("/(tabs)/fisico/excercisios")}>
      <Image
       style={style.imagem}
       source={{
         uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f12bae018a9c703fd7d55745808c01c",
    }}/>
    </TouchableOpacity>
     
    
 

    
   </ScrollView>
</View>

  )
}

const style = StyleSheet.create({
Topo:{
  backgroundColor: 'white',
  height: 80,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 10,
  width: '100%',
},
scroll:{
  backgroundColor: '',
  width:'95%',
  height: '90%',
  padding: 5,
},
imagem:{
   width: '92%',
   minHeight: '90%',
   borderRadius: 10,
   elevation: 10,
 },
 botao:{
   width: '100%',
   minHeight: '40%',
   marginTop: '20%',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

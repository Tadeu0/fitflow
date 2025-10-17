import React from 'react';
import { Link } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
export default function Home() {

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
   <View style={style.Topo}><Text style={{fontSize: 34, fontWeight: "bold",color:"black"}}>Inicio</Text>
   
   </View>
   <ScrollView style={style.scroll}>
    
    
    <Text style={{fontSize: 24, fontWeight: "bold",color:"black", marginBottom: -50, top: 5}}>Alimentações :</Text>
    <Image
   style={style.imagem}
   source={{
     uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9e25e2dba69e62b0e2563a6500e5fbad",
   }}/>
      
      <Text style={{fontSize: 24, fontWeight: "bold",color:"black", marginBottom: -50, top: 5}}>Excercísios físicos :</Text>
      <Image
       style={style.imagem}
       source={{
         uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f12bae018a9c703fd7d55745808c01c",
    }}/>


    
   </ScrollView>
</SafeAreaView>

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
   width: '100%',
   minHeight: '30%',
   marginTop: '20%',
   borderRadius: 10,
   elevation: 10,
 },
});

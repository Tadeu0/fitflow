import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';
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
    <View style={style.container}>
    <View style={style.Topo}>
      <Text style={{fontSize: 24, fontWeight: "bold",color:"black"}}>Calculos de medição para saúde
    </Text>
    </View>
    <ScrollView style={style.scroll}>
      <View style={style.imc}>
      <Image
      source={{uri: ''}}
      />
      <Text style={{fontSize: 23, fontWeight: 'bold', marginLeft: '25%',}}>Calcule seu  IMC </Text>
      <TouchableOpacity>
        <Link href={"/(tabs)/imc/IMC"}style={{marginLeft: '90%', marginTop: -30}}><Feather name="arrow-right-circle" size={32} color="black"  /></Link>
      </TouchableOpacity>
      </View>
      <View style={style.iac}>
      <Image
      source={{uri: ''}}
      />
      <Text style={{fontSize: 23, fontWeight: 'bold', marginLeft: '25%',}}>Calcule seu  IAC </Text>
      <TouchableOpacity>
        <Link href={"/(tabs)/iac/homem"}style={{marginLeft: '90%', marginTop: -30}}><Feather name="arrow-right-circle" size={32} color="black"  /></Link>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
container:{
  backgroundColor: "",
  flex: 1,
  alignItems: "center",
},
titulo:{
  marginTop: "25%",
  fontSize: 20,
  fontWeight: "bold",
},
scroll:{
  backgroundColor: "trasnparent",
  width: "90%",
  marginTop: 40
},
Topo:{
  backgroundColor: 'white',
  height: 80,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 10,
  width: '100%',
},
imc:{
  backgroundColor: 'white',
  marginTop: 50,
  height: 75,
  justifyContent: 'center',
  borderRadius: 10,
  
},
iac:{
  backgroundColor: 'white',
  marginTop: 50,
  height: 75,
  justifyContent: 'center',
  borderRadius: 10,
  
},
});

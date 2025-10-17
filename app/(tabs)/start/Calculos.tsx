import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
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
      <View></View>
      <View></View>
      <View></View>
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
  backgroundColor: "blue",
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
});

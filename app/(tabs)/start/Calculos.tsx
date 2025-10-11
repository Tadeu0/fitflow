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
      <Text style={style.titulo}>Calculos de medição para saúde</Text>
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
});

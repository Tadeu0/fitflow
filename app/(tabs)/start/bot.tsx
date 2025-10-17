import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
export default function Bot() {

  return (
    <View style={style.container}>

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

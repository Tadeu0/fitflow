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
      <Text>em preve essa função estara pronta </Text>
    </View>
  );
}

const style = StyleSheet.create({
container:{
  backgroundColor: "",
  flex: 1,
  alignItems: "center",
  justifyContent: 'center',
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

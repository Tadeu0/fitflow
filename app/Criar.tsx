import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Home() {
  const [senha, setSenha] = useState(""); 
  const [olho, setOlho] = useState(true);

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.container}>
       
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  
});

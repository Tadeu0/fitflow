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

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
 <TouchableOpacity>
    <Link href={"/(tabs)/itens-calculo/IMC"} style={{width: "100%"}}><Text>Acessar</Text></Link>
 </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({

});

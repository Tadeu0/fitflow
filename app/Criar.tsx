import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
export default function Home() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <View style={style.container}>
          <TextInput placeholder="USUÁRIO" style={style.imput}></TextInput>
          <TextInput
            placeholder="Nome Completo"
            style={style.imput}
          ></TextInput>
          <TextInput placeholder="Senha" style={style.imput}></TextInput>
          <TextInput
            placeholder="Confimar sua senha"
            style={style.imput}
          ></TextInput>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
/* <ScrollView /*horizontal></ScrollView> */

const style = StyleSheet.create({
  container: {
    backgroundColor: "while",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imput: {
    borderWidth: 1,
    width: "80%",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

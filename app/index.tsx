import { Link } from "expo-router";
import React from "react";
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
    <KeyboardAvoidingView behavior="padding">
      <View style={x.container}>
        <View style={x.im}>
          <Image
            style={x.im}
            source={{
              uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c8e022812ace82fba41b34f53d895ad0",
            }}
          />
        </View>
        <Text style={x.login}>Faça login</Text>
        <View style={x.input}>
          <TextInput style={x.imput} placeholder="USUÁRIO"></TextInput>
          <TextInput style={x.imput} placeholder="SENHA"></TextInput>
          <View style={x.but}>
            <TouchableOpacity>
              <Text style={x.text}>ACESSAR</Text>
              <Link href={"./start/Home"}></Link>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Link href={"/Criar"} style={x.criar}>
                  Criar conta
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const x = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "65%",
    height: "50%",
    borderRadius: 10,
    elevation: 10,
  },
  im: {
    width: "70%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  imput: {
    borderWidth: 2,
    minWidth: "70%",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 15,
    top: -89,
    width: "80%", 
  },
  login: {
    fontSize: 35,
    fontWeight: "bold",
    top: -60,
  },
  but: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "65%",
    height: "10%",
    borderRadius: 50,
    top: -60,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    top: 20,
  },
  criar: {
    top: "350%",
    color: "blue",
  },
});

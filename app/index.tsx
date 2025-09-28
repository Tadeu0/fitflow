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
        <View style={style.im}>
          <Image
            style={style.im}
            source={{
              uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c8e022812ace82fba41b34f53d895ad0",
            }}
          />
        </View>
        <Text style={style.login}>Faça login</Text>
        <View style={style.input}>
          <TextInput style={style.imput} placeholder="USUÁRIO"></TextInput>
          <TextInput style={style.imput} placeholder="SENHA"  
           value={senha}
            onChangeText={setSenha}
            secureTextEntry={olho}>
              
            </TextInput>
          <View style={style.but}>
            <TouchableOpacity>
              <Text style={style.text}>ACESSAR</Text>
              <Link href={"/(tabs)/start/Home"}></Link>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Link href={"/Criar"} style={style.criar}>
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

const style = StyleSheet.create({
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
    icone:{ 
    width: 30,
    height: 30,
    left: "30%",
    marginBottom: -20
  },
});

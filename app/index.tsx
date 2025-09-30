import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
export default function Inicio() {
  const [senha, setSenha] = useState(""); 
  const [olho, setOlho] = useState(true);

  return (
     <View style={style.container}>
        <View style={style.estrimagem}>
          <Image
           style={style.image}
            source={{
              uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c8e022812ace82fba41b34f53d895ad0",
            }}
          />
         </View>
         <KeyboardAvoidingView behavior="padding" style={style.estru}>
            <ScrollView style={style.containerprincipal}>
            {/* Input */}
            <View style={style.input}>
            <TextInput style={style.inpu}  placeholder="Usuário" ></TextInput>
            <TextInput style={style.inpu}  placeholder="Senha" keyboardType="numeric" 
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={olho}
            ></TextInput>
            <TouchableOpacity onPress={() => setOlho(!olho)}>
            <FontAwesome
            name={olho ? "eye-slash" : "eye" }
            size={34}
            color="black"
            style={style.eye}
                   />
              </TouchableOpacity>
              {/* Botao */}
              <TouchableOpacity style={style.bot}>
              <Link href={"/(tabs)/start/Home"}>Acessar</Link>
              </TouchableOpacity>
            </View>
            </ScrollView>
         </KeyboardAvoidingView>
</View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC"
  },
  estrimagem:{
  width: "40%",
  height: "20%",
  borderRadius: 10,
  elevation: 14,
  marginTop: "20%",
  marginBottom: "-45%"
  },
  image:{
   width: "100%",
   height: "100%",
   borderRadius: 15,
  },
  estru:{
    backgroundColor: "white",
    width: "99%",
    height: "80%",
    marginTop: "55%",
    borderRadius: 30,
    
  },
  containerprincipal:{
    backgroundColor: "white",
    borderRadius: 30,
    
  },
  input:{
    width: "70%",
    height: "80%",
    backgroundColor: "tarsparent",
    marginLeft: "15%",
    marginTop: '50%',
    alignItems: "center",
    justifyContent: "center",
    
  },
  inpu:{
    borderWidth: 1,
    width: "100%",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 10
  },
  eye:{
    marginTop: -48,
    marginLeft: '85%'
  },
  bot:{
    width: "100%",
    height: "15%",
    backgroundColor: "green",
    marginTop: '15%',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
  //   width: "65%",
  //   height: "50%",
  //   borderRadius: 10,
  //   elevation: 10,
  // },
  // im: {
  //   width: "70%",
  //   height: "45%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

});



        // <Text style={style.login}>Faça login</Text>
        // <View style={style.input}>
        //   <TextInput style={style.imput} placeholder="USUÁRIO"></TextInput>
        //       <FontAwesome
        //       name={olho ? "eye-slash" : "eye" }
        //       size={34}
        //       color="black"
        //     />
        //   <TextInput style={style.imput} placeholder="SENHA"  
        //    value={senha}
        //     onChangeText={setSenha}
        //     secureTextEntry={olho}>
              
        //     </TextInput>

        //      <TouchableOpacity onPress={() => setOlho(!olho)} style={style.icon}>
        //     <FontAwesome
        //       name={olho ? "eye-slash" : "eye" }
        //       size={34}
        //       color="black"
        //     />
        //   </TouchableOpacity> */}
        //   <View style={style.but}>
        //     <TouchableOpacity>
        //       <Text style={style.text}>ACESSAR</Text>
        //       <Link href={"/(tabs)/start/Home"}></Link>
        //     </TouchableOpacity>
        //     <View>
        //       <TouchableOpacity>
        //         <Link href={"/Criar"} style={style.criar}>
        //           Criar conta
        //         </Link>
        //       </TouchableOpacity>
        //     </View>
        //   </View>
        // </View>
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
    <KeyboardAvoidingView behavior="padding" style={style.container}>
     
      
          <Image
           
            source={{
              uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c8e022812ace82fba41b34f53d895ad0",
            }}
          />

    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white" ,
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
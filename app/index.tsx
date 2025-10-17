import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Inicio() {
  const [senha, setSenha] = useState(""); 
  const [olho, setOlho] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [errousuario, seterrousuario] = useState('');
  const [errosenha, seterrosenha] = useState('');


  function validarUsuario(user: string) {
    setUsuario(user);
    
    //Campo vazio
    if(user === ""){
      seterrousuario("Campo obrigatorio")
      return
    }
    // Letra maiúscula
    const m = /[A-Z]/.test(user)
    if(!m){
      seterrousuario("é necessário que tenha pelo menos uma letra maiúscula")
      return
    }

    // Numero
    const n = /\d/.test(user)
    if(!n){
      seterrousuario("a semha deve ter pelo menos um numero")
      return
    }
    

    seterrousuario("")
  }
  
  function validarSenha(valsenha: string) {
    setSenha(valsenha)
    //Campo vazio
    if(valsenha === ""){
      seterrosenha("Campo obrigatorio")
      return
    }
// seis caracteres
    
     if ( valsenha.length < 6){
    seterrosenha(" a senha tem que ter pelo menos 6 caracters")
    return
  }

    seterrosenha("")
  }

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
          <View style={style.input}>
            
            {/* Usuário */}
            <TextInput
              style={style.inpu}
              placeholder="Usuário"
              value={usuario}
              onChangeText={validarUsuario}
            />
            <Text style={{ color: "red", top: -10 }}>{errousuario}</Text> 

            {/* Senha */}
            <TextInput
              style={style.inpu}
              placeholder="Senha"
              value={senha}
              onChangeText={validarSenha}
              secureTextEntry={olho}
              keyboardType='numeric'
            />
            <TouchableOpacity onPress={() => setOlho(!olho)}>
              <FontAwesome
                name={olho ? "eye-slash" : "eye"}
                size={34}
                color="black"
                style={style.eye}
              />
            </TouchableOpacity>
            <Text style={{ color: "red" }}>{errosenha}</Text>

            {/* Esqueci senha */}
            <TouchableOpacity>
              <Link href={"/Criar"} style={style.esq}>Esqueci a senha</Link>
            </TouchableOpacity>

            {/* Botão acessar */}
            <TouchableOpacity style={style.bot}>
              <Link href={"/(tabs)/start/Home"} style={style.link}>Acessar</Link>
            </TouchableOpacity>

            {/* Criar conta */}
            <View style={style.estruesq}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Não tem conta?</Text>
              <TouchableOpacity>
                <Link href={"/Criar"} style={{ fontWeight: "bold", fontSize: 18, color: "blue" }}>
                  Criar conta
                </Link>
              </TouchableOpacity>
            </View>
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
  estrimagem: {
    width: "40%",
    height: "20%",
    borderRadius: 10,
    elevation: 14,
    marginTop: "20%",
    marginBottom: "-45%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  estru: {
    backgroundColor: "white",
    width: "99%",
    height: "80%",
    marginTop: "55%",
    borderRadius: 30,
  },
  containerprincipal: {
    backgroundColor: "trasnparent",
    borderRadius: 30,
    flex: 1
  },
  input: {
    width: "70%",
    height: "80%",
    marginLeft: "15%",
    marginTop: '50%',
    alignItems: "center",
  },
  inpu: {
    borderWidth: 1,
    width: "100%",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 10
  },
  eye: {
    marginTop: -48,
    marginLeft: '85%'
  },
  bot: {
    width: "100%",
    height: "15%",
    backgroundColor: "green",
    marginTop: '15%',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 30,
  },
  esq: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: '50%',
  },
  estruesq: {
    height: 25,
    width: '96%',
    flexDirection: 'row',
    top: 50,
    justifyContent: "space-around"
  },
});

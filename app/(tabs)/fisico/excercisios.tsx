import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function excercios() {
  return (
    <View style={style.container}>
      <TextInput placeholder='Pesquise por excercios' style={style.input}></TextInput>

      <ScrollView style={style.scroll}>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      <TouchableOpacity style={style.estrutura}><Text>item1</Text></TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input:{
    borderWidth: 0.7,
    marginTop: 20,
    width: '80%',
    height: 40,
    textAlign: 'center',
    fontWeight: '300',
    borderRadius: 10,
  },
  scroll:{
    backgroundColor: 'trasnparent',
    width: '90%',
    marginTop: 20,
  },
  estrutura:{
    backgroundColor: '#d4d2d2ff',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 15,
  },
});
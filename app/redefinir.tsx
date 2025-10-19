import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esqueceu da sua senha?</Text>
      <Text style={styles.sob_titulo}>Então redefina sua senha abaixo:</Text>
      <TextInput keyboardType='email-address' placeholder='email'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: '36%', 
  },
  sob_titulo:{

  },
});
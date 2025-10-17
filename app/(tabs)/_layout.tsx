import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="start"options={{ headerTransparent:  true,headerShown: false}}/>
      <Stack.Screen name="imc/IMC"options={{title:"Calcule seu IMC", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="iac"options={{title:"Calcule seu IAC", headerTitleAlign: 'center'}}/>
    </Stack>
  )
}
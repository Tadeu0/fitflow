import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="start"options={{ headerTransparent:  true,headerShown: false}}/>
      <Stack.Screen name="imc/IMC"options={{title:"Calcule seu IMC", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="comidas/principal"options={{title:"Comidas", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="fisico/excercisios"options={{title:"Comidas", headerTitleAlign: 'center'}}/>
    </Stack>
  )
}
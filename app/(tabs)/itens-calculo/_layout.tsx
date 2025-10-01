import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="IMC"options={{ headerTransparent:  true,headerShown: false}}/>
      <Stack.Screen name="itens-calculo"options={{ headerTransparent:  true,headerShown: false}}/>
    </Stack>
  )
}
import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{title:"Login", headerTransparent: true, headerShown: false}}/>
      <Stack.Screen name="Criar" options={{title:"Criar uma conta", headerBackTitle: "center"}}/>
      <Stack.Screen name="(tabs)/start" options={{headerShown: false, headerTransparent: true}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false, headerTransparent: true}} />
    </Stack>
  )
}
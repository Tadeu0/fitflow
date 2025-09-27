import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="start"options={{ headerTransparent:  true,headerShown: false}}/>
    </Stack>
  )
}
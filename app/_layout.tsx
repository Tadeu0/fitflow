import { Stack } from "expo-router";

export default function Rotas(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{title:"Login", headerTransparent: true, headerShown: false}}/>
      <Stack.Screen name="Criar" options={{title:"Criar uma conta", headerTitleAlign: "center",
       headerTitleStyle:{
        fontSize: 25, 
        fontWeight: "bold"
        },}}/>
        <Stack.Screen name="redefinir" options={{title:"Redifiner Senha", headerTitleAlign: "center",
       headerTitleStyle:{
        fontSize: 25, 
        fontWeight: "bold"
        },
        }}/>
      <Stack.Screen name="(tabs)/start" options={{headerShown: false, headerTransparent: true}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false, headerTransparent: true}} />
    </Stack>
  )
}
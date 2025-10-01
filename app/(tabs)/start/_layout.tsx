import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function Rotas(){
  return(
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#000",
        
    }}
    
    >
      <Tabs.Screen name="Home" options={{title:"Login",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<Ionicons name="home-outline" size={24} color="blue" /> 
      }
      return <Ionicons name="home-outline" size={24} color={color} />
    }
 }}/>
 <Tabs.Screen name="Calculos" options={{title:"Calculos",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<Ionicons name="calculator-outline" size={24} color="blue" />
      }
      return <Ionicons name="calculator-outline" size={24} color="black" />
    }
 }}/>
 <Tabs.Screen name="itens" options={{ href : null
 }}/>

 
      
    </Tabs>
  )
}
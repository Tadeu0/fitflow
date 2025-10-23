import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function Rotas(){
  return(
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#333333ff",
          height: '10%',
        }
        
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
      return <Ionicons name="calculator-outline" size={24} color={color} />
    }
 }}/>

<Tabs.Screen name="bot" options={{title:"ChatBot",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<MaterialCommunityIcons name="robot" size={24} color="blue" /> 
      }
      return <MaterialCommunityIcons name="robot" size={24} color={color} />
    }
 }}/>
 
      
    </Tabs>
  )
}
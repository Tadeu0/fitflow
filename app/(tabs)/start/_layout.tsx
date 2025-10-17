import { Ionicons } from '@expo/vector-icons';
import { Background } from '@react-navigation/elements';
import { Tabs } from "expo-router";

export default function Rotas(){
  return(
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          bottom: 20,
          backgroundColor: "#bebebeff",
          height: 30,
          width: "90%",
          marginLeft: 15,
          borderRadius: 50,
          elevation: 10,
         
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

<Tabs.Screen name="bot" options={{title:"Bate papo",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<Ionicons name="home-outline" size={24} color="blue" /> 
      }
      return <Ionicons name="home-outline" size={24} color={color} />
    }
 }}/>
 
      
    </Tabs>
  )
}
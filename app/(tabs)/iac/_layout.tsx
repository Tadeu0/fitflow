import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function Rotas(){
  return(
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#ffffffff",
          height: 70,
          width: "100%",
         
        }
        
    }}
    
    >
      <Tabs.Screen name="homem" options={{title:"Homem",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<MaterialCommunityIcons name="face-man" size={24} color="blue" />
      }
      return <MaterialCommunityIcons name="face-man" size={24} color="black" />
    }
 }}/>

 <Tabs.Screen name="mulher" options={{title:"Mulher",
    headerShown: false, 
    tabBarIcon: ({focused, color, size}) => {
      if (focused) {
        return<MaterialCommunityIcons name="face-woman" size={24} color="blue" />
      }
      return <MaterialCommunityIcons name="face-woman" size={24} color="black" />
    }
 }}/>
 
 
    </Tabs>
  )
}
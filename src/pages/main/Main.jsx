import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feather from 'react-native-vector-icons/Feather';

import Principal from "../principal/Principal";
import Perfil from "../perfil/Perfil";

const tabBar = createBottomTabNavigator();

//----------------------------------------------------------
export default function Main()
{
   return (
      <tabBar.Navigator screenOptions={ fnScreenOptions }>
         <tabBar.Screen
            name="Home"
            component={ Principal }
         />

         <tabBar.Screen
            name="Perfil"
            component={ Perfil }
         />
      </tabBar.Navigator>
   )
}

//----------------------------------------------------------
function fnScreenOptions({ route }) 
{
   return ({
      tabBarIcon: ({ focused, color, size }) =>
      {
         let iconName = "home";
         if (route.name === "Perfil")
            iconName = 'user'

         return <Feather name={ iconName } size={ size } focused={ focused } color={ color } />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
   })
}
//----------------------------------------------------------
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from './pages/start/Start'
import Main from './pages/main/Main'

const Stack = createStackNavigator();

const Routes = () =>
{
   return (
      <NavigationContainer>
         <Stack.Navigator
            name="stack"
            initialRouteName="Start"
            screenOptions={ { headerShown: false } }
         >
            <Stack.Screen
               name="Start"
               component={ Start }
            />
            
            <Stack.Screen
               name="Main"
               component={ Main }
            />
         </Stack.Navigator>         
      </NavigationContainer>
   )
}

export default Routes;
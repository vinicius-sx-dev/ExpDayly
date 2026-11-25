import React from "react";
import { createStaticNavigation, NavigationContainer } from
  "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
import { useContext } from "react";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { useTheme } from "../../Contexts/Themes";

export default function Login({navigation}) {
  const { theme, isDark, toggleTheme } = useTheme();



  function handleLogin(){
    navigation.navigate('HomeScreen')
  }

  return <>
    <View style={theme.container}>

      <Text style={theme.title}>Que bom ter você de volta!</Text>

      <View>

        <View>

          <TextInput
            style={theme.input}
            placeholder="Email"
          />
          <TextInput
            style={theme.input}
            placeholder="Password"
          />

        </View>

        <View>

          <TouchableOpacity style={theme.button}
            onPress={() => {
              handleLogin()
            }}
          >
            <Text style={theme.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={theme.centerText} >Or</Text>

          <TouchableOpacity style={theme.button}>
            <Text style={theme.buttonText}
            onPress={() => {
              navigation.navigate('Register')
            }}
            >Register</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  </>

}
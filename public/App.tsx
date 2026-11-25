import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './src/Routes/screens';

import { ThemeProvider } from './src/Contexts/Themes';

export default function App() {


  return (
    <ThemeProvider>
      <RootStack/>
    </ThemeProvider>
  )
}
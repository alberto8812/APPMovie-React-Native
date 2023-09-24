import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigation } from './src/Navigator/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App;

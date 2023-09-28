import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigation } from './src/Navigator/Navigation';
import { FacdeScreen } from './src/screens/FacdeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FacdeScreen/> */}
    </NavigationContainer>
  )
}

export default App;

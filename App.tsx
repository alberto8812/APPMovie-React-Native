import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigation } from './src/Navigator/Navigation';
import { FacdeScreen } from './src/screens/FacdeScreen';
import {  GradientProvider } from './src/context/GradientContext';

const AppState=({children}:any)=>{
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}



export const App = () => {
  return (
    <NavigationContainer>
     <AppState>
      <Navigation />
      {/* <FacdeScreen/> */}
     </AppState>
    </NavigationContainer>
  )
}

export default App;

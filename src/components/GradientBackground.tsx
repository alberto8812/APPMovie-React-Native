import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props{
  children:JSX.Element | JSX.Element[];
}


export const GradientBackground = ({children}:Props) => {

  const {colors,prevColors,setPrevColor}=useContext(GradientContext);
  const {opacity,fadeIn}=useFade(0)

useEffect(() => {
 fadeIn(
    ()=>setPrevColor(colors)
 )
}, [colors])



  return (
    <View style={{flex:1}}>
      <LinearGradient 
       colors={[prevColors.primary, prevColors.secundary, 'white']}
       style={{...StyleSheet.absoluteFillObject}}
       start={{x:0.1,y:0.1}}
       end={{x:0.5,y:0.5}}
      />
      <Animated.View
       style={{...StyleSheet.absoluteFillObject,opacity}}
      >
        <LinearGradient 
        colors={[colors.primary,colors.secundary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1,y:0.1}}
        end={{x:0.5,y:0.5}}
        />
      </Animated.View>
       {children}
    </View>
  )
}
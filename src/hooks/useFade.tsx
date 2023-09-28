import React, { useRef } from 'react'
import { Animated } from 'react-native';


interface Props{
    Valueopacity:number,
}
export const useFade = (props:number) => {
    const opacity=useRef(new Animated.Value(props)).current;//creamos la opacidad que inicialmente esta encero
  
    /**
     * cuando el 
     */
    const fadeIn=()=>{
        Animated.timing(
            opacity,//valor a cambiar el valor
            {
                toValue:1,//valor a ambiar
                duration:300,//tiempo que tarde
                useNativeDriver:true//hace que se acelreado por hardware
            }
        ).start();//resive un colva para que dispare una accion 
    }

    const FadeOut=()=>{
        console.log('paso out')
        Animated.timing(
            opacity,//valor a cambiar el valor  
            {
                toValue:0,//valor a ambiar
                duration:300,
                useNativeDriver:true//hace que
            }
        ).start();
    }

  return {
    opacity,
    fadeIn,
    FadeOut,
  }
}

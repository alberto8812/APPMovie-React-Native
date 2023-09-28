import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FacdeScreen = () => {
    const {    
        opacity,
        fadeIn,
        FadeOut}=useFade(0)

    return (
    <View style={{flex:1,backgroundColor:'gray',justifyContent:  'center',alignItems:'center'}}>
       <Animated.View
       style={{
        backgroundColor:'#8f6A'
        , width:150
        ,height:150
        ,borderColor:'white'
        ,borderWidth:10,
        opacity:opacity
       }}
       />

       <Button onPress={fadeIn} title='FadeIn' />
       <Button onPress={FadeOut} title='FadeOut' />
    </View>
  )
}

import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interface/movieInterface'
import { useMovies } from '../hooks/useMovies'
import { MovieCard } from '../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

const {width:windowWidth}=Dimensions.get('window')

export const HomeScreen = () => {

 const {moviesInCinema,IsLoading} =useMovies();
const {top}=useSafeAreaInsets();
  
 if(IsLoading) {
  return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator color="blue" size={100}/>
  </View>)
 }   


  return (
    <View style={{marginTop:top+20}}>
     <View style={{height:440}}>
      <Carousel 
      data={moviesInCinema}
      renderItem={({item}:any)=><MovieCard Movie={item}/>}
      sliderWidth={windowWidth}
      itemWidth={300}
      />
     </View>
    </View>
  )
}

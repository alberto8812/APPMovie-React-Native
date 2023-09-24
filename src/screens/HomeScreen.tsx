import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interface/movieInterface'
import { useMovies } from '../hooks/useMovies'
import { MovieCard } from '../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


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
      <MovieCard Movie={moviesInCinema[0]}/>
    </View>
  )
}

import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import movieDB from '../api/movieDB'
import { useMovies } from '../hooks/useMovies'
import { GradientBackground, HorizontalSlider, MovieCard } from '../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

const {width:windowWidth}=Dimensions.get('window')

export const HomeScreen = () => {

 const {nowPlaying,IsLoading,popular,topRated,upComing} =useMovies();
const {top}=useSafeAreaInsets();
  
 if(IsLoading) {
  return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator color="blue" size={100}/>
  </View>)
 }   


  return (
    <GradientBackground>

    
    <ScrollView>
    <View style={{marginTop:top+20}}>
     <View style={{height:440}}>
      <Carousel 
      data={nowPlaying}
      renderItem={({item}:any)=><MovieCard Movie={item}/>}
      sliderWidth={windowWidth}
      itemWidth={300}
      inactiveSlideOpacity={0.9}
      />
     </View >

     <HorizontalSlider title={'Popular'} movies={popular}/>
     <HorizontalSlider title={'Top Rate'} movies={topRated}/>
     <HorizontalSlider title={'Upcoming'} movies={upComing}/>
    </View>
    </ScrollView>
    </GradientBackground>
  )
}

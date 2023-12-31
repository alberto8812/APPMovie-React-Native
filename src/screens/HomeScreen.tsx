import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import movieDB from '../api/movieDB'
import { useMovies } from '../hooks/useMovies'
import { GradientBackground, HorizontalSlider, MovieCard } from '../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import ImageColors, {getColors} from 'react-native-image-colors'
import { getImageColors } from '../helper/getColors'
import { GradientContext } from '../context/GradientContext'

const {width:windowWidth}=Dimensions.get('window')

export const HomeScreen = () => {

const {nowPlaying,IsLoading,popular,topRated,upComing} =useMovies();
const {top}=useSafeAreaInsets();
const {setMainColors} = useContext(GradientContext)

const getPosterColors=async(index:number)=>{

  const Movie=nowPlaying[index];
  const uri=`https://image.tmdb.org/t/p/w500${Movie.poster_path}`;

  const [primary='green',secondary='orange']=await getImageColors(uri)
  setMainColors({primary:primary,secundary:secondary})
}


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
      vertical={false}
      data={nowPlaying}
      renderItem={({item}:any)=><MovieCard Movie={item}/>}
      sliderWidth={windowWidth}
      itemWidth={300}
      inactiveSlideOpacity={0.9}
      onSnapToItem={index=>getPosterColors(index)}
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

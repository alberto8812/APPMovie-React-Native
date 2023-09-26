import React from 'react'
import { Text, View } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons';
import { MovieFull } from '../interface/movieInterface';
import { Cast } from '../interface/creditsInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native';

interface Props{
    movieFull:MovieFull,
    cast:Cast[],
}
export const MovieDetails = ({movieFull,cast}:Props) => {
  return (
    <>
       <View style={{marginHorizontal:20}}>
        <View style={{flexDirection:'row'}}>
        <Icon name='star-outline' color='grey' size={16}/>
        <Text >{movieFull.vote_average}</Text>
        <Text style={{marginLeft:5}}>
           - {
                movieFull.genres.map((genre)=>genre.name).join(',')
            }
        </Text>
        </View>
        <Text style={{fontSize:23,marginTop:10,fontWeight:'bold'}}>
            History
        </Text>
        <Text style={{fontSize:18,}}>{movieFull.overview}</Text>

        <Text style={{fontSize:23,marginTop:10,fontWeight:'bold'}}>
           Budget
        </Text >
        <Text style={{fontSize:18,}}>{currencyFormatter.format(movieFull.budget,{code:'USD'})}</Text>
       </View>

      <View style={{marginTop:10,marginBottom:20}}>
      <Text style={{fontSize:23,marginTop:10,fontWeight:'bold',marginHorizontal:20}}>
           Actor
      </Text >
      <FlatList
        data={cast}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={({item}) =><CastItem actor={item}/>}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        style={{marginTop:10,height:60}}
        
      />

      </View>
    </>
  )
}

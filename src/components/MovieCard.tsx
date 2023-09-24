import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface Props{
    Movie:Movie,
    width?:number,
    height?:number
}

export const MovieCard = ({Movie,width=300,height=400}:Props) => {

    const uri=`https://image.tmdb.org/t/p/w500${Movie.poster_path}`;
    const navigation=useNavigation();



  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('DetailScreen',Movie)}
    activeOpacity={0.8}
    style={{
        width,
        height,
        marginHorizontal:8
    }}

    >
        <View style={styles.imagesContainer}>
          <Image
            source={{uri}}
            style={styles.image}
          />
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image: {
       flex: 1,
       borderRadius: 18,

    },
    imagesContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
     	width: 0,
	   height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
    },
});
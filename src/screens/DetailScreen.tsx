import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, View,Dimensions, Text } from 'react-native'
import { RootStackParams } from '../Navigator/Navigation'
import { ScrollView } from 'react-native-gesture-handler';
import  Icon from 'react-native-vector-icons/Ionicons';


const {height:scrennHeight}=Dimensions.get('screen');
interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route}:Props) => {

  const Movie=route.params;

  const uri=`https://image.tmdb.org/t/p/w500${Movie.poster_path}`;


  return (

    <ScrollView>
    <View style={styles.imageContainer}>
       <View style={styles.imageBorder}>
       <Image
        source={{uri}}
        style={
          styles.posterImage
        }
       />
       </View>
    </View>

    <View style={styles.marginContaner}>
      <Text style={styles.subtitle}>
        {Movie.original_title}
      </Text>

      <Text style={styles.title}>
        {Movie.title}
      </Text>
      
    </View>
    <View style={styles.marginContaner}>
      <Icon
        name='star-outline'
        color='grey'
        size={20}
      />
    </View>

    </ScrollView>
  )
}
const styles=StyleSheet.create({
  posterImage:{
    flex: 1,
  },
  imageContainer:{
     width:'100%',
     height:scrennHeight * 0.7,
     shadowColor:'#0000',
     paddingBottom:15,
     shadowOffset:{
       width:0,
       height:10,
      },
      shadowOpacity:0.3,
      shadowRadius:7,
      elevation:9,
      borderBottomEndRadius:45,
      borderBottomStartRadius:45,
    },
    imageBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius:45,
    borderBottomStartRadius:45,
  }
  ,
  marginContaner:{
    marginTop:20,
    marginHorizontal:20,
  },
  subtitle:{
    fontSize:16,
    opacity:0.8,
  },
  title:{ 
    fontSize:20,
    fontWeight:'bold',

  },

})

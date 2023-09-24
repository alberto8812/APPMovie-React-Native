import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens/Index';
import { Movie } from '../interface/movieInterface';

export type RootStackParams={
  HomeScreen:undefined,
  DetailScreen:Movie

}

const Stack = createStackNavigator<RootStackParams>();

export const  Navigation=()=> {
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'
    screenOptions={{
        headerMode:'screen',
        headerShown: false,
        cardStyle:{
            backgroundColor: 'white'
        }
    }}


    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
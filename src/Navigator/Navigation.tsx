import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens/Index';

const Stack = createStackNavigator();

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
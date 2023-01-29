import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {GetStarted, Splash} from './../pages';

const Stack = createStackNavigator();
function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown : false}} />
        <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default Router
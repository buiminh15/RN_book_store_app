import {createStackNavigator} from '@react-navigation/stack';
import {BookDetail, HomeScreen} from '../components';
import * as React from 'react';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeScreen" component={BottomTab} />
      <Stack.Screen name="DetailBook" component={BookDetail} />
    </Stack.Navigator>
  );
}

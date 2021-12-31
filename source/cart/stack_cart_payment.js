import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { useEffect } from 'react';
import ListProduct_New from './products';
import Payment from '../payment/payment';
import BillUp from '../payment/bill';

import Login from '../login/login';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function StackCartScreen() 
{

  // const navigation = useNavigation(); 
  const route = useRoute()
  // console.log("Thông tin từ Stack")
  // console.log(route)
  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])
  console.log('Hello'+route.params.name)
  return (
    // <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen
        name='Cart'
        component={ListProduct_New} initialParams={{username: route.params.username}}/>
      <Stack.Screen
        name='Payment'
        component={Payment}/>
      <Stack.Screen
        name='BillUp'
        component={BillUp}/>
      </Stack.Navigator>
    // </NavigationContainer>
  );


}
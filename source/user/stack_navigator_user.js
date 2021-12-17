import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { useEffect } from 'react';
import UserScreen from './user';
import user_detail from './user_detail';
import PackingDetail from './packing_detail';
import ShippingDetail from './shipping_detail';
import ConfirmDetail from './confirm_detail';
import HistoryLookup from './history_lookup';
import VoucherDetail from './voucher_detail';
import Login from '../login/login';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function StackUserScreen() {

  // const navigation = useNavigation(); 
  const route = useRoute()
  // console.log("Thông tin từ Stack")
  // console.log(route)
  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen
        name='UserScreen'
        component={UserScreen} initialParams={{username: route.params.username}}/>
      <Stack.Screen
        name='UserDetail'
        component={user_detail}/>
      <Stack.Screen 
      name='PackingDetail' 
      component={PackingDetail}/>
      <Stack.Screen
        name='ShippingDetail'
        component={ShippingDetail}/>
      <Stack.Screen 
        name='ConfirmDetail'
        component={ConfirmDetail}/>
      <Stack.Screen 
        name='HistoryLookup'
        component={HistoryLookup}/>
      <Stack.Screen 
        name='VoucherDetail'
        component={VoucherDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}
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
import Detail_History_Lookup from './detail_history_lookup';
import List_History_Lookup from './list_history_lookup';
import BookHistory from './book_history';
import VoucherDetail from './voucher_detail';
import ChangePass from './change_pass';
import NumberFormat from 'react-number-format';

import { useNavigation, useRoute} from '@react-navigation/native';

const Stack = createStackNavigator();
export default function StackUserScreen() {

  const navigation = useNavigation(); 
  const route = useRoute()
  // console.log("Thông tin từ Stack")
  // console.log(route)
  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])

  return (
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen
        name='UserScreen'
        component={UserScreen} initialParams={{username: route.params.username}}/>
      <Stack.Screen
        name='UserDetail'
        component={user_detail} />
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
        name='List_HistoryLookup'
        component={List_History_Lookup}/>
      <Stack.Screen 
        name='Detail_HistoryLookup'
        component={Detail_History_Lookup}/>
      <Stack.Screen 
        name='VoucherDetail'
        component={VoucherDetail} initialParams={{username: route.params.username}}/>
       <Stack.Screen 
        name='ChangePassWord' initialParams={{username: route.params.username}}
        component={ChangePass}/>
       <Stack.Screen 
        name='BookHistory'
        component={BookHistory} initialParams={{username: route.params.username}}/>
      </Stack.Navigator>
  );


}
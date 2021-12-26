import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Vanhoc from './Vanhoc';
import Haihuoc from './Haihuoc';
import Trinhtham from './Trinhtham';
import Tuoiteen from './Tuoiteen';
import Ngontinh from './Ngontinh';
import KinhDi from './Kinhdi';
import PhongSu from './Phongsu';
import book_detail_home from '../book_detail/book_detail';
import TabRanks from './tabs_rank';

const Stack = createStackNavigator();
 export default function StackCatregory(){

    const route = useRoute();

     
  // const navigation = useNavigation(); 
  console.log("Thông tin từ Stack", route.params.username)
  // console.log(route)
  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen
      name='Tab_Screen'
      component={TabRanks}/>
      <Stack.Screen
        name='Vanhoc'
        component={Vanhoc} initialParams={{username: route.params.username}}/>
      <Stack.Screen
        name='Trinhtham'
        component={Trinhtham} initialParams={{username: route.params.username}}/>
      <Stack.Screen 
      name='Tuoiteen' 
      component={Tuoiteen} initialParams={{username: route.params.username}}/>
      <Stack.Screen 
        name='Haihuoc' 
        component={Tuoiteen} initialParams={{username: route.params.username}}/>
      <Stack.Screen
        name='Ngontinh'
        component={Ngontinh} initialParams={{username: route.params.username}}/>
      <Stack.Screen 
        name='Phongsu'
        component={PhongSu} initialParams={{username: route.params.username}}/>
      <Stack.Screen 
        name='Kinhdi'
        component={KinhDi} initialParams={{username: route.params.username}}/>
    <Stack.Screen 
        name='BookDetail'
        component={book_detail_home} initialParams={{username: route.params.username}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
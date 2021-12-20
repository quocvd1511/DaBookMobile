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

const Stack = createStackNavigator();
 export default function StackCatregory(){

    const route = useRoute();
     
  // const navigation = useNavigation(); 
  // console.log("Thông tin từ Stack")
  // console.log(route)
  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen
        name='Vanhoc'
        component={Vanhoc}/>
      <Stack.Screen
        name='Trinhtham'
        component={Trinhtham}/>
      <Stack.Screen 
      name='Tuoiteen' 
      component={Tuoiteen}/>
      <Stack.Screen 
        name='Haihuoc' 
        component={Tuoiteen}/>
      <Stack.Screen
        name='Ngontinh'
        component={Ngontinh}/>
      <Stack.Screen 
        name='Phongsu'
        component={PhongSu}/>
      <Stack.Screen 
        name='Kinhdi'
        component={KinhDi}/>
    <Stack.Screen 
        name='BookDetail'
        component={book_detail_home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
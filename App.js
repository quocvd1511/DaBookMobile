import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import TabScreen from './source/tab_src/tab';
import { useEffect } from 'react';
import Home from './source/home/home';
import book_detail from './source/book_detail/book_detail';
import SearchBook from './source/search_book/search_book';
import Voucher from './source/voucher/voucher';

const Stack = createStackNavigator();
export default function App() {

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
      name='TabScreen' 
      component={TabScreen}/>
      <Stack.Screen
        name='Home'
        component={Home}
        />
        <Stack.Screen 
        name='book_detail'
        component={book_detail}/>
      <Stack.Screen 
        name='SearchBook'
        component={SearchBook}/>
      </Stack.Navigator>
      <Stack.Screen 
        name='Voucher'
        component={Voucher}/>
    </NavigationContainer>
  );


}
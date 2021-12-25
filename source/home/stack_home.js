import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import book_detail_home from '../book_detail/book_detail';
import SearchBar from './searchbar';
import SearchBook from '../search_book/search_book';
import ListTop from './list_top';
import Slider from './slider';
import HomeScreen from './home';
import VoucherScreen from '../voucher/voucher';

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
          name='HomeScreen'
          component={HomeScreen} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='BookDetail'
          component={book_detail_home} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='SearchBar'
          component={SearchBar} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='ListTop'
          component={ListTop} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='SearchBook'
          component={SearchBook} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='Slider'
          component={Slider} initialParams={{username: route.params.username}}/>
          <Stack.Screen
          name='Voucher'
          component={VoucherScreen} initialParams={{username: route.params.username}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}
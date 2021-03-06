import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import TabScreen from './source/tab_src/tab';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Home from './source/home/home';
import Rank from './source/rank/tabs_rank';
import BookDetailHomeScreen from './source/book_detail/BookDetail_Home';
import SearchBook from './source/search_book/search_book';
import Voucher from './source/voucher/voucher';
import Login from './source/login/login';
import Logup from './source/login/logup';
import Payment from './source/payment/payment'
import Cart from './source/cart/cart';
import StackUserScreen from './source/user/stack_navigator_user';

// import ListRank from './source/rank/list_rank';

const Stack = createStackNavigator();
export default function App() {

  // const navigation = useNavigation();


  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection'])
    LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop'])
    LogBox.ignoreLogs(['Failed prop type'])
    LogBox.ignoreLogs(['Encountered two children with the same key'])
    LogBox.ignoreLogs(['Require cycle'])
  }, [])

  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name='Login'
        component={Login}/>
      <Stack.Screen
        name='Logup'
        component={Logup}/>
      <Stack.Screen 
        name='TabScreen' 
        component={TabScreen}/>
      <Stack.Screen
      name='User'
      component={StackUserScreen}/>
      <Stack.Screen
        name='Home'
        component={Home}/>
      <Stack.Screen 
        name='Rank'
        component={Rank}/>
      <Stack.Screen 
        name='BookDetailHomeScreen'
        component={BookDetailHomeScreen}/>
      <Stack.Screen 
        name='SearchBook'
        component={SearchBook}/>
      <Stack.Screen 
        name='Voucher'
        component={Voucher}/>
      <Stack.Screen 
        name='Cart' 
        component={Cart}/>
       <Stack.Screen 
        name='Payment' 
        component={Payment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from '../home/stack_home';
// import SearchScreen fr
import CategoryScreen from '../rank/tabs_rank';
import VoucherScreen from '../voucher/voucher';
import UserScreen from '../user/user';
import CartScreen from '../cart/cart';
import StackUserScreen from '../user/stack_navigator_user'
import StackCartScreen from '../cart/stack_cart_payment';
import { useNavigation, useRoute } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();
//
//fa-solid:shopping-cart
  
export default function TabScreen() {

  const route = useRoute();
  const user_session = route.params.username;
  console.log(user_session);

    return (
        <Tab.Navigator
         screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color})=>
          {
            let iconName;
            switch(route.name)
            {
              case "Home":
                iconName=focused ? 'ios-home':'ios-home-outline'
                size = focused ? 25 : 24
                return(
                  <Ionicons
                    name={iconName}
                    size={size}
                  />
              )
                break;
              case "Category":
                iconName= focused ? 'ios-grid':'ios-grid-outline'
                size = focused ? 25 : 24
                  return(
                    <Ionicons
                      name={iconName}
                      size={size}
                    />
              )
                break;
              case "Voucher":
                iconName=focused ? 'ticket-percent':'ticket-percent-outline'
                size = focused ? 25 : 27
                return(
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                  />
                )
                break;

                case "Cart":
                  iconName= focused ? 'cart':'cart-outline'
                  size = focused ? 25 : 24
                  return(
                    <Ionicons
                    name={iconName}
                    size={size}
                    />
                  )
                  break;

              case "User":
                iconName= focused ? 'ios-person':'ios-person-outline'
                size = focused ? 25 : 24
                return(
                  <Ionicons
                  name={iconName}
                  size={size}
                  />
                )
                break;

            }
          },

          tabBarStyle:
          {
            backgroundColor: 'dodgerblue',
            paddingTop: 5,
            
          },
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })
      }
        >
          <Tab.Screen name="Home" component={HomeScreen} initialParams={{username: user_session}} />
          <Tab.Screen name="Category" component={CategoryScreen} initialParams={{username: user_session}}/>
          <Tab.Screen name="Voucher" component={VoucherScreen} initialParams={{username: user_session}}/>
          <Tab.Screen name="Cart" component={StackCartScreen} initialParams={{username: user_session}}/>
          <Tab.Screen name="User" component={StackUserScreen} initialParams={{username: user_session}}/>
        </Tab.Navigator>
    );
  }
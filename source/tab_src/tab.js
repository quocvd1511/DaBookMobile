import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from '../home/home';
import RankScreen from '../rank/rank';
import VoucherScreen from '../voucher/voucher';
import UserScreen from '../user/user';

const Tab = createMaterialBottomTabNavigator();
  
  
export default function TabScreen() {
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
              case "Rank":
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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Rank" component={RankScreen} />
          <Tab.Screen name="Voucher" component={VoucherScreen} />
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
  }
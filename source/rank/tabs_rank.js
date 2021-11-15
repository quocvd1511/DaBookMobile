import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListRank from './list_rank';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TabRanks() {
  return (

    <Tab.Navigator
    screenOptions={
    {
      tabBarScrollEnabled: true,
      tabBarStyle: {backgroundColor: 'dodgerblue', height: 35, justifyContent: 'center',}
    }}
    >
      <Tab.Screen name="Tất cả" component={ListRank} />
      <Tab.Screen name="Trinh Thám" component={HomeScreen} />
      <Tab.Screen name="Thần Bí" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
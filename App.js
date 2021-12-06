import * as React from 'react';
import { Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './source/tab_src/tab';
import { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Reanimated 2']);
  }, [])

  return (
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}
import * as React from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../home/searchbar';
import { NavigationContainer } from '@react-navigation/native';
import TabRanks from './tabs_rank';

export default function RankScreen() {
    return (
    <NavigationContainer independent={true}>
      <TabRanks/>
    </NavigationContainer>
    );
  }
  
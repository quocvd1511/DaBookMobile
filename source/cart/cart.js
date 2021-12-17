import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import HeaderCart from './header_cart';
import ListProduct from './products copy';
import Info_User from './own_info';

export default function UserScreen() {
    return (
      <ScrollView>
        <HeaderCart/>
        <Info_User/>
        <ListProduct/>
      </ScrollView>
    );
  }
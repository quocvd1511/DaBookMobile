import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import HeaderCart from './header_pm';
import ListProduct from './list_product';
import Info_User from './info_ad';

export default function UserScreen() {
    return (
      <ScrollView>
        <HeaderCart/>
        <Info_User/>
        {/* <Select/> */}
        <ListProduct/>
      </ScrollView>
    );
  }
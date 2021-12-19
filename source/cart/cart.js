import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ListProduct_New from './products';

export default function UserScreen() {
    return (
      // <ScrollView>
      <View style={{flex: 1}}>
          <ListProduct_New/>
      </View>
      // </ScrollView>
    );
  }
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, LogBox } from 'react-native'
import BookDetail from './book_detail';



export default function BookDetailHomeScreen() {
    return (
      <View style={{flex:1}}>
        {/* <ScrollView> */}
              <BookDetail/>
        {/* </ScrollView> */}
      </View>
    );
  }
  
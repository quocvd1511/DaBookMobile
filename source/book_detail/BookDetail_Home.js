import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, LogBox } from 'react-native'
import BookDetail from './book_detail';
import Rating from './ratings';



export default function BookDetailHomeScreen() {
    return (
      <View style={{flex:1}}>
              <BookDetail/>
              <Rating/>
      </View>
    );
  }
  
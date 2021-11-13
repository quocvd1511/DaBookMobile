import React,{useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View, LogBox } from 'react-native'
import SearchBar from './searchbar'
import TabType from './typetab';
import ListBook from './list_book';
import ListTop from './list_top';
import Slider from './slider';
import HeaderHome from './header_home';
import ListTopSale from './list_top_sale';
import ListHint from './list_hint';


export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
        <HeaderHome/>
        <ScrollView>
            <ListTop/>
            <Slider/>
            <ListTopSale/>
            <ListHint/>
            <ListBook/>
        </ScrollView>
    </View>
  );
}
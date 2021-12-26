import React, {useState}  from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';


export default  function BookHistory(){

return (
    <View style={{flex:1, backgroundColor:'#FFF'}}>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={{backgroundColor:'#1A94FF', marginBottom: 10}}>
            <Text style={{fontSize: 20, alignSelf: 'center', margin: 10, color: '#fff', fontWeight: '500'}}>SÁCH ĐÃ XEM</Text>
        </View>

        <View>
            <View style={styles.item} >
                <Image style={styles.img} source={{uri:'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_29292017_042903.jpg'}}/>
                <View>
                    <Text style={styles.name} 
                    numberOfLines={2}
                    ellipsizeMode='tail'>Tên sách: Harry Potter và Hội Phượng Hoàng </Text>
                    <Text style={styles.info} >Giá bán: 197.000 đ</Text>
                    <Text style={styles.info} >Ngày xem: 25/12/2021</Text>
                </View>
            </View>
        </View>
        
    </ScrollView>
    </View>
);
}


const styles = StyleSheet.create({
  container: {
    
  },

  item: {
    display:'flex',
    flexDirection: 'row',
    borderColor: '#ff6600',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 5,
  },

  img:{
    marginTop: 0,
    resizeMode: "contain",
    height: 100,
    width: 100,
  },

  name: {
    fontWeight: '500', 
    fontSize: 14, 
    width: 250,
    color: 'black',
    lineHeight: 20,
    minHeight: 40,
    margin: 10,
    marginBottom: 0,
  },

  info: {
    fontWeight: '400', 
    fontSize: 14, 
    color: 'black',
    lineHeight: 20,
    minHeight: 14,
    marginLeft: 10,
    marginBottom: 0,
  }

})


import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, FlatList, StyleSheet, Pressable, Text, TextInput, StatusBar, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
const fontWeights = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ];

export default function SearchBook(){

  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params.name;
  const username = route.params.username;
  console.log(name);
  
    const [Book,setBook] = React.useState([])
    React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192,168.1.8:3000/search/' + name)
      setBook(request.data.books)
      return request.data.books
    }
    fetchData();

    },['http://192,168.1.8:3000/search/name'])

	 console.log(Book);

   function BookViewed(index){
    console.log(username + ' SÁCH ĐÃ XEM ' + Book[index].tensach)
    const request = axios.get('http://192,168.1.8:3000/sachdaxem?username=' + username + '&tensach=' + Book[index].tensach + '&hinhanh=' + Book[index].hinhanh + '&giaban=' + Book[index].giaban);
   console.log(request.data);
   navigation.navigate('BookDetailHomeScreen', {tensach: Book[index].tensach, username: username})
  }
    
    return(
        <ScrollView style = {styles.views}>
            {/* Sản phẩm chi tiết */}
            <View style={{backgroundColor:'#f3f3f3'}}>
      <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 30}}>Kết quả tìm kiếm</Text>
      <ScrollView contentContainerStyle={styles.container}>
          {
          Book.map((item, index)=>
          {
            return(
              <TouchableOpacity style={styles.item} onPress={() => BookViewed(index)}>
                <Image style={styles.image} source={{uri:item.hinhanh}}/>
                <View  style={{paddingLeft:5 }}>
                  <Text style={styles.book_name}
                        numberOfLines={2}
                        ellipsizeMode='tail'>{item.tensach}</Text>
                  <View style={{margin:10, marginTop:6, flexDirection:'row', alignItems:'center'}}>
                    <Image style={{height:22,width:22,tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
                    <Text style={styles.book_price}> {item.giaban} đ</Text>
                    <View style={styles.sale_off}>
                      <Text style={styles.sale_off_percent}> -15%</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })
          }
      </ScrollView>
    </View>
    </ScrollView>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
    container: {
      flex: 1,
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  
    item: {
      position: 'relative',
      width: (windowWidth - 14) /2,
      paddingTop: 10,
      marginTop: 5,
      backgroundColor: 'white',
      margin: 3,
      borderRadius: 3,
      alignItems: 'center',
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      
      elevation: 4,
  
    },
  
    image: {
      marginTop: 0,
      resizeMode: "contain",
      height: (windowWidth - 18) /2,
      width: (windowWidth - 18) /2,
    },
  
    sale_off :{
      width: 38,
      height: 25,
      backgroundColor: '#fff0f1',
      marginLeft: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#EE4D2D',
      borderRadius: 3,
    },
    
    sale_off_percent :{
      color: '#EE4D2D',
      marginTop: 3,
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 17,
      textAlign:'center',
      alignItems: 'center',
    },
  
    book_name: {
      fontWeight: '500', 
      fontSize: 14, 
      color: 'black',
      lineHeight: 20,
      margin: 10,
      marginBottom: 0,
    },
  
    book_price :{
      color: 'red', 
      fontSize: 15
    },

})


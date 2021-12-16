import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView,LogBox, TouchableOpacity } from 'react-native';
//import glamorous, {ThemeProvider} from 'glamorous'
//import {Div, H2} from 'glamorous'
//import {MapTag, ColorProfile} from 'glamorous'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import book_detail_home from '../book_detail/book_detail';
const windowWidth = Dimensions.get('window').width;



function ListBook()
{
  // const [Book, setBook] = useState([
  //     {key: '1', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  //     {key: '2', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  //     {key: '3', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  //     {key: '4', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"}
  // ])

  //---------Kết nối Database lấy dữ liệu-------------------------    
  const [Book,setBook] = React.useState([])
  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.43.180:3000/')
      setBook(request.data)
      return request.data
    }
    fetchData();

  },['http://192.168.43.180:3000/'])
  //---------------------------------------------------------------
   console.log(Book)

   const navigation = useNavigation(); 
   return (
    <View style={{backgroundColor:'#f3f3f3'}}>
      <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 30}}>Tất cả các sách</Text>
      <ScrollView contentContainerStyle={styles.container}>
          {
          Book.map((item)=>
          {
            return(
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('book_detail', {tensach: item.tensach})}>
                <Image style={styles.image} source={{uri:item.hinhanh}}/>
                <View  style={{paddingLeft:5 }}>
                  <Text style={styles.book_name}
                        numberOfLines={2}
                        ellipsizeMode='tail'>{item.tensach}</Text>
                  <View style={{margin:10, marginTop:6, flexDirection:'row', alignItems:'center'}}>
                    <Image style={{height:22,width:22,tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
                    <Text style={styles.book_price}> {item.giaban}000 đ</Text>
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
    );
  }


const styles = StyleSheet.create({
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

  title: {
    fontSize: 32,
  },
});

export default ListBook;
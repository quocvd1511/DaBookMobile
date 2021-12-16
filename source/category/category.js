import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView,LogBox } from 'react-native';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;

export default function category(){
  const [Book, setBook] = useState([
  {key: '1', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://www.nxbtre.com.vn/Images/Book/nxbtre_full_11592017_085924.jpg", tacgia:"J.K Rowling"},
  {key: '2', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://www.nxbtre.com.vn/Images/Book/nxbtre_full_29292017_042903.jpg", tacgia:"J.K Rowling"},
  {key: '3', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://upload.wikimedia.org/wikipedia/vi/8/88/Harry_Potter_v%C3%A0_Chi%E1%BA%BFc_c%E1%BB%91c_l%E1%BB%ADa_b%C3%ACa.jpg", tacgia:"J.K Rowling"},
  {key: '4', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://img1.baza.vn/upload/files/products-LfghXHkV/OXNUruR2.jpg?v=635622828862747259", tacgia:"J.K Rowling"},
  {key: '5', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  {key: '6', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://images-na.ssl-images-amazon.com/images/I/51Yum2GxqkL._SX320_BO1,204,203,200_.jpg", tacgia:"J.K Rowling"},
  {key: '7', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa Harry Potter và Đứa trẻ bị nguyền rủa ", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  {key: '8', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"}
])

return (
<View style={{flex:1, backgroundColor:'#FFCC66'}}>
  <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:24, paddingTop: 10, paddingBottom:10, backgroundColor: '#1A94FF', textAlign: 'center', marginBottom: 5}}>Thể loại</Text>
  <ScrollView contentContainerStyle={styles.container}>
      {
      Book.map((item)=>
      {
        return(
          <View style={styles.item} key={item.key}>
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
          </View>
        )
      })
      }
  </ScrollView>
</View>
);
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
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

})


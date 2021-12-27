import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountDown from 'react-native-countdown-component';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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

function ListTop() 
{
  
  const navigation = useNavigation(); 
  const [Book,setBook] = React.useState([])
  
  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.43.180:3000/')
      setBook(request.data.flash_sales)
      return request.data.flash_sales
    }
    fetchData();

  },['http://192.168.1.6:3000/'])
  return (
      <View style={styles.container}>
        <View style = {styles.flash_sale}>
          {/* <Image style = {styles.flash} source={require('../asset/icon/flash.png')}/>   */}
          <Text style={{paddingLeft: 5, color:'red', fontWeight:'600',fontSize:20,}}>FLASH SALE </Text>
          <CountDown
            size={14}
            until={86400}
            onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: 'red'}}
            digitTxtStyle={{color: '#fff'}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#000'}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View>

      <ScrollView horizontal={true}>
        { 
          Book.map((item) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('book_detail', {tensach: item.tensach})}>
                <View style={styles.item}>
                  <Image style={styles.img} source={{uri:item.hinhanh}}/>
                  <Text 
                  style={styles.name_item}
                  numberOfLines={2}
                  ellipsizeMode='tail'>{item.tensach}</Text>
                  <NumberFormat value={item.giaban} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                renderText={(value) => <Text style={styles.newprice}> {value}</Text>}/>
                  <NumberFormat value={item.giagoc} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                renderText={(value) => <Text style={styles.price}> {value}</Text>}/>
                  {/* <Text style={styles.newprice}>{item.giaban} đ</Text>
                  <Text style = {styles.price}>  {item.giagoc} </Text> */}
                  <View style={styles.sale_off}>
                      <Text style={styles.sale_off_percent}> -{item.giamgia}%</Text>
                    </View>
                </View>
              </TouchableOpacity>
            )
          })
          
        }
      </ScrollView>
      <View style = {styles.feature}>
        <Image style = {styles.icon} source={require('../asset/icon/ico_flashsale.png')}/>
        <Image style = {styles.icon} source={require('../asset/icon/icon_12_12.png')}/>
        <Image style = {styles.icon} source={require('../asset/icon/magiamgia.png')}/>
        <Image style = {styles.icon} source={require('../asset/icon/iconfree.png')}/>
        <Image style = {styles.icon} source={require('../asset/icon/ico-xuhuong.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },

  item: {
    marginTop: 5,
    backgroundColor: '#fff',
    padding: 5,
    marginLeft: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
  },

  img: {
    resizeMode: "contain",
    width: 106,
    height: 106,
    paddingtop: 0,
    bordertopleftradius: 2,
    bordertoprightradius: 2,
  },

  feature :{
    alignItems: 'center',
    display: 'flex',
    flexDirection: flexDirections[0],
    backgroundColor: '#E0FFFF',
    marginBottom: 5,
  },

  flash_sale: {
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    padding: 10,
    flexDirection: flexDirections[0],
    backgroundColor: '#fff',
  },

  flash: {
    width: 80,
    height: 80,
  },

  icon:{
    margin: 11,
    width: 50,
    height: 50,
  },

  newprice: {
    color: 'red',
    // marginLeft: 4,
    // marginRight: 30,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    color: '#666',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 10,
    fontWeight: fontWeights[6],
    textDecorationLine: 'line-through',
},

  name_item:{
    padding: 5,
    width: 104,
    //lineHeight: 15,
    height: 40,
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
    color: '#333',
    fontSize: 13,
  },

  title: {
    fontSize: 32,
  },
  sale_off :{
    width: 50 ,
    height: 25,
    backgroundColor: '#FFE652',
    fontWeight: 600,
    // marginLeft: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EE4D2D',
    borderRadius: 3,
  },
  
  sale_off_percent :{
    color: '#EE4D2D',
    marginTop: 3,
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 17,
    textAlign:'center',
    alignItems: 'center',
  },
});

export default ListTop;
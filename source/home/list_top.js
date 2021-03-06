import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountDown from 'react-native-countdown-component';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const route = useRoute();
  const username = route.params.username;
  const [Book,setBook] = React.useState([])
  
  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.1.8:3000/')
      setBook(request.data.flash_sales)
      return request.data.flash_sales
    }
    fetchData();

  },['http://192,168.1.8:3000/'])

  function BookViewed(index){
    console.log(username + ' SÁCH ĐÃ XEM ' + Book[index].tensach)
    const request = axios.get('http://192.168.1.8:3000/sachdaxem?username=' + username + '&tensach=' + Book[index].tensach + '&hinhanh=' + Book[index].hinhanh + '&giaban=' + Book[index].giaban);
   console.log(request.data);
   navigation.navigate('BookDetailHomeScreen', {tensach: Book[index].tensach, username: username})
  }

  return (
      <View style={styles.container}>
        <View style = {styles.flash_sale}>
          {/* <Image style = {styles.flash} source={require('../asset/icon/flash.png')}/>   */}
          <Text style={{paddingLeft: 5, color:'#FF6600', fontWeight:'600',fontSize:18,}}>FLASH SALE </Text>
          <CountDown
            size={12}
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
          Book.map((item, index) => {
            return(
              <TouchableOpacity onPress={() => BookViewed(index)}>
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
    marginBottom: 0,
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
    marginBottom: 0,
  },

  flash_sale: {
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    padding: 5,
    flexDirection: flexDirections[0],
    backgroundColor: '#fff',
  },

  flash: {
    width: 80,
    height: 80,
  },

  icon:{
    marginTop: 10,
    marginBottom: 10, 
    marginRight: 16,
    marginLeft: 16,
    width: 40,
    height: 40,
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
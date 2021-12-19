import axios from 'axios';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute} from '@react-navigation/native';
import ListProduct from './products copy';
import { ScrollView } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
import HeaderCart from '../payment/header_pm';
import Info from '../payment/info_ad';
import { FA5Style } from 'react-native-vector-icons/FontAwesome5';



// const navigation = useNavigation(); 

// function GetData(){
//   const route = useRoute();
//     const username = route.params.username;
//     return username;
// }

function ListProduct_New()
{
    const [ListProduct, setProduct] = useState([
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', SoLuong: 1, Pick: false}
    ])
    //---------------Xu ly So luong------------------------
    //const [SoLuong, setSoLuong] = useState(1)

    // for(var i=0;i<ListProduct.length;i++)
    // {
    //   ListProduct[i].SoLuong=1
    // }

    const[temp, settemp] = useState(0)

    function TangSoLuong(index)
    {
        let soluong = ListProduct[index].SoLuong;
        soluong = soluong + 1;
        ListProduct[index].SoLuong = soluong;
        setProduct(ListProduct)
        console.log(ListProduct)
        settemp(temp + 1)
    }

    function GiamSoLuong(index)
    {
      if(ListProduct[index].SoLuong>0)
      {
      ListProduct[index].SoLuong-=1
      setProduct(ListProduct)
      settemp(temp - 1)
      }
    }
    //------------------------------------------------------
        return (
          <View>
            {/* ----------------------------------------------------------- */}
            <ScrollView>
              <HeaderCart/>
              <Info/>
              <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 5}}>Thông tin giỏ hàng</Text>
              {
                  ListProduct.map((item,index) =>
                    {
                      return(
                        <TouchableOpacity>
                        <View style={styles.row}>
                        <CheckBox
                            // iconRight
                            checkedIcon="check-square"
                            uncheckedIcon="square-o"
                            //checked={()}
                           // onPress={(checked) => checked =true}
                          />
                        <Image source={{uri:item.hinhanh}} style={styles.imageStyle} />
                          <View>
                            <View style={styles.nameContainer}>
                              <Text style={styles.nameTxt}>{item.tensach}</Text>
                            </View>
                            <View style={styles.end}>
                              <Text style={styles.priceStyle}>
                              {item.giaban} đ
                              </Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center',  marginRight: 0, padding: 10 }}>
                              <TouchableOpacity 
                              onPress={() => GiamSoLuong(index)}
                              >
                                <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
                              </TouchableOpacity>

                              <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:15}}>{ListProduct[index].SoLuong}</Text>

                              <TouchableOpacity 
                              onPress={() => TangSoLuong(index)}
                              >
                                <Icon name="ios-add-circle" size={30} color={"#33c37d"} />
                              </TouchableOpacity>
                            </View>
                          </View>

                          <TouchableOpacity style={{flexDirection:'row', alignItems:'center',  marginRight: 0, paddingLeft: 50 }} 
                            //onPress={GiamSoLuong}
                            >
                                <Icon name="trash" size={25} color={"#33c37d"}/>
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                      )
                       
                  })
              }
            </ScrollView>
            {/* ---------------------------------------------------------------------- */}

            <View style={styles.bottomView}>
              <View style={styles.textBottom}>
              <Text style={{fontSize: 18, color: 'black'}}>Tổng cộng</Text>
              <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>1000 đ</Text>
              </View>
              <TouchableOpacity style={styles.buyButton} 
              //onPress={() => this.props.navigation.navigate('Payment')}
              >
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#C84B31'}}>Mua Hàng</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
  
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // width: 270,
  },
  nameTxt: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
    width: 100,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceStyle: {
    fontWeight: '600',
    color: 'red',
    paddingLeft: 10,
    width: 90,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3,
    fontSize: 15,
  },
  imageStyle: {
    width: 85, 
    height: 120, 
    marginRight: 20
  },
  bottomView:{
    flexDirection: 'row',
    position: 'absolute',
    width: windowWidth,
    height: 60,
    backgroundColor:'#C2FFF9',
    bottom: 0,
    alignItems: 'center',
  },
  textBottom: {
    fontWeight: '600',
    paddingLeft: 30,
    fontSize: 25,
    marginRight: (windowWidth - 280),
  },
  buyButton: {
    backgroundColor: '#FFE652',
    width: 150,
    borderRadius: 6,
    fontSize: 20,
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  }
  
});

export default ListProduct_New
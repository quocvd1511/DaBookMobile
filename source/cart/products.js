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
import { ScrollView } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;

// const navigation = useNavigation(); 

// function GetData(){
//   const route = useRoute();
//     const username = route.params.username;
//     return username;
// }

function ListProduct_New()
{
    const route = useRoute()
    const navigation = useNavigation()
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
    var username=route.params.username.username

    const [UserInfor, setUserInfor] = useState('')
    React.useEffect(() => 
    { 
      async function fetchData(){
        const request = await axios.get('http://192.168.1.9:3000/chitiettk?matk='+username)
        setUserInfor(request.data)
        setProduct(request.data.giohang)
        for(var i=0; i<ListProduct.length ;i++)
        {
          ListProduct[i].Pick=false
          ListProduct[i].SoLuong = parseInt(ListProduct[i].SoLuong)
        }
      }
      fetchData();
  
    },['http://192.168.1.9:3000/'])

    const[temp, settemp] = useState(0)
    const[TongTien, setTongTien] = useState(0)
    
    //console.log(ListProduct)
    //setProduct(gh)


    // console.log(ListProduct)
    //console.log('Hello')
    //console.log(ListProduct)
    //-------------------------Xu Ly-----------------------------------------------------
    function isChecked(index) 
    {
      return ListProduct[index].Pick
    }

    function Cal(index)
    {
      // console.log(isChecked(index))
      if(isChecked(index))
      {
        ListProduct[index].Pick = false
        //setProduct(ListProduct)
         console.log(ListProduct[index].Pick)
        //ListProduct[index].SoLuong===0) ListProduct[index].SoLuong=1
        setTongTien(TongTien-(parseInt(ListProduct[index].giaban)*ListProduct[index].SoLuong))
        settemp(temp+1)
      } else
      {
        ListProduct[index].Pick = true
        //setProduct(ListProduct)
        console.log(ListProduct[index])
        // console.log(ListProduct[index].Pick)
         if(ListProduct[index].SoLuong===0) ListProduct[index].SoLuong=1
        setTongTien(TongTien+(parseInt(ListProduct[index].giaban)*ListProduct[index].SoLuong))
        settemp(temp+1)
      }
    }

    function TangSoLuong(index)
    {
        let soluong = parseInt(ListProduct[index].SoLuong);
        soluong = soluong + 1;
        ListProduct[index].SoLuong = soluong;
        setProduct(ListProduct)
        if(isChecked(index))
        {
          setTongTien(TongTien+parseInt(ListProduct[index].giaban))
        }
        //console.log(ListProduct)
        settemp(temp + 1)
    }

    function GiamSoLuong(index)
    {
      if(ListProduct[index].SoLuong>0)
      {
      ListProduct[index].SoLuong-=1
      setProduct(ListProduct)
      if(isChecked(index))
        {
          if(ListProduct[index].SoLuong===0)
          {
            ListProduct[index].Pick=false
          }
          setTongTien(TongTien-parseInt(ListProduct[index].giaban))
        }
      settemp(temp - 1)
      }
    }

    function RemoveProduct(index)
    {
      if(isChecked(index))
      {
        setTongTien(TongTien-ListProduct[index].SoLuong*parseInt(ListProduct[index].giaban))
      }
      ListProduct.splice(index,1)
      //console.log(ListProduct)
      settemp(temp+1)
    }


    function SolveProduct()
    {
      var BuyedProduct =[]
      var SoLuong=0
      for(var i=0;i<ListProduct.length;i++)
      {
        if(ListProduct[i].Pick)
        {
          BuyedProduct[SoLuong] = ListProduct[i]
          SoLuong+=1
        }
      }
      navigation.navigate('Payment',{BuyedProduct,TongTien,UserInfor})
    }
    //------------------------------------------------------
        return (
          <View style={{flex:1}}>
            {/* ----------------------------------------------------------- */}
            <ScrollView>

              {/* //------------------------- */}

              <View>
                  <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Thông tin nhận hàng</Text>
                  <View style={styles.main_info}>
                      <View style={styles.type_user}>
                      <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                          <Text style={{fontSize: 18}}>{UserInfor.hoten}</Text>
                      </View>

                      <View style={styles.type_numberphone}>
                      <Text style={{fontSize: 18}}>SĐT: {UserInfor.sodt}</Text>
                      </View>
                  </View>
                  
                  <View style={styles.address}>
                      <Text style={styles.text_style}>Địa chỉ: {UserInfor.diachigoc}</Text>
                  </View>
                  <View style={{backgroundColor: '#fff', padding: 10}}>
                      <Text style={styles.change}>Thay đổi</Text>
                  </View>
                </View>
              

              {/* //-------------------------- */}
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
                            checked={ListProduct[index].Pick}
                            onPress={() => Cal(index)}
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
                            onPress={() => RemoveProduct(index)}
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
              <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{TongTien} đ</Text>
              </View>
              <TouchableOpacity style={styles.buyButton} 
                onPress={SolveProduct}
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
  },

  //-------------------------------
  main_info:{
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},

address:{
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft:10,
    // marginRight:10,
    
    paddingLeft: 30,
    paddingRight: 20,
    marginBottom: 0,
    
},

type_user:{
    flexDirection: 'row',
    height: 50,
    width:'50%',
    justifyContent:'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
},
type_numberphone:{
    flexDirection: 'row',
    height: 50,
    width:'50%',
    justifyContent:'center',
    alignItems: 'center',
    marginRight:10,
    fontWeight: 'bold',
    fontSize: 20,
},


icon_style:
{
    height: 25,
    width: 25,
    marginRight: 10,
    marginLeft: 15,
    tintColor: '#1E90FF'
},

text_style:{
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '600',
},

change: {
    fontSize: 16,
    color: '#1E90FF',
    fontWeight: '500',
    marginLeft: 20,
}

  
});

export default ListProduct_New
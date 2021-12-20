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
  TextInput,
  Dimensions,
  RefreshControl
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
    var username=route.params.username
    //console.log('skdslkadjlkasjdlkasjdlkasjdlksjlkdjaslkdjlaksjdlka'+username)

    const [UserInfor, setUserInfor] = useState('')
    React.useEffect(() => 
    {
      navigation.addListener('state', 
      async () => {
        var request = await axios.get('http://192.168.1.5:3000/chitiettk?matk='+username)
        //console.log(request.data)
        setUserInfor(request.data)
        if (request.data.giohang)
        {
          setProduct(request.data.giohang)
        }

        for(var i=0; i<ListProduct.length ;i++)
        {
          ListProduct[i].Pick=false
          ListProduct[i].SoLuong = parseInt(ListProduct[i].SoLuong)
        }
      })
      //fetchData();
  
    },['http://192.168.1.5:3000/'])

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
          <SafeAreaView style={{flex:1}}>
            {/* ----------------------------------------------------------- */}
            <ScrollView
              refreshControl=
              {
                <RefreshControl/>
              }
            >


              {/* //------------------------- */}

              <View>
                  <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Thông tin nhận hàng</Text>
                  <View style={styles.main_info}>
                      <View style={styles.type_user}>
                      <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                          <Text style={{fontSize: 18, color: '#333'}}>{UserInfor.hoten}</Text>
                      </View>

                      <View style={styles.type_numberphone}>
                      <Text style={{fontSize: 18, color: '#333'}}>SĐT: {UserInfor.sodt}</Text>
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
                        <View style={styles.row}>
                        <CheckBox
                            // iconRight
                            checkedIcon="check-square"
                            uncheckedIcon="square-o"
                            checked={ListProduct[index].Pick}
                            onPress={() => Cal(index)}
                          />
                        <TouchableOpacity>
                        <Image source={{uri:item.hinhanh}} style={styles.imageStyle} />
                        </TouchableOpacity>
                          <View>
                            <View style={styles.nameContainer}>
                              <Text style={styles.nameTxt} numberOfLines={2}
                                ellipsizeMode='tail' >{item.tensach}</Text>
                            </View>
                            <View style={styles.end}>
                              <Text style={styles.priceStyle}>
                              {item.giaban} đ
                              </Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between',  alignItems:'center',  marginRight: -10, padding: 15, paddingRight: 0 }}>
                              <View style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                                <TouchableOpacity 
                                onPress={() => GiamSoLuong(index)}
                                >
                                  <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
                                </TouchableOpacity>

                                <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:15, color: '#333'}}>{ListProduct[index].SoLuong}</Text>

                                <TouchableOpacity 
                                onPress={() => TangSoLuong(index)}
                                >
                                  <Icon name="ios-add-circle" size={30} color={"#33c37d"} />
                                </TouchableOpacity>
                              </View>

                              <View>
                                <TouchableOpacity style={{flexDirection:'row', alignItems:'center',  marginRight: 0 }} 
                                  onPress={() => RemoveProduct(index)}
                                  >
                                      <Icon name="trash" size={25} color={"#33c37d"}/>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>

                        </View>
                      )
                       
                  })
              }
            </ScrollView>
            {/* ---------------------------------------------------------------------- */}


            <View style={styles.View_sum}>
              <TextInput style={styles.text_input} placeholder='Nhập mã khuyến mãi'></TextInput>
              <TouchableOpacity style={styles.salebutton} >                                                          
                  <Text style={{fontSize: 18, fontWeight: '600', color: '#C84B31'}}>Áp dụng</Text>
              </TouchableOpacity>
            </View>  
            <View style={styles.bottomView}>
              <View style={styles.textBottom}>
                <Text style={{fontSize: 18, color: 'black'}}>Tổng cộng</Text>
                <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{TongTien} đ</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.buyButton} 
                  onPress={SolveProduct}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#C84B31'}}>Mua Hàng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          
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
    paddingRight: 0,
  
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
    width: 150,
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
    width: 120, 
    height: 120, 
    marginRight: 0,
    marginLeft: -20,
    resizeMode:'contain',
  },
  
  bottomView:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection: 'row',
    width: windowWidth,
    height: 60,
    backgroundColor:'#B0E2FF',
    // #C2FFF9
    alignItems: 'center',
  },

  View_sum: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection: 'row',
    width: windowWidth,
    height: 50,
    backgroundColor:'#B0E2FF',
    // #C2FFF9
    alignItems: 'center',
  },

  textBottom: {
    fontWeight: '600',
    paddingLeft: 20,
    fontSize: 25,
  },

  buyButton: {
    backgroundColor: '#FFE652',
    width: 140,
    borderRadius: 6,
    height: 38,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    marginRight:20,
  },

  salebutton: {
    backgroundColor: '#FFE652',
    width: 100,
    borderRadius: 6,
    height: 38,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    marginRight:20,
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
    color: '#333'
},

change: {
    fontSize: 16,
    color: '#1E90FF',
    fontWeight: '500',
    marginLeft: 20,
},

text_input:{
  backgroundColor: '#fff',
  width: 190,
  color: '#333',
  textDecorationLine:'none',
  fontSize: 16,
  height: 38,
  borderRadius: 5,
  justifyContent:'center',
  marginLeft: 20,
  
},

  
});

export default ListProduct_New
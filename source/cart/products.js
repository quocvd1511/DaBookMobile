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
  RefreshControl,
  Pressable,
  ToastAndroid
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import NumberFormat from 'react-number-format';
const windowWidth = Dimensions.get('window').width;
// import { useNavigation, useRoute } from '@react-navigation/native';

// const navigation = useNavigation(); 

// function GetData(){
//   const route = useRoute();
//     const username = route.params.username;
//     return username;
// }

const ListProduct_New = ({navigation, route}) =>
{
    const[Refresh, setRefresh] = useState(1)
    const[temp, settemp] = useState(0)
    const [ListProduct, setProduct] = useState([
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false},
      {tensach: "Hello", giaban: "100000", hinhanh: 'https://cdn-amz.fadoglobal.io/images/I/710ESoXqVPL.jpg', soluong: 1, Pick: false}
    ])
    //---------------Xu ly So luong------------------------
    //const [SoLuong, setSoLuong] = useState(1)
    var username=route.params.username
    console.log('skdslkadjlkasjdlkasjdlkasjdlksjlkdjaslkdjlaksjdlka   '+username)

    const [UserInfor, setUserInfor] = useState('')
    const [ListVoucher, setListVoucher] = useState('')
    const [refresh, SetRefresh] = useState(false)

    React.useEffect(() => 
    {
      async function fetchData() 
      {
        //-----------------------------Lay Thong Tin User---------------
        var request = await axios.get('http://192.168.1.8:3000/chitiettk_voucher?matk='+username)
        setUserInfor(request.data.taikhoan)
        if (request.data.taikhoan.giohang)
        {
          setProduct(request.data.taikhoan.giohang)
        }
        setListVoucher(request.data.khuyenmai)
        setListVoucher(request.data.khuyenmai)

        //-------------------------------Lay Thong Voucher--------------------------------------
      }

      fetchData()
  
    },['http://192,168.1.8:3000/'])

    console.log(ListProduct)
    const[TongTien, setTongTien] = useState(0)
    const[MaNhap, setMaNhap] = useState('')
    var TempListVoucher = ListVoucher

    // console.log('Temp List Voucher N??eeeeeeeeeeee')
    // console.log(TempListVoucher)

    function CheckVoucher(MaNhap)
    {
        console.log('Check Voucher n??')
        console.log(TempListVoucher)
        if(TongTien>0)
        {
          var flag=false
          for(var i=0;i<TempListVoucher.length;i++)
          {
            if(TempListVoucher[i].manhap===MaNhap)
            {
              flag=true
              setTongTien(TongTien - (parseInt(TempListVoucher[i].phantram)/100)*TongTien)
              TempListVoucher[i].manhap+="######"
              setMaNhap('')
              settemp(temp-1)
            } 
          }
        } else ToastAndroid.show("Kh??ng c?? s???n ph???m n??o ???????c ch???n", ToastAndroid.SHORT)
    }
    
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

      console.log('Nh??n Zooooooooooooooooo ', ListProduct[index].giaban*ListProduct[index].soluong)

      if(isChecked(index))
      {
        ListProduct[index].Pick = false
        //setProduct(ListProduct)
         console.log(ListProduct[index].Pick)
        //ListProduct[index].SoLuong===0) ListProduct[index].SoLuong=1
        setTongTien(TongTien-(ListProduct[index].giaban*ListProduct[index].soluong))
        settemp(temp+1)
      } else
      {
        ListProduct[index].Pick = true
        //setProduct(ListProduct)
        console.log(ListProduct[index])
        // console.log(ListProduct[index].Pick)
         if(ListProduct[index].soluong===0) ListProduct[index].soluong=1
        setTongTien(TongTien+(ListProduct[index].giaban*ListProduct[index].soluong))
        settemp(temp+1)
      }
      console.log('T???ng ti???n n??eeeeeeeeeeeee', TongTien)
    }

    function TangSoLuong(index)
    {
        let soluong = parseInt(ListProduct[index].soluong);
        soluong = soluong + 1;
        ListProduct[index].soluong = soluong;
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
      if(ListProduct[index].soluong>0)
      {
      ListProduct[index].soluong-=1
      setProduct(ListProduct)
      if(isChecked(index))
        {
          if(ListProduct[index].soluong===0)
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
        setTongTien(TongTien-ListProduct[index].soluong*parseInt(ListProduct[index].giaban))
      }
      //console.log('Haaaaaaaaaaaaaaaaaaaa' + UserInfor.matk +" " + ListProduct[index].tensach)
      var request = axios.get('http://192.168.1.8:3000/xoasanpham/' + UserInfor.matk + '/' + ListProduct[index].tensach)
      ListProduct.splice(index,1)
      settemp(temp+1)
    }


    function SolveProduct()
    {
      if(TongTien>0)
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
        navigation.navigate('Payment',{BuyedProduct,TongTien,UserInfor,ListVoucher})
      } else ToastAndroid.show('Kh??ng c?? s???n ph???m n??o ???????c ch???n',ToastAndroid.SHORT)
    }

    function ReLoad()
    {
      settemp(temp-1)
    }

    //------------------------------------------------------
    if(ListProduct)
    {
        return (
          <SafeAreaView style={{flex:1, backgroundColor: '#B0E2FF'}}>
            {/* ----------------------------------------------------------- */}
            <ScrollView>
              {/* //------------------------- */}

              <View>
                  <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Th??ng tin nh???n h??ng</Text>
                  <View style={styles.main_info}>
                      <View style={styles.type_user}>
                      <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                          <Text style={{fontSize: 18, color: '#333'}}>{UserInfor.hoten}</Text>
                      </View>

                      <View style={styles.type_numberphone}>
                      <Text style={{fontSize: 18, color: '#333'}}>S??T: {UserInfor.sodt}</Text>
                      </View>
                  </View>
                  
                  <View style={styles.address}>
                      <Text style={styles.text_style}>?????a ch???: {UserInfor.diachi}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#fff', padding: 10}} onPress={() => navigation.navigate('UserDetail',{username: username})} >
                      <Text style={styles.change}>Thay ?????i</Text>
                  </TouchableOpacity>
                </View>
              

              {/* //-------------------------- */}
              <View style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', height: 40, margin:5, marginRight: 10}}>
                <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 0}}>Th??ng tin gi??? h??ng</Text>
                
              </View>

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
                            <NumberFormat value={item.giaban} displayType={'text'} thousandSeparator={true} suffix={' ??'} 
                             renderText={(value) => <Text style={styles.priceStyle}> {value} </Text>}/>

                              {/* <Text style={styles.priceStyle}>
                              {item.giaban} ??
                              </Text> */}
                            </View>
                            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between',  alignItems:'center',  marginRight: -10, padding: 15, paddingRight: 0 }}>
                              <View style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                                <TouchableOpacity 
                                onPress={() => GiamSoLuong(index)}
                                >
                                  <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
                                </TouchableOpacity>

                                <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:15, color: '#333'}}>{ListProduct[index].soluong}</Text>

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

            <View style={styles.bottomView}>
              <View style={styles.textBottom}>
                <Text style={{fontSize: 18, color: 'black'}}>T???ng c???ng</Text>
                <NumberFormat value={TongTien} displayType={'text'} thousandSeparator={true} suffix={' ??'} 
                             renderText={(value) => <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{value}</Text>}/>
                {/* <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{TongTien} ??</Text> */}
              </View>
              <View>
                <TouchableOpacity style={styles.buyButton} 
                  onPress={SolveProduct}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#C84B31'}}>Mua H??ng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          
        );
    } else
      {
        return (
            <SafeAreaView style={{flex:1}}>
              {/* ----------------------------------------------------------- */}
              <ScrollView
                 refreshControl=
                 {
                   <RefreshControl
                   refreshing={refresh}
                   onPress={()=> pullMe()}/>
                 }
              >


                {/* //------------------------- */}

                <View>
                    <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Th??ng tin nh???n h??ng</Text>
                    <View style={styles.main_info}>
                        <View style={styles.type_user}>
                        <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                            <Text style={{fontSize: 18}}>{UserInfor.hoten}</Text>
                        </View>

                        <View style={styles.type_numberphone}>
                        <Text style={{fontSize: 18}}>S??T: {UserInfor.sodt}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.address}>
                        <Text style={styles.text_style}>?????a ch???: {UserInfor.diachigoc}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', padding: 10}}>
                        <Text style={styles.change}>Thay ?????i</Text>
                    </View>
                  </View>
                

                {/* //-------------------------- */}
                <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 5}}>Th??ng tin gi??? h??ng</Text>
                {
                     <Text style={{alignSelf: 'center'}}>Ch??a c?? s???n ph???m n??o trong gi??? h??ng!!</Text>
                }
              </ScrollView>
              {/* ---------------------------------------------------------------------- */}

              <View style={styles.bottomView}>
                <View style={styles.textBottom}>
                <Text style={{fontSize: 18, color: 'black'}}>T???ng c???ng</Text>
                <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{TongTien} ??</Text>
                </View>
                <TouchableOpacity style={styles.buyButton} 
                  onPress={SolveProduct}
                >
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#C84B31'}}>Mua H??ng</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
            
          );
      }
          
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
    height: 70,
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

  //-------------------------------
  main_info:{
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
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

qtyminus: {
  backgroundColor:'#FF6600',
  width: 100,
  height: 40,
  marginBottom: -5,
  marginTop: -5,
  borderRadius: 5,
},
  
});

export default ListProduct_New
import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, StyleSheet,TextInput, Dimensions , FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import HeaderCart from './header_pm';
import ListProduct from './list_product';
import Info_User from './info_ad';
import { useRoute, useNavigation} from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;

export default function Payment() 
{
//   const [Book, setBook] = React.useState([
//     {id :1, name: 'Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 3},
//     {id :2, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg', amountTaken: 4},
//     {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg', amountTaken: 2},
//     {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 1},
// ])


 const [value, setValue] = React.useState('first');
  
  const route = useRoute()
  const navigation = useNavigation()
  console.log('Hello')
  //console.log(route.params.BuyedProduct)

  var ListBuyed = route.params.BuyedProduct
  var UserInfor = route.params.UserInfor
  const [ListVoucher, setListVoucher] = React.useState([])

  React.useEffect(() => 
  {
    async function fetchData() 
    {
      //-----------------------------Lay Thong Tin User---------------
      var request = await axios.get('http://192.168.1.9:3000/chitiettk_voucher?matk='+UserInfor.matk)
      setListVoucher(request.data.khuyenmai)

      //-------------------------------Lay Thong Voucher--------------------------------------
    }

    fetchData()

  },['http://192.168.1.9:3000/'])

  let Temp = route.params.TongTien
  var TempListVoucher = ListVoucher
  var TempListVoucher_2 = TempListVoucher
  const[TongTien, setTongTien] = React.useState(route.params.TongTien)
  const[TienGiam, setTienGiam] = React.useState(0)
  //var TongTien = route.params.TongTien
  const[MaNhap, setMaNhap] = React.useState('')
  const[temp, settemp] = React.useState(0)
  //console.log(TongTien)
  //setTongTien(Temp)
  //console.log('Voucher nèeeeeeeeeeeeeeee')
  //console.log(TempListVoucher)
    // today = new Date()
    // console.log(today)
  function CheckDate(date)
  {
    var today = new Date()
    //var today_p = today.getDate()+'/'+today.getMonth() + '/' + today.getFullYear()
    //console.log(today_p)
    // console.log(date)
    date = Date.parse(date)
    var today_p = Date.parse(today)
    // console.log(today_p)
    // console.log(date)
     if(date<=today_p) return false
     return true
  }

  function CheckVoucher(MaNhap)
  {
      console.log('Check Voucher nè')
      console.log(TempListVoucher)
      //console.log(typeof TempListVoucher[0].ngaykt)
        var flag=false
        var flag1=false
        for(var i=0;i<TempListVoucher.length;i++)
        {
          if(TempListVoucher[i].manhap===MaNhap)
          {
            flag=true
            //console.log(CheckDate(TempListVoucher[i].ngaykt))
            if(CheckDate(TempListVoucher[i].ngaykt))
            {
              setTongTien(TongTien - (parseInt(TempListVoucher[i].phantram)/100)*TongTien)
              setTienGiam(TienGiam+(parseInt(TempListVoucher[i].phantram)/100)*TongTien)
              console.log(TongTien)
              TempListVoucher[i].manhap+="######"
              setMaNhap('')
              settemp(temp-1)
            } else 
            {
              flag1=true
            }
          } 
        }

        if(flag1===true)
        {
          ToastAndroid.show("Voucher đã hết hạn", ToastAndroid.SHORT)
        } else if(flag===false)
        {
          ToastAndroid.show("Voucher đã sử dụng được áp dụng hoặc không tồn tại", ToastAndroid.SHORT)
        }
  }

  
  for(var i=0;i<ListBuyed.length;i++)
  {
    ListBuyed[i].TongTien=parseInt(ListBuyed[i].giaban)*parseInt(ListBuyed[i].SoLuong)
  }

  //console.log(ListBuyed)
  //console.log(route.params.TongTien)
  // renderItem = ({ item, index }) => {
  //   return (
  //     <TouchableOpacity>
  //       <View style={styles.row}>
  //       <Image source={{uri:item.hinhanh}} style={styles.imageStyle} />
  //         <View>
  //           <View style={styles.nameContainer}>
  //             <Text style={styles.nameTxt}  
  //                 numberOfLines={2}
  //                 ellipsizeMode='tail'>{item.tensach}</Text>
  //           </View>
  //           <View style={styles.end}>
  //             <Text>SL: {item.SoLuong}</Text>
  //             <Text style={styles.priceStyle}>{item.TongTien} đ</Text>
  //           </View>
            
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  
  var RestVoucher = []
  var nVoucher = 0
  // console.log('Helloooooooooooooooooooooo')

  async function createBill(){
    //console.log('Hello')
    //console.log(ListVoucher)
    for(var i=0;i<ListVoucher.length;i++)
    {
        var Temp = ListVoucher[i].manhap.length
        if(ListVoucher[i].manhap[Temp-1]!='#')
        {
          RestVoucher[nVoucher] = ListVoucher[i].makm
          nVoucher+=1
        }
    }
    console.log('RestVoucher ne')
    console.log(RestVoucher)
    const request = await axios.post('http://192.168.1.6:3000/taodonhang',{
            matk: UserInfor.matk,
            listbuyed: ListBuyed,
            tongtien: TongTien,
            thanhtoan: value,
            danhsach_km: RestVoucher
    })
    if(request.data.status==='Success')
    {
      var madh= request.data.madh
      navigation.navigate('BillUp',{ListBuyed,TongTien,UserInfor,madh,TienGiam})
    }
  }
  


    return (
      <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <HeaderCart/>
        {/* //---------------------------------------------- */}
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
        {/* <Select/> */}
        
        {/* ----------------------------------------- */}
      
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'700',fontSize:20,marginTop: 10, marginBottom: 5}}>Thông tin giỏ hàng</Text>
        <Text style={{height: 90, padding: 10, paddingTop:0, paddingBottom:0, backgroundColor:'#CCFFCC', color:'#339900', fontWeight:'500',fontSize:16, marginTop: 5, marginBottom: 5, borderRadius: 5,borderStyle: 'solid', borderWidth: 1, borderColor: '#00CC00'}}>
          <Image style={styles.icon_dabookdeli} source={require('../asset/icon/dabook_deli.png')}/>
          Giao hàng trong vòng 5 ngày
        </Text>
        {/* ------------------------------------------------------- */}
        {/* <FlatList style={{marginBottom: 5}}
          // extraData={this.state}
          data={ListBuyed}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={renderItem}
        /> */}

        <ScrollView>
          {
            ListBuyed.map((item) =>
            {
              return(
                  <TouchableOpacity>
                    <View style={styles.row}>
                    <Image source={{uri:item.hinhanh}} style={styles.imageStyle} />
                      <View>
                        <View style={styles.nameContainer}>
                          <Text style={styles.nameTxt}  
                              numberOfLines={2}
                              ellipsizeMode='tail'>{item.tensach}</Text>
                        </View>
                        <View style={styles.end}>
                          <Text>SL: {item.SoLuong}</Text>
                          <Text style={styles.priceStyle}>{item.TongTien} đ</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  )
            })
          }
        </ScrollView>
        {/* ------------------------------------------------------------ */}
         <View style={{backgroundColor: '#FFF'}}>
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'700',fontSize:20,marginTop: 10, marginBottom: 5}}>Chọn hình thức thanh toán</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.select_pay}>
            <RadioButton onPress={() => setValue('first')} value="first" />
            <Image style={styles.icon_pay} source={require('../asset/icon/pay.png')}/> 
            <Text style={{fontSize: 16, marginLeft: 5}} >Thanh toán bằng tiền mặt</Text>
        </View>
        <View style={styles.select_pay}>
            <RadioButton onPress={() => setValue('second')} value="second" />
            <Image style={styles.icon_paymomo} source={require('../asset/icon/MoMo_Logo.png')}/> 
            <Text style={{fontSize: 16, marginLeft: 5}} > Thanh toán bằng ví Momo</Text>
        </View>
        </RadioButton.Group>
      </View>
      </ScrollView>
            {/* <View style={styles.bottomView}>
              <View style={styles.textBottom}>
                <Text style={{fontSize: 18, color: 'black'}}>Tổng cộng</Text>
                <Text  style={{fontSize: 22, fontWeight: 'bold', color: '#C84B31'}}>{route.params.TongTien} đ</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.buyButton} 
                  onPress={createBill}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#C84B31'}}>Thanh toán</Text>
                </TouchableOpacity>
              </View>
            </View> */}

            <View style={styles.View_sum}>
              <TextInput value={MaNhap} onChangeText={(text) => setMaNhap(text)} style={styles.text_input} placeholder='Nhập mã khuyến mãi'></TextInput>
              <TouchableOpacity style={styles.salebutton}
                onPress={() => CheckVoucher(MaNhap)}
              >                                                          
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
                  onPress={createBill}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#C84B31'}}>Thanh toán</Text>
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
      borderColor: '#1da1f2',
      backgroundColor: '#f0f8ff',
      borderBottomWidth: 1,
      padding: 10,
      paddingLeft: 0,
      paddingRight: 0,
    
    },
  
    nameContainer: {
      flexDirection: 'row',
    },
  
    nameTxt: {
      marginLeft: 10,
      width: 200,
      fontWeight: '600',
      color: '#333',
      fontSize: 18,
    },
  
    end: {
      marginLeft: 10,
      marginTop: 6,
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    priceStyle: {
      fontWeight: '600',
      color: 'red',
      width: 90,
      marginRight: 0,
      alignItems: 'center',
      borderRadius: 3,
      fontSize: 17,
    },
  
    imageStyle: {
      resizeMode: 'contain',
      width: 100, 
      height: 100, 
      marginRight: 0,
      marginLeft: 10,
    },
  
    icon_dabookdeli: {
      resizeMode: 'contain',
      width: 130, 
      height: 56, 
      marginTop: -5,
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

    select_pay: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginBottom: 10,
    },
  
    icon_pay: {
      resizeMode: 'contain',
      width: 54, 
      height: 54, 
      marginTop: 5,
    },
  
    icon_paymomo: {
        resizeMode: 'contain',
        width: 40, 
        height: 40, 
        marginTop: 0,
        marginLeft: 6,
    },

    //----------------------------------------

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
  
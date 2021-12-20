import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Pressable, Touchable } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function VoucherScreen() {

  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params.username;
  console.log(username)


  const [Voucher, setVoucher] = React.useState([
    {id :1, name: 'Vận chuyển', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :2, name: 'Sale', price:'10%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :3, name: 'Vận chuyển', price:'20.000 đ', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :4, name: 'Sale', price:'10%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :5, name: 'Vận chuyển', price:'30', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :6, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :7, name: 'Vận chuyển', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :8, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
  ])

  React.useEffect(() => 
      {
        async function fetchData()
      {
          const request = await axios.get('http://192.168.43.180:3000/danhsachvoucher_all')
          console.log(request.data)
          for(var i=0;i<request.data.length;i++)
          {
              request.data[i].ngaykt = request.data[i].ngaykt.toString("dd/mm/yyyy")
              if(request.data[i].loai==='Sale')
              {
                request.data[i].img='https://www.pngrepo.com/png/222733/512/voucher-coupon.png'
              } else
              {
                request.data[i].img='https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'
              }
          }
          console.log(request.data)
          setVoucher(request.data)
      }
      fetchData()
    
      },['http://192.168.43.180:3000/'])

      function addVoucher(index){
        console.log(username + ' ' + Voucher[index].manhap)
        const request = axios.get('http://192.168.43.180:3000/luukhuyenmai/' + username + '/' + Voucher[index].makm + '/' + Voucher[index].manhap);
       console.log(request.status);
}

  return (
    <ScrollView>
      <View style={{backgroundColor:'#FFD39B'}}>
      <View style={styles.main}>
        <Image style={styles.logo_header} source={require('../asset/icon/logo.png')}/>
        <Text style={styles.text_header}>Kho Voucher{"\n"}Siêu Khủng !!!</Text>
      </View>
      <View>
        <Image style={styles.my_voucher} source={require('../asset/icon/My_voucher.png')} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.main_sale}>
          <Image style={styles.logo_sale_header} source={require('../asset/icon/sale.png')}/>
          <Text style={{fontWeight:'bold', color:'white'}}>Sale Voucher</Text>
        </View>

        <View style={styles.main_freeship}>
          <Image style={styles.logo_freeship_header} source={require('../asset/icon/freeship.png')}/>
          <Text style={{paddingBottom:20,fontWeight:'bold', color:'white'}}>Freeship voucher</Text>
        </View>
      </View>
    </View>
      
    <View>
      <View style={styles.container}>
      <ScrollView>
        {
          Voucher.map((item, index) => {
            return(
              <View key={item.id} style={styles.item}>
                  <View style={{backgroundColor: '#33CC00', padding: 20, marginLeft: 5, borderRadius:5}}>
                      <Image style={{height:50, width:50,tintColor: 'white'}} source={{uri:item.img}}/>
                  </View>

                  <View style={{marginLeft:10}}>
                      <Text style={{color:'black', fontSize: 14}}>{item.loai}</Text>
                      <Text style={{color:'black', fontSize: 14}}>{item.noidung}</Text>
                      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Giảm {item.phantram}</Text>
                      <Text style={{color: 'black', fontSize: 12}}>Mã Nhập {item.manhap}</Text>
                      <Text style={{color: 'black', fontSize: 12}}>HSD: {item.ngaykt}</Text>
                  </View>
                  <Pressable
                    style={
                        ({pressed}) =>[{

                            opacity: pressed ? 0.5:1
                        },
                        styles.button_save
                    ]}
                    onPress={()=> addVoucher(index)}
                    >
                    <Text style={{color:'white', fontSize: 16, fontWeight: '500'}}>Lưu</Text>
                  </Pressable>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  main:{
    backgroundColor: 'dodgerblue',
    height: 100,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  button_save: {
    backgroundColor: 'dodgerblue',
    padding:5,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:5,
    marginLeft:30,
    marginTop:45,
  },

  main_sale:{
    height: 100,
    width: '45%',
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
  },

  main_freeship:{
    height: 100,
    width: '45%',
    margin: 5,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
  },

  logo_header:{
    height: 100,
    width: 100,
    marginLeft: 10,
  },

  my_voucher: {
    width: windowWidth,
    height: 54,
    marginBottom: 5
  },

  text_header:{
    marginLeft: 50,
    fontWeight: 'bold',
    fontSize: 25,
    color:'white'
  },

  logo_sale_header:{
    height: 65,
    width: 65,
    marginLeft: 5,
    alignItems: 'center',
    tintColor:'#FFF68F',
  },

  text_sale_header:{
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color:'white'
  },

  logo_freeship_header:{
    height: 65,
    width: 80,
    marginLeft: 5,
    marginTop:20,
    alignContent:'center',
    // textAlign: 'center',
    tintColor:'#FFF68F',
  },

  text_freeship_header:{
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color:'white'
  },


  container: {
    flex: 1,
    padding:10,
    backgroundColor:'#FFD39B',
  },

  item: {
    backgroundColor: 'white',
    height:100,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
    borderRadius:5,
    paddingLeft: 0,
    paddingRight:0,
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

  },
  title: {
    fontSize: 32,
  },
})
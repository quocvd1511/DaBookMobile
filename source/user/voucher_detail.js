import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, ImageBackground} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function VoucherDetail() 
{
    const navigation = useNavigation()
    const route = useRoute()
    const username = route.params.username;
    console.log(username +   'VoucherDetail')

    const [Voucher, setVoucher] = React.useState([])
    const [User, setUser] = React.useState([])

      React.useEffect(() => 
      {
        async function fetchData(){
          const request = await axios.get('http://192.168.43.180:3000/chitiettaikhoan/' + username)
          setUser(request.data.thongtintk)
          setVoucher(User["danhsach_km"])
          return request.data.thongtintk
          // return request.data.thongtintk
          console.log(request.data.thongtintk)
        }
        fetchData();
    
      },['http://192.168.43.180:3000/'])

      console.log(Voucher)

  return (
    <View style={{backgroundColor:'#B0E2FF'}}>
          <View style={styles.container}>
              <ScrollView>
                <View style={styles.main}>
                  <Image style={styles.logo_header} source={require('../asset/icon/sale.png')}/>
                  <Text style={styles.text_header}>Voucher của bạn</Text>
                {/* </View>
                  {
                  Voucher.map((item) => {
                      return(
                      <View key={item.id} style={styles.item}>
                          <View style={{backgroundColor: 'dodgerblue', padding: 25, borderRadius:5, margin: 10}}>
                              <Image style={{height:50, width:50, tintColor: '#ffd79d'}} source={{uri:item.img}}/>
                          </View>

                          <View style={{margin:10}}>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>Nội dung: {item.noidung}</Text>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>Mã nhập: {item.manhap}</Text>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>Giảm: {item.phantram}%</Text>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>HSD: {item.ngaykt}</Text>
                          </View>
                      </View>
                      )
                  })} */}
                  </View>
              </ScrollView>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
    main:{
        backgroundColor: '#1E90FF',
        height: 100,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
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
        height: 80,
        width: 80,
        marginLeft: 5,
        tintColor: '#fff'
    },

    text_header:{
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 20,
        color:'black',
    },

    logo_sale_header:{
      height: 65,
      width: 65,
      marginLeft: 5,
    },

    text_sale_header:{
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      color:'white'
    },

    logo_freeship_header:{
      height: 80,
      width: 80,
      marginLeft: 5,
      marginTop:6,
    },

    text_freeship_header:{
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      color:'white'
    },

    //-------
    container: {
      padding:10
    },
    item: {
      flexDirection:'row', 
      alignItems: 'center',
      backgroundColor: 'white',
      // height:100,
      marginTop:5,
      marginBottom:5,
      marginLeft:5,
      marginRight:5,
      borderRadius:5,
      paddingLeft: 0,
      paddingRight:0,
      //flexDirection: 'row',
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
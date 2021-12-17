import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, ImageBackground} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';


export default function VoucherDetail() {
    const [Book, setBook] = React.useState([
    
        {id :2, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :4, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :6, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :8, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :9, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :10, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :11, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :12, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :13, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
        {id :14, name: 'Sale', price:'100%', img:'https://www.pngrepo.com/png/222733/512/voucher-coupon.png'},
      ])
  return (
    <ImageBackground source={require('../asset/icon/land.png')} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
              <ScrollView>
                <View style={styles.main}>
                  <Image style={styles.logo_header} source={require('../asset/icon/sale.png')}/>
                  <Text style={styles.text_header}>Voucher Free Ship của bạn</Text>
                </View>
                  {
                  Book.map((item) => {
                      return(
                      <View key={item.id} style={styles.item}>
                          <View style={{backgroundColor: '#320d3e', padding: 25, borderRadius:5}}>
                              <Image style={{height:50, width:50,tintColor: '#ffd79d'}} source={{uri:item.img}}/>
                          </View>

                          <View style={{margin:10}}>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>Giảm: {item.price}</Text>
                              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>HSD: 12/12/3000</Text>
                          </View>

                          {/* <Pressable
                              backgroundColor={'dodgerblue'}
                              padding={5}
                              paddingLeft={20}
                              paddingRight={20}
                              borderRadius={5}
                              marginLeft={50}
                              marginTop={45}
                          >
                              <Text style={{color:'white'}}>Lưu</Text>
                          </Pressable> */}
                      </View>
                      )
                  })
                  }
              </ScrollView>
      </View>
    </ImageBackground>
    
  );
}


const styles = StyleSheet.create({
    main:{
        backgroundColor: '#d902ee',
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
    },

    text_header:{
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 18,
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
        backgroundColor: '#f162ff',
        height:100,
        marginTop:10,
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

        borderWidth: 2,
        borderColor: '#320d3e'
    
      },
      title: {
        fontSize: 32,
      },
})
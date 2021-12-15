import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;

export default function Header() {
  return (
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
          <Image style={styles.logo_sale_header} source={require('../asset/icon/voucher1.png')}/>
          <Text style={{fontWeight:'bold', color:'white'}}>Sale Voucher</Text>
        </View>

        <View style={styles.main_freeship}>
          <Image style={styles.logo_freeship_header} source={require('../asset/icon/freeship.png')}/>
          <Text style={{paddingBottom:20,fontWeight:'bold', color:'white'}}>Freeship voucher</Text>
        </View>
      </View>
    </View>
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
      textAlign: 'center',
      tintColor:'#FFF68F',
    },

    text_freeship_header:{
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      color:'white'
    }
})
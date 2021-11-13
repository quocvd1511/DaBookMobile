import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { color } from 'react-native-reanimated';


export default function Header() {
  return (
    <View>
        <View style={styles.main}>
        <Image style={styles.logo_header} source={require('../asset/icon/logo.png')}/>
        <Text style={styles.text_header}>Voucher Siêu Hot{"\n"}Siêu Khủng !!!</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <View style={styles.main_sale}>
        <Image style={styles.logo_sale_header} source={require('../asset/icon/sale.png')}/>
        <Text style={{fontWeight:'bold', color:'white'}}>Super Sale Voucher</Text>
    </View>

    <View style={styles.main_freeship}>
        <Image style={styles.logo_freeship_header} source={require('../asset/icon/freeship.png')}/>
        <Text style={{paddingBottom:20,fontWeight:'bold', color:'white'}}>Super Free Ship</Text>
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
        height: 80,
        width: 80,
        marginLeft: 5,
    },

    text_header:{
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color:'white'
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
    }
})
import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';


export default function Header() {
    const [Book, setBook] = React.useState([
        {id :1, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :3, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :5, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :7, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :8, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :9, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :10, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
        {id :11, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
      ])
  return (
    <ImageBackground source={require('../asset/icon/land2.png')} style={{height: '100%', width: '100%'}}> 
        <View style={styles.container}>
            <ScrollView>
              <View style={styles.main}>
                <Image style={styles.logo_header} source={require('../asset/icon/freeship.png')}/>
                <Text style={styles.text_header}>Voucher Free Ship của bạn</Text>
              </View>
                {
                Book.map((item) => {
                    return(
                    <View key={item.id} style={styles.item}>
                        <View style={{backgroundColor: '#ff6e40', padding: 25, borderRadius:5}}>
                            <Image style={{height:50, width:50,tintColor: '#f5f0e1'}} source={{uri:item.img}}/>
                        </View>

                        <View style={{marginLeft:10}}>
                            <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>Giảm: {item.price}</Text>
                            <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>HSD: 12/12/3000</Text>
                        </View>

                        
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
        backgroundColor: '#1e3d59',
        height: 100,
        margin: 5,
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
        tintColor: 'white'
    },

    text_header:{
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 18,
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
    },

    //-------
    container: {
        padding:10
      },
      item: {
        backgroundColor: '#ffc13b',
        height:100,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        paddingLeft: 0,
        paddingRight:0,
        alignItems: 'center',
        flex:0.8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        margin: 10,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#ff6e40'
    
      },
      title: {
        fontSize: 32,
      },
})
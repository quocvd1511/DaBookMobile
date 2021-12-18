import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable} from 'react-native';
import { color } from 'react-native-reanimated';


export default function ConfirmDetail() {
    const [Book, setBook] = React.useState([
    
        {id :2, ngaygiaohang: '1/1/2000', value:'100000'},
        {id :3, ngaygiaohang: '1/1/2000', value:'100000'},
        {id :4, ngaygiaohang: '1/1/2000', value:'100000'},
        {id :5, ngaygiaohang: '1/1/2000', value:'100000'},
      ])
  return (
    <View>
        <View style={styles.main}>
            <Image style={styles.logo_header} source={require('../asset/icon/packing.png')}/>
            <Text style={styles.text_header}>Các đơn hàng đang đóng gói</Text>
        </View>

        <View style={styles.container}>
            <ScrollView>
                {
                Book.map((item) => 
                {
                    return(
                    <View key={item.id} style={styles.item}>
                        <View style={{backgroundColor: 'dodgerblue', padding: 25, borderRadius:5}}>
                            <Image style={{height:50, width:50,tintColor: 'white'}} source={require('../asset/icon/packing.png')}/>
                        </View>

                        <View style={{marginLeft:10}}>
                            <Text style={{color:'black', fontSize: 12}}>ID đơn hàng: {item.id}</Text>
                            <Text style={{color:'black', fontSize: 12}}>Ngày giao hàng: {item.ngaygiaohang}</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Giá trị đơn hàng: {item.value}</Text>
                        </View>

                         <Pressable
                            backgroundColor={'dodgerblue'}
                            padding={5}
                            paddingLeft={20}
                            paddingRight={20}
                            borderRadius={5}
                            marginLeft={50}
                            marginTop={45}
                        >
                            <Text style={{color:'white'}}>Lưu</Text>
                        </Pressable>
                    </View>
                    )
                })
                }
            </ScrollView>
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
        fontSize: 16,
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
import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function Info()
{
    return(
        <View>
            <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Thông tin nhận hàng</Text>
            <View style={styles.main}>
                <View style={styles.type_user}>
                <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                    <Text style={{fontSize: 18}}>Hồng Nguyễn</Text>
                </View>

                <View style={styles.type_numberphone}>
                <Text style={{fontSize: 18}}>SĐT: 0123456777</Text>
                </View>
            </View>
            
            <View style={styles.address}>
                <Text style={styles.text_style}>Địa chỉ: phường An phú, thị xã Thuận An, tỉnh Bình Dương, phường An phú, thị xã Thuận An, tỉnh Bình Dương</Text>
            </View>
            <View style={{backgroundColor: '#fff', padding: 10}}>
                <Text style={styles.change}>Thay đổi</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

   address:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:10,
        // marginRight:10,
        
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
    },

    change: {
        fontSize: 16,
        color: '#1E90FF',
        fontWeight: '500',
        marginLeft: 20,
    }

})
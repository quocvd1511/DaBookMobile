import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function Order()
{
    return(
        <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15, margin: 10, marginBottom: 0, marginTop: 20}}>Đơn hàng của tôi</Text>
            <View style={styles.main}>
                <View style={styles.main_category}>
                    <Image style={styles.each_category_icon} source={require('../asset/icon/packing.png')}/>
                    <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 5}}>Đang đóng gói</Text>
                </View>

                <View style={styles.main_category}>
                    <Image style={styles.each_category_icon} source={require('../asset/icon/delivery.png')}/>
                    <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 5}}>Vận chuyển</Text>
                </View>

                <View style={styles.main_category}>
                    <Image style={styles.each_category_icon} source={require('../asset/icon/confirm.png')}/>
                    <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 5}}>Chờ xác nhận</Text>
                </View>
            </View>
            
            <View style={styles.searching_history}>
                <Image style={styles.icon_style} source={require('../asset/icon/history.png')}/>
                <Text style={{paddingLeft: 5, color:'#555', fontWeight:'600',fontSize:15,marginTop: 5, marginBottom: 5,}}>Tra cứu lịch sử đơn hàng</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor: '#FFCC99',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },

    searching_history:{
        backgroundColor: '#FFCC99',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },



    each_category_icon:{
        height: 40, 
        width: 40,
        tintColor:'#333',
    },

    main_category:{
        justifyContent:'center',
        alignItems:'center',
        margin: 15,
    },

    icon_style:
    {
        height: 30,
        width: 30,
        marginRight: 10,
        marginLeft: 15,
        tintColor:'#333',
    },

    text_style:{
        fontSize: 15,
        fontWeight: 'bold',
    }

})
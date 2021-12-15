import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function OwnVoucher()
{
    return(
        <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600', fontSize:15, margin: 10}}>Voucher sở hữu</Text>
            <View style={styles.voucher_button}>
                <Image style={styles.icon_free} source={require('../asset/icon/freeship.png')}/>
                <Text style={styles.text_style}>Voucher Free Ship</Text>
            </View>
            <View style={styles.voucher_button}>
                <Image style={styles.icon_style} source={require('../asset/icon/sale.png')}/>
                <Text style={styles.text_style}>Voucher Sale</Text>
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

    voucher_button:{
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

    icon_free: {
        height: 35,
        width: 35,
        marginRight: 10,
        marginLeft:15,
        tintColor: '#333',
    },

    each_category_icon:{
        height: 40, 
        width: 40,
    },

    main_category:{
        justifyContent:'center',
        alignItems:'center',
        margin: 15,
    },

    icon_style:{
        height: 30,
        width: 30,
        marginRight: 10,
        marginLeft:15,
        tintColor: '#333',
    },

    text_style:{
        paddingLeft: 5,
        color:'black',
        fontWeight:'600',
        fontSize:15,
        marginTop: 5,        
        marginBottom: 5,
    }

})
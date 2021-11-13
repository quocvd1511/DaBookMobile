import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function UserAccount()
{
    return(
        <View style={styles.main}>
            <View style={styles.type_user}>
                <Image style={styles.icon_style} source={require('../asset/icon/user.png')}/>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Thông Tin Cá Nhân</Text>
            </View>

            <View style={styles.user_point}>
                <Image style={styles.icon_style} source={require('../asset/icon/logout.png')}/>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Đăng Xuất</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    main:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },

    type_user:{
        flexDirection: 'row',
        backgroundColor: 'dodgerblue',
        height: 50,
        width:'50%',
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        marginRight:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },

    user_point:{
        flexDirection: 'row',
        backgroundColor: 'dodgerblue',
        height: 50,
        width:'40%',
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },

    icon_style:
    {
        height: 30,
        width: 30,
        marginRight: 10,
    }

})
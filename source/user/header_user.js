import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

export default function HeaderUser()
{
    return(
        <View style={styles.main}>
            <View style={styles.avatar}>
            <Avatar
                rounded
                source={require('../asset/icon/doremon.png')}
                size={80}
            />
            </View>
            <View style={styles.name_point}>
                <Text style={styles.username}>Doremon Đã Căng</Text>
                <Text>Điểm tích lũy: 100000000</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor: 'dodgerblue',
        height: 120,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },

    username:{
        fontSize: 18,
        fontWeight: 'bold'
    },

    point:{
        fontSize: 15,
        fontWeight: 'bold'
    },

    avatar:{
        marginLeft: 20,
    },

    name_point:{
        marginLeft: 20
    }
})
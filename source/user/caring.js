import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function Caring()
{
    return(
        <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 40}}>Quan Tâm</Text>
            <View style={styles.caring_button}>
                <Image style={styles.icon_style} source={require('../asset/icon/heart.png')}/>
                <Text style={styles.text_style}>Sách Đã Thích</Text>
            </View>
            <View style={styles.caring_button}>
                <Image style={styles.icon_style} source={require('../asset/icon/watch.png')}/>
                <Text style={styles.text_style}>Sách Đã Xem</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
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

    caring_button:{
        backgroundColor: 'dodgerblue',
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
    },

    text_style:{
        fontSize: 15,
        fontWeight: 'bold',
    }

})
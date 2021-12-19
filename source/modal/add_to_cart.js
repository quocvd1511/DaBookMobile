import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput} from 'react-native';

export default function HistoryLookup()
{
    return(
        <View style={styles.view}>
            <View style={styles.view3}>
                <Image style={{width: 80, height: 80, alignSelf:'center'}} source={require('../asset/icon/success.png')}/>
                <Text style={{fontSize: 18, fontWeight: '600', color:'#333'}}>Thêm vào giỏ hàng thành công!</Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    view: {
        alignSelf:'center',
        width:300, 
        height: 126, 
        backgroundColor:'#fff', 
        borderColor: 'red',
        borderRadius: 10,
        marginTop: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },

    view3: {
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    }
   
})
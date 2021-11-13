import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, {Easing} from 'react-native-reanimated';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';



export default function SearchBar() {
    return(
        <View style={styles.main}>
                <Image style={styles.logo} source={require('../asset/icon/logo.png')}/>
                <TextInput style={styles.text_input} placeholder='Tìm kiếm sách của bạn...'></TextInput>
                <Pressable style={styles.button}>
                    <Image style={{height:35, width: 35, tintColor:'white'}} source={require('../asset/icon/icon_search.png')}/>
                </Pressable>
        </View>
    )
}


const styles=StyleSheet.create({
    main:{
        backgroundColor: 'dodgerblue',
        padding:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 50,
        width: 50,
        marginRight: 10,
    },
    search_input:{
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text_input:{
        backgroundColor: 'white',
        width: 250,
        height: 30,
        right: 5,
        borderRadius: 5,
        padding: 5
    },

    button:{
        alignContent: 'center',
        justifyContent: 'center'
    }
})




  
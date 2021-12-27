import React, { useState } from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function HomeScreen() {


return (
<View>
    <Text>RATING NÈ</Text>
    <View style = {styles.view}>
        <Text style={{marginTop: 10, paddingLeft: 5, color:'black', fontWeight:'600',fontSize:14}}>Đánh giá sản phẩm</Text>
        <View >
            <View style = {styles.viewstar}>
                <Image style = {styles.star} source={require('../asset/icon/vote_star.png')}/>
                <Image style = {styles.star} source={require('../asset/icon/vote_star.png')}/>
                <Image style = {styles.star} source={require('../asset/icon/vote_star.png')}/>
                <Image style = {styles.star} source={require('../asset/icon/vote_star.png')}/>
                <Image style = {styles.star} source={require('../asset/icon/vote_star.png')}/>
            </View>
            <View>
            <TextInput style={styles.text_input} placeholder='Nhập đánh giá'></TextInput>
            </View>
        </View>

        <Pressable
            style={
                ({pressed}) =>[{

                    opacity: pressed ? 0.5:1
                },
                styles.button_login_fb
            ]}
            >
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Gửi</Text>
        </Pressable>
    </View>
</View>

)}

const styles= StyleSheet.create({
    viewstar :{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 10,
    },

    star:{
        margin: 2,
        width: 22,
        height: 22,

    },

    text_input:{
        padding: 10,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#fff',
        width: windowWidth - 20,
        color: '#333',
        textDecorationLine:'none',
        fontSize: 16,
        height: 40,
        borderRadius: 10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.58,
        shadowRadius: 12.00,
        
        elevation: 20,
    },

    button_login_fb:{
        backgroundColor: '#FF6600',
        width: 80,
        borderRadius: 8,
        fontSize: 16,
        marginTop: 0,
        marginLeft: 270,
        height: 40,
        alignItems:'center',
        justifyContent: 'center',
        display: 'flex',
        right: 0,
        

    },
})
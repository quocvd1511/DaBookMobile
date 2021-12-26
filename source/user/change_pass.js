import * as React from 'react'
import {View,Text, Image,StyleSheet, Pressable, ToastAndroid, Keyboard} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';

export default function Logup()
{

    const route = useRoute()
    var username=route.params.username
    console.log(username, '  changepass')

    return(
        <View  style={styles.main}>
            <View>

                <View style={{alignSelf: 'center'}}>
                    <Text style={{marginBottom: 20, fontSize: 20, marginTop: -5, fontWeight: 'bold', textAlign: 'center', color: '#666'}}>Đổi mật khẩu</Text>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }}> Nhập mật khẩu cũ</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }}> Nhập mật khẩu mới</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }}> Xác nhận mật khẩu mới </Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333',}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

        </View>
            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.button_login
                ]}
                >
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white',}}>Xác nhận</Text>
            </Pressable>


        </View>
    )
} 

const styles= StyleSheet.create({
    main:{
        backgroundColor: '#B0E2FF',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    
    },

    text_input:{
        backgroundColor: '#fff',
        color: '#333',
        textDecorationLine:'none',
        width: 285,
        fontSize: 16,
        height: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,

    },

    pass_input:{
        backgroundColor: '#fff',
        color: '#333',
        textDecorationLine:'none',
        width: 285,
        height: 40,
        fontSize: 16,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },

    button_login:{
        backgroundColor: 'dodgerblue',
        width: 300,
        borderRadius: 30,
        fontSize: 15,
        marginTop: 40,
        width: 300,
        height: 40,
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        
        elevation: 18,
    },

    button_login_fb:{
        backgroundColor: '#3A5A98',
        width: 300,
        borderRadius: 30,
        fontSize: 15,
        marginTop: 15,
        width: 300,
        height: 40,
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        
        elevation: 18,
    },

    icon_input:{
        backgroundColor:'#fff',
        height:40, 
        justifyContent: 'center',
        alignItems:'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent:'center',
        paddingRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },

    icon_facebook:
    {
        height: 50, 
        width: 50, 
        marginTop: 10
    }

})
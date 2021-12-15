import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Pressable, ImageBackground } from 'react-native';

import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function user_detail()
{
    return(
        <ImageBackground source={require('../asset/icon/land3.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 5}}>THÔNG TIN CÁ NHÂN</Text>
            </View>
            <View style={styles.bodypart}>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Tên đăng nhập</Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Họ và Tên</Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Số điện thoại</Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Địa chỉ email</Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={styles.line_address}>
                    <Text style={styles.tiletext_address}>Địa chỉ</Text>
                    <View style={{marginLeft: 10}}>
                        <Text>Tỉnh/Thành phố</Text>
                        <TextInput style={styles.textinput_2}/>
                        <Text>Quận/Huyện</Text>
                        <TextInput style={styles.textinput_2}/>
                        <Text>Phường/Xã</Text>
                        <TextInput style={styles.textinput_2}/>
                        <Text>Chi tiết</Text>
                        <TextInput style={styles.textinput_2}/>
                    </View>
                </View>  
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>

                <View style={styles.button}>
                    <Pressable
                    >
                            <Text style={{color:'black', fontWeight: 'bold'}}>Cập nhật thông tin</Text>
                    </Pressable>
                </View>

                <View style={styles.button}>
                    <Pressable
                    >
                        <Text style={{color:'black', fontWeight: 'bold'}}>Xác nhận</Text>
                    </Pressable>
                </View>

            </View>  
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    toppart:{
        backgroundColor: 'dodgerblue',
        width: windowWidth,
        height: 150,
        alignSelf: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    bodypart:{
        alignSelf: 'center',
        width: windowWidth,
        height: 600,
        borderTopRightRadius: 20,
        marginTop: 20,
    },

    img:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    name:{
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },

    username:{
        alignSelf: 'center'
    },

    pointandbought:{
        marginTop: 20,
        alignSelf: 'center'
    },

    textinput:{
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        height: 36,
        width: 230,
    },

    textinput_2:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        height: 36,
        width: 280,
        borderWidth: 0.5,
    },

    tiletext:{
        paddingTop: 12.5,
        paddingBottom: 12.5,
        width: 100,
        color: 'black',
        backgroundColor: 'dodgerblue',
        paddingLeft: 5,
    },

    tiletext_address:{
        paddingTop: 12.5,
        paddingBottom: 12.5,
        width: 350,
        color: 'black',
        backgroundColor: 'dodgerblue',
        borderTopRightRadius: 20,
        paddingLeft: 5,
    },

    line:{
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: 'white',
       marginTop: 10,
       width: 350,
       borderBottomRightRadius: 20,
       borderTopRightRadius: 20,
    },

    line_address:{

        backgroundColor: 'white',
        width: 350,
        marginTop: 10,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 10,
    },

    button:{
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'dodgerblue', 
        borderRadius: 10,
        margin: 10,
        flex: 0.5,
        padding: 10,
    }
}) 
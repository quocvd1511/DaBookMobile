import * as React from 'react'
import {View,Text, Image,StyleSheet, Pressable, ToastAndroid, Keyboard} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Logup()
{
    const [Username,  setUsername] = React.useState('')
    const [Phonenumber, setPhoneNumber] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [ConPassword, setConPassword] = React.useState('')
    const [Name, setName] = React.useState('')
    const [User,setUser] = React.useState([])

    async function fetchData()
    {
        Keyboard.dismiss()
        if(Username === '' || Password === '' || Phonenumber === '' || ConPassword === '')
        {
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.SHORT)
        }
        else if(Password != ConPassword)
        {
            ToastAndroid.show('Mật khẩu xác nhận không trùng khớp', ToastAndroid.SHORT)
        }
        else if(isNaN(Phonenumber))
        {
            ToastAndroid.show('Số điện thoại không hợp lệ', ToastAndroid.SHORT)
        }
        const request = await axios.post('http://192.168.43.180:3000/signup',{
            username: Username,
            phonenumber: Phonenumber,
            password: Password,
            name: Name,
        })
        if(request.data.status==="Existed")
        {
            ToastAndroid.show('Tài khoản đã tồn tại', ToastAndroid.SHORT)
            setUsername('')
            setConPassword('')
            setPassword('')
            setPhoneNumber('')
            setName('')
        }
        else
        {
            console.log(request.data)
            ToastAndroid.show('Đăng ký tài khoản thành công', ToastAndroid.SHORT)
            setUsername('')
            setConPassword('')
            setPassword('')
            setPhoneNumber('')
            setName('')
            navigation.navigate('TabScreen',{username: request.data.user_session.username})

        }
        console.log(request.data)
    }

    const navigation = useNavigation()


    return(
        <View  style={styles.main}>
            <View>

                <View style={{alignSelf: 'center'}}>
                    <Image style={{width: 120, height: 120}} source={require('../asset/icon/logo.png')}/>
                    <Text style={{marginBottom: 20, fontSize: 20, marginTop: -5, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>Đăng ký</Text>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 10, color: '#000', fontSize: 14 }}> Nhập tên tài khoản</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20, marginLeft: 5, tintColor: '#333'}} source={require('../asset/icon/user1.png')}/>
                        </View>
                        <TextInput value={Username} style={styles.text_input} onChangeText={text => setUsername(text)} placeholder='Tên đăng nhập'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 10, color: '#000', fontSize: 14 }}> Nhập số điện thoại</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 23, width: 23, marginLeft: 5, tintColor: '#333'}} source={require('../asset/icon/phone.png')}/>
                        </View>
                        <TextInput value={Phonenumber} style={styles.text_input} onChangeText={text => setPhoneNumber(text)} placeholder='Số điện thoại'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 10, color: '#000', fontSize: 14 }}> Nhập họ và tên</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 23, width: 23, marginLeft: 5, tintColor: '#333'}} source={require('../asset/icon/user1.png')}/>
                        </View>
                        <TextInput value={Name} style={styles.text_input} onChangeText={text => setName(text)} placeholder='Họ và Tên'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 10, color: '#000', fontSize: 14 }}> Nhập mật khẩu</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput value={Password} secureTextEntry={true} style={styles.pass_input} onChangeText={text => setPassword(text)} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 10, color: '#000', fontSize: 14 }}> Xác nhận mật khẩu</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333',}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput value={ConPassword} secureTextEntry={true} style={styles.pass_input} onChangeText={text => setConPassword(text)} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                {/* <Text style={{marginTop: 15, alignSelf: 'flex-end'}}>Quên mật khẩu ?</Text> */}

                {/* <View style={{marginTop: 10, flexDirection: 'row', alignItems:'center'}}>
                    <CheckBox/>
                    <Text>Duy trì đăng nhập</Text>
                </View> */}
        </View>
            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.button_login
                ]}
                onPress={fetchData}
                >
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white',}}>Đăng ký</Text>
            </Pressable>

            <View style={{marginTop: 30, alignItems: 'center'}}>
                <Text>Bạn đã có tài khoản?</Text>
                <Pressable
                    style={
                        ({pressed}) =>[{

                            opacity: pressed ? 0.5:1
                        },
                        // marginTop=5
                    ]}
                    onPress={() =>{navigation.navigate('Login')}}
                    >
                    <Text>Đăng nhập</Text>
                </Pressable>
                {/* <Pressable
                    marginTop={5}
                    onPress={() =>{navigation.navigate('Login')}}
                >
                    <Text>Đăng nhập</Text>
                </Pressable> */}
            </View>

        </View>
    )
} 

const styles= StyleSheet.create({
    main:{
        backgroundColor: '#63B8FF',
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
        marginTop: 25,
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
import * as React from 'react'
import {View,Text, Image,StyleSheet, Pressable, ToastAndroid, Keyboard, Modal} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ModalSuccess from './modal_fail';

export default function Login()
{
    const [txtUsername, settxtUsername] = React.useState('')
    const [txtPassowrd, settxtPassword] = React.useState('')

    const [Username,  setUsername] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [User,setUser] = React.useState([])
    const navigation = useNavigation();
    const [modalVisible_Fail, setModalVisible_Fail] = React.useState(false);
    const [modalVisible_True, setModalVisible_True] = React.useState(false);

    async function checkLogin()
    {
        Keyboard.dismiss()
        if(Username ==='' || Password ==='')
        {
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.SHORT)
        }
      else
      {
        const request = await axios.post('http://192.168.1.6:3000',{
                username: Username,
                password: Password,
        })

        console.log(request.data)
        if(request.data.status==='Failed')
        {
            //ToastAndroid.show("Thông tin đăng nhập không chính xác", ToastAndroid.SHORT)
            setModalVisible_Fail(true)
            setUsername('')
            setPassword('')
        } 
        else
        {
            //ToastAndroid.show("Xác thực thành công", ToastAndroid.SHORT)
            setModalVisible_True(true)
            setTimeout(() => 2000)
            navigation.navigate('TabScreen',{username: Username})
            setUsername('')
            setPassword('')
        }
    }
    }

    function ClearVal(val)
    {
        val=''
    }

    function ConfirmSuccess()
    {
        setModalVisible_True(!modalVisible_True)
        navigation.navigate('TabScreen',{username: Username})
    }


    return(
        <View  style={styles.main}>
            {/* ------------------------------Modal Fail--------------------------------------------- */}
             <Modal
                animationType="fade"
                visible={modalVisible_Fail}
                transparent={true}
                onRequestClose={() =>
                {
                    setModalVisible_Fail(true);
                }}
            >
                <View style={{flex: 1, backgroundColor: "#00000099"}}>
                    <View style={styles.view}>
                        <View style={styles.view2}></View>
                        <View style={styles.view3}>
                            <Image style={{marginTop:10, width: 70, height: 70, alignSelf:'center', marginBottom: 10}} source={require('../asset/icon/fail.png')}/>
                            <Text style={{fontSize: 18, fontWeight: '600', color:'#333'}}>Đăng nhập không thành công!</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible_Fail(!modalVisible_Fail)}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>

                    </View>
                </View>

            </Modal>

            {/* ------------------------------Modal Success--------------------------------------------- */}
            <Modal
                animationType="fade"
                visible={modalVisible_True}
                transparent={true}
                onRequestClose={() =>
                {
                    setModalVisible_True(true);
                }}
            >
                <View style={{flex: 1, backgroundColor: "#00000099"}}>
                    <View style={styles.views}>
                    <View style={styles.view2s}></View>
                        <View style={styles.view3s}>
                            <Image style={{width: 90, height: 90, alignSelf:'center'}} source={require('../asset/icon/success.png')}/>
                            <Text style={{fontSize: 20, fontWeight: '600', color:'#333'}}>Đăng nhập thành công!</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalVisible_True(!modalVisible_True)}}
                        >
                                <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
            {/* --------------------------------------Modal----------------------------------------------------------------------- */}

            <View>

                <View style={{alignSelf: 'center'}}>
                    <Image style={{width: 120, height: 120}} source={require('../asset/icon/logo.png')}/>
                    <Text style={{marginBottom: 20, fontSize: 20, fontWeight: 'bold',}}>Đăng nhập</Text>
                </View>

                <View>
                    
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20, marginLeft: 5, tintColor: '#333'}} source={require('../asset/icon/user1.png')}/>
                        </View>
                        <TextInput value={Username} style={styles.text_input} onChangeText={text => setUsername(text)} placeholder='Tên đăng nhập'></TextInput>
                    </View>
                </View>

                <View style={{marginTop:20}}>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput value={Password} secureTextEntry={true} style={styles.pass_input} onChangeText={text => setPassword(text)} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                <Text style={{marginTop: 15, alignSelf: 'flex-end'}}>Quên mật khẩu ?</Text>

                <View style={{marginTop: 10, flexDirection: 'row', alignItems:'center'}}>
                    <CheckBox/>
                    <Text>Duy trì đăng nhập</Text>
        </View>
        </View>

                <Pressable
                    style={
                        ({pressed}) =>[{
    
                            opacity: pressed ? 0.5:1
                        },
                        styles.button_login
                    ]}
                    onPress={checkLogin}
                    >
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Xác Nhận</Text>
                </Pressable>

                <Pressable
                    style={
                        ({pressed}) =>[{
    
                            opacity: pressed ? 0.5:1
                        },
                        styles.button_login_fb
                    ]}
                    >
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Đăng nhập với Facebook</Text>
                </Pressable>

                <View style={{marginTop: 50, alignItems:'center'}}>
                    <Text>Chưa có tài khoản?</Text>
                    <Pressable
                        marginTop={5}
                        onPress={() => {navigation.navigate('Logup')}}
                    >
                        <Text>Đăng ký ngay</Text>
                    </Pressable>
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
        width: 285,
        color: '#333',
        textDecorationLine:'none',
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
        width: 285,
        color: '#333',
        textDecorationLine:'none',
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
    },

    view: {
        alignSelf:'center',
        width:300, 
        height: 210, 
        borderColor: 'red',
        borderRadius: 10,
        marginTop: 250,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        backgroundColor: '#fff'
    },

    view2: {
        width: 300,
        height: 40,
        backgroundColor:'#eb4924', 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    },

    view3: {
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    },

    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
      },

    buttonClose: {
        marginTop: 10,
        backgroundColor: "#2196F3",
        width: 60, 
        alignSelf: 'center',
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
   
    views: {
        alignSelf:'center',
        width:300, 
        height: 210, 
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

    view2s: {
        width: 300,
        height: 40,
        backgroundColor:'#00BB00', 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    },

    view3s: {
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    }

})
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
    const [Password, setPassword] = React.useState('')
    const [Check_Password, setCheck_Password] = React.useState('')
    const [New_PassWord, setNew_PassWord] = React.useState('')
    const [Confirm_PassWord, setConfirmNew_PassWord] = React.useState('')
    const [OpenUpdate, setOpenUpdate] = React.useState(false)
    

    
    React.useEffect(() => 
    {
        async function fetchData(){
            const request = await axios.get('http://192.168.43.180:3000/chitiettk?matk='+username)
            setPassword(request.data.matkhau)
            setOpenUpdate(false)
        }
        fetchData();

    },['http://192,168.1.8:3000/'])

    function XuLyXacNhan(){
        console.log(Password, New_PassWord, New_PassWord, Confirm_PassWord)
        if(!Check_Password){
            ToastAndroid.show("Vui lòng nhập mật khẩu cũ", ToastAndroid.SHORT)
        } else if(!New_PassWord){
            ToastAndroid.show("Vui lòng nhập mật khẩu mới", ToastAndroid.SHORT)
        }
        else if(!Confirm_PassWord){
            ToastAndroid.show("Vui lòng nhập xác nhận mật khẩu", ToastAndroid.SHORT)
        } else if(Confirm_PassWord != New_PassWord){
            ToastAndroid.show("Xác nhận mật khẩu không khớp", ToastAndroid.SHORT)
        }
        else if(Check_Password != Password)
        {
            ToastAndroid.show("Mật khẩu hiện tại không đúng", ToastAndroid.SHORT)
        }else{
            const request = axios.get('http://192,168.1.8:3000/capnhatmatkhau?username='+username +'&matkhau=' + New_PassWord)
            ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT)
        }
    }


    return(
        <View  style={styles.main}>
            <View>

                <View style={{alignSelf: 'center'}}>
                    <Text style={{marginBottom: 20, fontSize: 20, marginTop: -5, fontWeight: 'bold', textAlign: 'center', color: '#666'}}>Đổi mật khẩu</Text>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }} > Nhập mật khẩu cũ</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} onChangeText={(text) => setCheck_Password(text)} placeholder='Mật khẩu'></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }}> Nhập mật khẩu mới</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333'}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} placeholder='Mật khẩu' onChangeText={(text) => setNew_PassWord(text)}></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{marginBottom:5, marginTop: 25, color: '#000', fontSize: 16 }}> Xác nhận mật khẩu mới </Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.icon_input}>
                            <Image style={{height: 20, width: 20,marginLeft:5, tintColor:'#333',}} source={require('../asset/icon/password.png')}/>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.pass_input} placeholder='Mật khẩu'  onChangeText={(text) => setConfirmNew_PassWord(text)}></TextInput>
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
                onPress={XuLyXacNhan}
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
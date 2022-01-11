import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Pressable, ImageBackground, ToastAndroid } from 'react-native';

import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios';


export default function user_detail()
{

    const navigation = useNavigation()
    const route = useRoute()
    const username = route.params.username
    const [Username, setUsername] = React.useState('')
    const [Name, setName] = React.useState('')
    const [Phonenumber, setPhoneNumber] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [Tinh, setTinh] = React.useState('')
    const [Huyen, setHuyen] = React.useState('')
    const [Xa, setXa] = React.useState('')
    const [ChiTiet, setChiTiet] = React.useState('')
    const [OpenUpdate, setOpenUpdate] = React.useState(false)

    React.useEffect(() => 
    {
        async function fetchData(){
            const request = await axios.get('http://192.168.1.8:3000/chitiettk?matk='+username)
            setUsername(request.data.matk)
            setName(request.data.hoten)
            setPhoneNumber(request.data.sodt)
            setEmail(request.data.email)
            setTinh(request.data.diachigoc[0])
            setHuyen(request.data.diachigoc[1])
            setXa(request.data.diachigoc[2])
            setChiTiet(request.data.diachigoc[3])
            setOpenUpdate(false)
        }
        fetchData();

    },['http://192,168.1.8:3000/'])

    async function UpdateThongTinTK(Pattern)
    {
        console.log(Pattern)
        const request = await axios.post('http://192.168.1.8:3000/updatethongtintk',{data: Pattern})
        ToastAndroid.show(request.data.message, ToastAndroid.SHORT)
    }


    const [temp, settemp] = React.useState(1)
    console.log(OpenUpdate)

    function UpdateThongTin()
    {
        setOpenUpdate(true)
        //console.log(OpenUpdate)
        settemp(temp-1)
    }

    function XuLyXacNhan()
    {
        if(OpenUpdate===false)
        {
            ToastAndroid.show("Vui lòng chỉnh sửa thông tin trước khi xác nhận thay đổi", ToastAndroid.SHORT)
        }
        else
        {
            setOpenUpdate(false)
            const Pattern ={
                matk: Username,
                hoten: Name,
                sodt: Phonenumber,
                email: Email,
                diachigoc: [Tinh, Huyen, Xa, ChiTiet],
                diachi: ChiTiet + "," + Xa + "," + Huyen + "," + Tinh
            }
            UpdateThongTinTK(Pattern)
            //const request = await axios.post('http://192.168.1.8:3000/updatethontintik',{data: Pattern})


        }
    }
    //setOpenUpdate(false)
    //console.log(UserInfor)
    return(
        <ScrollView style={{backgroundColor:'#B0E2FF'}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: '#333', fontWeight: 'bold', marginLeft: 5, marginTop: 10, marginBottom: 0,}}>THÔNG TIN CÁ NHÂN</Text>
            </View>
            <View style={styles.bodypart}>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Tên đăng nhập</Text>
                    <TextInput editable={OpenUpdate} value={Username} onChangeText={(text) => setUsername(text)} placeholder='Chưa cập nhật' style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Họ và Tên</Text>
                    <TextInput editable={OpenUpdate} value={Name} onChangeText={(text) => setName(text)} placeholder='Chưa cập nhật' style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Số điện thoại</Text>
                    <TextInput editable={OpenUpdate} value={Phonenumber} onChangeText={(text) => setPhoneNumber(text)} placeholder='Chưa cập nhật' style={styles.textinput}/>
                </View>
                <View style={styles.line}>
                    <Text style={styles.tiletext}>Địa chỉ email</Text>
                    <TextInput editable={OpenUpdate} value={Email} onChangeText={(text) => setEmail(text)} placeholder='Chưa cập nhật' style={styles.textinput}/>
                </View>
                
                <View style={styles.button_change}>
                    <Pressable
                        style={
                            ({pressed}) =>[{
        
                                opacity: pressed ? 0.5:1
                            },
                            //styles.button_login
                        ]}
                        onPress={() => navigation.navigate('ChangePassWord', {username: route.params.username})}
                    >
                            <Text style={{color:'#fff', fontWeight: 'bold'}}>Đổi mật khẩu </Text>
                    </Pressable>
                </View>

                <View style={styles.line_address}>
                    <Text style={styles.tiletext_address}>Địa chỉ</Text>
                    <View style={{marginLeft: 10}}>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                            <Text style={{fontWeight: '600', marginTop: 5, width: 100}}>Tỉnh/Thành phố</Text>
                            <TextInput editable={OpenUpdate} value={Tinh} onChangeText={(text) => setTinh(text)} style={styles.textinput_2} placeholder='Chưa cập nhật' />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                            <Text style={{fontWeight: '600'}}>Quận/Huyện</Text>
                            <TextInput editable={OpenUpdate} value={Huyen} onChangeText={(text) => setHuyen(text)} style={styles.textinput_2} placeholder='Chưa cập nhật'/>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                            <Text style={{fontWeight: '600'}}>Phường/Xã</Text>
                            <TextInput editable={OpenUpdate} value={Xa} onChangeText={(text) => setXa(text)} style={styles.textinput_2} placeholder='Chưa cập nhật'/>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
                            <Text style={{fontWeight: '600'}}>Chi tiết</Text>
                            <TextInput editable={OpenUpdate} value={ChiTiet} onChangeText={(text) => setChiTiet(text)} style={styles.textinput_2} placeholder='Chưa cập nhật'/>
                        </View>
                    </View>
                </View>  
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 0}}>

                <View style={styles.button}>
                    <Pressable
                        style={
                            ({pressed}) =>[{
        
                                opacity: pressed ? 0.5:1
                            },
                            //styles.button_login
                        ]}
                        onPress={UpdateThongTin}
                        disabled={false}
                    >
                            <Text style={{color:'#fff', fontWeight: 'bold'}}>Chỉnh sửa thông tin</Text>
                    </Pressable>
                </View>

                <View style={styles.button}>
                    <Pressable
                        style={
                            ({pressed}) =>[{
        
                                opacity: pressed ? 0.5:1
                            },
                            //styles.button_login
                        ]}
                        onPress={XuLyXacNhan}
                    >
                        <Text style={{color:'#fff', fontWeight: 'bold'}}>Xác nhận thay đổi</Text>
                    </Pressable>
                </View>

            </View>  
            </ScrollView>
        
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
        marginTop: 10,
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
        fontWeight: 'bold'
    },

    textinput_2:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        height: 36,
        width: 210,
        borderWidth: 0.5,
    },

    tiletext:{
        paddingTop: 12.5,
        paddingBottom: 12.5,
        fontSize: 15,
        width: 110,
        color: 'black',
        backgroundColor: 'dodgerblue',
        paddingLeft: 5,
    },

    tiletext_address:{
        paddingTop: 12.5,
        paddingBottom: 12.5,
        fontSize: 18,
        fontWeight: '600',
        width: 350,
        color: '#fff',
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
        marginBottom: 0,
        height: 280,
    },

    button:{
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FF6600', 
        borderRadius: 10,
        margin: 10,
        flex: 0.5,
        padding: 10,
        marginTop: 0,
    },

    button_change: {
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
        backgroundColor: '#FF6600', 
        borderRadius: 10,
        margin: 10,
        flex: 0.5,
        padding: 10,
        marginTop: 20,
        width: 130,
    }
}) 
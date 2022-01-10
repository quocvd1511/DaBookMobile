import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput, Dimensions, ToastAndroid, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import { useNavigation, useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { Keyboard } from 'react-native';

export default function HomeScreen() 
{
    var NoneChoose=require('../asset/icon/vote_star.png')
    var Chosen =require('../asset/icon/yellowstar.png')

    const [Comment, setComment] = useState('')
    const [Star, setStart] = useState(1)
    const navigation = useNavigation()
    const route = useRoute()

    const[Star1,setStar1]= useState(NoneChoose)
    const[Star2,setStar2]= useState(NoneChoose)
    const[Star3,setStar3]= useState(NoneChoose)
    const[Star4,setStar4]= useState(NoneChoose)
    const[Star5,setStar5]= useState(NoneChoose)

    const[listComment, setListCom] = useState([
        {"_id": "61ca8e61e10d167b7fd68201", "matk": "vdq1511", "ngaydg": "28/11/2021", "noidung": "Sách hay ghê", "sao": 1}
    ])
    const[Rated, setRated] = useState(0)

    React.useEffect(() => 
    {
        async function fetchData()
        {
            const request = await axios.get('http://192.168.1.6:3000/danhsachcomment?tensach='+ route.params.tensach +'&matk='+route.params.username)
            console.log(request.data.danhsachdanhgia)
            setListCom(request.data.danhsachdanhgia)
            setRated(request.data.sosaodanhgia)
            //console.log(request.data.danhsachdanhgia)
        }
        fetchData();

    },['http://192.168.1.4:3000/'])

    //console.log(listComment)
    var danhsachComment = listComment
    const [temp, settemp] = useState(0)


    function Starc1()
    {
        setStart(1)

        setStar1(Chosen)
        setStar2(NoneChoose)
        setStar3(NoneChoose)
        setStar4(NoneChoose)
        setStar5(NoneChoose)
        settemp(temp-1)
    }

    function Starc2()
    {
        setStart(2)

        setStar1(Chosen)
        setStar2(Chosen)
        setStar3(NoneChoose)
        setStar4(NoneChoose)
        setStar5(NoneChoose)
        settemp(temp+1)
    }

    function Starc3()
    {
        setStart(3)

        setStar1(Chosen)
        setStar2(Chosen)
        setStar3(Chosen)
        setStar4(NoneChoose)
        setStar5(NoneChoose)
        settemp(temp-1)
    }

    function Starc4()
    {
        setStart(4)

        setStar1(Chosen)
        setStar2(Chosen)
        setStar3(Chosen)
        setStar4(Chosen)
        setStar5(NoneChoose)
        settemp(temp+1)
    }

    function Starc5()
    {
        setStart(5)

        setStar1(Chosen)
        setStar2(Chosen)
        setStar3(Chosen)
        setStar4(Chosen)
        setStar5(Chosen)
        settemp(temp-1)
    }
    

    //console.log("Route Ratingggggggggggggggggg")
    //console.log(route)
    function SendComment()
    {
        Keyboard.dismiss()
        //console.log(Comment)
        setComment('')
        const request = axios.post('http://192.168.1.6:3000/guicomment',{
            tensach: route.params.tensach,
            username: route.params.username,
            noidung: Comment,
            sao: Star,
        })

        var today = new Date()
        today = today.getDate().toString() + "/" + (today.getMonth().toString()+1) + "/" + today.getFullYear().toString()
        var new_comment = {
            matk: route.params.username,
            ngaydg: today,
            noidung: Comment,
            sao: Star,
        }

        danhsachComment.unshift(new_comment)
        settemp(1)

        ToastAndroid.show("Đánh giá đã được gửi", ToastAndroid.SHORT)
    }
    //console.log("Hahahahahahaah"+route.params.username)
    return (
    <View>
        <View style = {styles.view}>
            <Text style={{marginTop: 10, paddingLeft: 10, color:'black', fontWeight:'600',fontSize:14}}>Đánh giá sản phẩm</Text>
            <View >
                <View style = {styles.viewstar}>
                    <TouchableOpacity
                        onPress={Starc1}
                    >
                        <Image  style = {styles.star} source={Star1}/>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity
                        onPress={Starc2}
                    >
                        <Image style = {styles.star} source={Star2}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={Starc3}
                    >
                        <Image style = {styles.star} source={Star3}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={Starc4}
                    >
                        <Image style = {styles.star} source={Star4}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={Starc5}
                    >
                        <Image style = {styles.star} source={Star5}/>
                    </TouchableOpacity>
                </View>
                <View>
                <TextInput value={Comment} onChangeText={(text) => {setComment(text)}} style={styles.text_input} placeholder='Nhập đánh giá'></TextInput>
                </View>
            </View>

            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    {marginBottom: 20, marginTop: 20},
                    styles.button_login_fb
                ]}
                onPress={SendComment}
                >
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white',}}>Gửi</Text>
            </Pressable>
            
            <ScrollView style={{backgroundColor:'#fff', margin: -10,}}>
                {
                    danhsachComment.map((item,index) =>
                    {
                        if(item.sao===1)    // đánh giá 1 sao
                        {
                            return(
                                <View style={styles.comment_frame}>
                                        <Text>{item.matk}</Text>
                                        <View style = {styles.viewstar2}>
                                            <Image  style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                        </View>
                                        <Text>{item.noidung}</Text>
                                        <Text style = {{marginBottom:15, marginTop: 8}}>{item.ngaydg}</Text>
                                </View>
                            )
                        } else if(item.sao===2)
                        {
                            return(
                                <View style={styles.comment_frame}>
                                        <Text>{item.matk}</Text>
                                        <View style = {styles.viewstar2}>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                        </View>
                                        <Text>{item.noidung}</Text>
                                        <Text style = {{marginBottom:15, marginTop: 8}}>{item.ngaydg}</Text>
                                </View>
                            )
                        }
                        else if(item.sao===3)
                        {
                            return(
                                <View style={styles.comment_frame}>
                                        <Text>{item.matk}</Text>
                                        <View style = {styles.viewstar2}>
                                            <Image  style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                        </View>
                                        <Text>{item.noidung}</Text>
                                        <Text style = {{marginBottom:15, marginTop: 8}}>{item.ngaydg}</Text>
                                </View>
                            )
                        } else if(item.sao===4)
                        {
                            return(
                                <View style={styles.comment_frame}>
                                        <Text>{item.matk}</Text>
                                        <View style = {styles.viewstar2}>
                                            <Image  style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={NoneChoose}/>
                                        </View>
                                        <Text>{item.noidung}</Text>
                                        <Text style = {{marginBottom:15, marginTop: 8}}>{item.ngaydg}</Text>
                                </View>
                            )
                        } else
                        {
                            return(
                                <View style={styles.comment_frame}>
                                        <Text>{item.matk}</Text>
                                        <View style = {styles.viewstar2}>
                                            <Image  style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                            <Image style = {styles.star} source={Chosen}/>
                                        </View>
                                        <Text>{item.noidung}</Text>
                                        <Text style = {{marginBottom:15, marginTop: 8}}>{item.ngaydg}</Text>
                                </View>
                            )
                        }


                    })
                }
            </ScrollView>


        </View>
    </View>

    )}

const styles= StyleSheet.create({
    view:{
        padding:10,
    },

    viewstar :{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 10,
    },

    viewstar2 :{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 0,
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
        width: windowWidth - 40,
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
        marginLeft: 250,
        height: 40,
        alignItems:'center',
        justifyContent: 'center',
        display: 'flex',
        right: 0,
    },

    comment_frame:{
        backgroundColor:'#fff',
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth:0.5,
        borderBottomColor: '#999'
        
    }
})
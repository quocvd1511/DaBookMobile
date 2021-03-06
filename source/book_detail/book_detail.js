import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Pressable, Text, TextInput, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity, ToastAndroid, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import TabScreens from '../tab_src/tab';
import Rating from 'react-simple-star-rating';
import RatingScreen from './ratings';
import NumberFormat from 'react-number-format';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
const fontWeights = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ];

function book_detail_home(){

  const navigation = useNavigation();
  const route = useRoute();
  const tensach = route.params.tensach;
  const username = route.params.username;
  const [detail_book, setdetail_book]  = useState('')
  console.log("Hellooooooooooooooooooooooooooooooooooooooooooooooo"+username);

    // Lấy danh sách sách liên quan
    const [Book, setBook]  = useState([])
    React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.1.8:3000/chitietsach/' + tensach )
      setBook(request.data.list_book)
      return request.data.list_book
    }
    fetchData();
    },['http://192,168.1.8:3000/chitietsach'])


    // Lấy dữ liệu của chi tiết sách
    React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.1.8:3000/chitietsach/' + tensach )
      setdetail_book(request.data.book)
      return request.data.book
    }
    fetchData();
    },['http://192,168.1.8:3000/chitietsach' + tensach])
	 //console.log(detail_book);

     for(var i=0;i<detail_book.length;i++)
     {
         detail_book[i].soluong=1
     }

     //Calculate so sao------------------------
     var danhgia = detail_book.danhgia
     var tongdiem=0
     var danhgiatb=0
     var NoneChoose=require('../asset/icon/vote_star.png')
     var Chosen =require('../asset/icon/yellowstar.png')
     var Star1= NoneChoose,Star2= NoneChoose,Star3= NoneChoose,Star4= NoneChoose,Star5=NoneChoose
     const[temp, settemp] = useState(1)
     if(Boolean(danhgia)===true && danhgia.length>0)
     {
        for(var i=0;i<danhgia.length;i++)
        {
            tongdiem+=danhgia[i].sao
        }

        danhgiatb=tongdiem/detail_book.soluotdanhgia
        danhgiatb=danhgiatb.toFixed(1)
        var star = Math.ceil(danhgiatb)

        if(star===1)
        {
            Star1= Chosen
            Star2= NoneChoose
            Star3= NoneChoose
            Star4= NoneChoose
            Star5= NoneChoose

        }
        else if(star===2)
        {
            Star1= Chosen
            Star2= Chosen
            Star3= NoneChoose
            Star4= NoneChoose
            Star5= NoneChoose

        } else if(star===3)
        {
            Star1= Chosen
            Star2= Chosen
            Star3= Chosen
            Star4= NoneChoose
            Star5= NoneChoose

        } else if(star===4)
        {
            Star1= Chosen
            Star2= Chosen
            Star3= Chosen
            Star4= Chosen
            Star5= NoneChoose

        } else if(star===5)
        {
            Star1= Chosen
            Star2= Chosen
            Star3= Chosen
            Star4= Chosen
            Star5= Chosen

        }
        else
        {
            Star1= NoneChoose
            Star2= NoneChoose
            Star3= NoneChoose
            Star4= NoneChoose
            Star5= NoneChoose

        }

    }
     


     //-------------------------------
        
    function quantyplus(){
        console.log('Hihihihihi')
        settemp(temp+1)
        setdetail_book(prevState =>({
            ...prevState,
            soluong: temp
        }))
    }

    function quantyminus(){
        if (detail_book.soluong >= 2)
        {
            settemp(temp - 1)
            setdetail_book(prevState =>({
            ...prevState,
            soluong: temp
        }))
        } 
    }

    function addProduct(soluong)
    {
            setmodalVisible(true);
            console.log(username + ' ' + detail_book.tensach + ' ' + soluong)
            const request = axios.get('http://192.168.1.8:3000/themgiohang?username=' + username + '&tensach=' + detail_book.tensach + '&soluong=' + soluong + '&theloai=' + detail_book.theloai + '&hinhanh=' + detail_book.hinhanh + '&giaban=' + detail_book.giaban);
            console.log(request.status);
            settemp(1)
    }

    const [modalVisible, setmodalVisible] = React.useState(false)
    
    return(
        <ScrollView style = {styles.views}>
            {/* --------------------------------------Modal add to cart------------------------------------------------------ */}
            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() =>
                {
                    setmodalVisible(true);
                }}
            >
                <View style={styles.view_modal}>
                    <View style={styles.view3}>
                        <Image style={{width: 80, height: 80, alignSelf:'center'}} source={require('../asset/icon/success.png')}/>
                        <Text style={{fontSize: 18, fontWeight: '600', color:'#333'}}>Thêm vào giỏ hàng thành công!</Text>
                    </View>

                    <Pressable
                            style={[styles.button_modal, styles.buttonClose]}
                            onPress={() => setmodalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </Modal>


            <Image style = {styles.image} source={{uri:detail_book.hinhanh}}/>
            <View style = {styles.view}>
                <Text style = {styles.name}>{detail_book.tensach}</Text>
                <View style={{ display:'flex', flexDirection:'row'}}>
                    <NumberFormat value={detail_book.giagoc} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                    renderText={(value) => <Text style = {styles.newprice}>{value}</Text>}/>
                    <NumberFormat value={detail_book.giaban} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                    renderText={(value) => <Text style = {styles.price}>  {value} </Text>}/>
                </View>
                {/* <Text style = {styles.newprice}>{detail_book.giaban} đ     
                <Text style = {styles.price}>  {detail_book.giagoc} </Text>
                </Text> */}
                <View style = {styles.viewstar}>
                    <Image style = {styles.star} source={Star1}/>
                    <Image style = {styles.star} source={Star2}/>
                    <Image style = {styles.star} source={Star3}/>
                    <Image style = {styles.star} source={Star4}/>
                    <Image style = {styles.star} source={Star5}/>
                    <Text style={{ fontWeight:'400', fontSize:15}}> {danhgiatb} ({detail_book.soluotdanhgia} đánh giá) </Text>
                </View>
                <Text style={{ fontWeight:'400', fontSize:15}}> Đã bán {detail_book.soluongdaban} sách </Text>
                <View style = {styles.button}>
                    <View style = {styles.quantity}>
                        <Pressable
                            style={
                                ({pressed}) =>[{

                                    opacity: pressed ? 0.5:1
                                },
                                styles.qtyminus
                            ]}
                            onPress={quantyminus}
                            >
                            <Text style={{color:'#fff', fontSize: 25, marginBottom: 6, textAlign:'center'}} >-</Text>
                        </Pressable>                       
                        <Text style={{width: 40, color:'#000', height: 39.5, fontSize: 17, lineHeight:40, textAlign:'center', alignItems:'center', borderWidth: 1, borderStyle: 'solid', borderColor: '#FF6600'}}>{temp}</Text>
                        <Pressable
                            style={
                                ({pressed}) =>[{

                                    opacity: pressed ? 0.5:1
                                },
                                styles.qtyplus
                            ]}
                            onPress={quantyplus}
                            >
                            <Text style={{color:'#fff', fontSize: 20, margin: 5, textAlign:'center'}} >+</Text>
                        </Pressable>
                        
                    </View>
                    <View>
                        <Pressable
                            style={
                                ({pressed}) =>[{

                                    opacity: pressed ? 0.25:1
                                },
                                styles.add_cart
                            ]}
                            >
                            <Text style={{color:'#fff', fontSize: 17, margin: 5, marginTop:7, textAlign:'center'}} onPress={() => addProduct(temp)}>  Thêm vào giỏ hàng  </Text>
                        </Pressable>
                    </View>
                </View>
                <View>

                </View>
            </View>
            <View style = {styles.view}>
                <Text style={{margin: 10, color:'black', fontWeight:'500',fontSize:16}}>Miễn phí vận chuyển</Text>
                <View style={{marginTop: -10, alignItems: 'center', display: 'flex', flexDirection: flexDirections[0],}}>
                    <Image style = {styles.freeship} source={require('../asset/icon/freeship.png')}/>
                    <Text style={{margin: 10, color:'#333', fontWeight:'400',fontSize:14}}>Miễn phí vận chuyển cho đơn trên 200.000 đ</Text>
                </View>
                <View style={{marginTop: 6, alignItems: 'center', display: 'flex', flexDirection: flexDirections[0],}}>
                    <Image style = {styles.shipping} source={require('../asset/icon/delivery.png')}/>
                    <Text style={{margin: 10, color:'black', fontWeight:'400',fontSize:14}}>Phí vận chuyển chỉ từ: 20.000 đ</Text>
                </View>
            </View>
            <View style = {styles.view}>
                <Text style={{margin: 10, color:'black', fontWeight:'500',fontSize:16}}>Thông tin sách</Text>
                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Tên sách</Text>
                    <Text style={{maxWidth: 220,}}>{detail_book.tensach}</Text>
                </View>

                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Tác giả</Text>
                    <Text>{detail_book.tacgia}</Text>
                </View >
                
                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Thể loại</Text>
                    <Text>{detail_book.theloai}</Text>
                </View>

                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Nhà XB</Text>
                    <Text>{detail_book.nxb}</Text>
                </View>

                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Ngôn ngữ</Text>
                    <Text>{detail_book.ngonngu}</Text>
                </View>

                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Hình thức bìa</Text>
                    <Text>{detail_book.hinhthuc}</Text>
                </View>
         
                <View>
                    <Text style={{margin: 10, color:'black', fontWeight:'500',fontSize:14}}>Tóm tắt</Text>
                    <Text style={{marginRight: 7, marginLeft: 3, color: '#333'}}>
                        {detail_book.mota}
                    </Text>
                </View>
            </View>

            {/* Sản phẩm chi tiết */}
            <View style={styles.container}>
                <Text style={{margin: 10, marginBottom: 5, color:'black', fontWeight:'600',fontSize:15}}>  Sản phẩm tương tự </Text>
                <ScrollView horizontal={true}>
                {
                    Book.map((item) => 
                    {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('book_detail', {tensach: item.tensach, username: username})}>
                            <View style={styles.item}>
                                <Image style={styles.img} source={{uri:item.hinhanh}}/>
                                <Text
                                style={styles.name_item}
                                numberOfLines={2}
                                ellipsizeMode='tail'>{item.tensach}</Text>
                                <View style={styles.viewinfo}>
                                <NumberFormat value={item.giaban} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                renderText={(value) => <Text style={styles.bprice}>{value}</Text>}/>
                                    {/* <Text style={styles.bprice}>{item.giaban} đ</Text> */}
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                    })
                }
                </ScrollView>
            </View>
                
            <RatingScreen/>
            

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    views: {
        backgroundColor: '#B0E2FF',
    },

    view: {
        padding: 10,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 0,
        backgroundColor: '#FFF',
    },

    name:{
        margin: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: fontWeights[7],
    },

    add_cart: {
        backgroundColor: '#ff424e',
        height: 40,
        // marginBottom: -5,
        // marginTop: -5,
        borderRadius: 5,
    },

    qtyminus: {
        backgroundColor:'#FF6600',
        width: 40,
        height: 40,
        marginBottom: -5,
        marginTop: -5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    qtyplus: {
        backgroundColor:'#FF6600',
        width: 40,
        height: 40,
        marginBottom: -5,
        marginTop: -5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
    },

    image:{
        resizeMode: "contain",
        margin: 10,
        width: windowWidth - 20,
        height: windowWidth - 20,
        borderRadius: 8,
    },

    newprice: {
        color: 'red',
        marginLeft: 10,
        marginRight: 30,
        fontSize: 18,
        fontWeight: fontWeights[7],
    },

    price: {
        color: '#666',
        marginLeft: 40,
        marginRight: 10,
        fontSize: 15,
        fontWeight: fontWeights[6],
        textDecorationLine: 'line-through',
    },

    star:{
        margin: 2,
        width: 18,
        height: 18,
        tintColor: '#333',
    },

    viewstar :{
        alignItems: 'center',
        display: 'flex',
        flexDirection: flexDirections[0],
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 10,
    },

    quantity: {
        margin: 10,
        marginRight: 30,
        alignItems: 'center',
        display: 'flex',
        flexDirection: flexDirections[0],
    },

    button: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: flexDirections[0],
        justifyContents: 'space-between',
    },

    freeship :{
        marginLeft: 10,
        width: 34,
        height: 34,
        tintColor: '#00AA00',
    }, 

    shipping :{
        marginLeft: 10,
        width: 34,
        height: 34,
        tintColor: '#000',
    },

    bookdetail_info: {
        width: 100,
        color: '#444',
    },

    bookdetail_infos: {
        display: 'flex',
        flexDirection: flexDirections[0],
    },

    // Sản phẩm chi tiết

    item: {
    marginTop: 5,
    backgroundColor: '#fff',
    padding: 5,
    marginLeft: 5,
    borderRadius: 3,
    marginBottom: 10,
    },

    img: {
        resizeMode: "contain",
        width: 106,
        height: 106,
        paddingtop: 0,
        bordertopleftradius: 2,
        bordertoprightradius: 2,
    },

    feature :{
        alignItems: 'center',
        display: 'flex',
        flexDirection: flexDirections[0],
        backgroundColor: '#E0FFFF',
        marginBottom: 10,
    },

    icon:{
        margin: 11,
        width: 50,
        height: 50,
    },

    bprice: {
        color: 'red',
        marginLeft: 4,
        marginRight: 30,
        fontSize: 14,
        fontWeight: '500',
    },

    name_item:{
        padding: 5,
        width: 104,
        //lineHeight: 15,
        height: 40,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center',
        color: '#333',
        fontSize: 13,
    },

    title: {
        fontSize: 32,
    },
    buyButton: {
        backgroundColor:'#ff424e',
        width: 170,
        borderRadius: 6,
        fontSize: 20,
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 9,
        // },
        // shadowOpacity: 0.48,
        // shadowRadius: 11.95,
        // elevation: 18,
      },

      view_modal: {
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
    },
    
    button_modal: {
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

})

export default book_detail_home
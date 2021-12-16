import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Pressable, Text, TextInput, StatusBar, Image, Dimensions, ScrollView } from 'react-native';

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

export default function book_detail_home({navigation}){

    
    const [Book, setBook] = useState([
        {id :1, name: 'Harry Potter And Something Else I Known', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
        {id :2, name: 'Harry Potter và Bảo bối tử thần', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
        {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
        {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
        {id:5, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
        {id: 6, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
    ])

    const [detail_book, setdetail_book] = useState(
        {id :1, 
        name: 'Tuổi trẻ đáng giá bao nhiêu ?', 
        price:'79.000 đ', 
        img:'https://nld.mediacdn.vn/2018/3/24/sach-1521858607292758740290.jpg',
        tacgia: 'Rosie Nguyễn',
        theloai:'Động lực',
        nhaXB: 'Nhà xuất bán trẻ',
        namSX:'2019',
        ngonngu: 'Tiếng Việt',
        hinhthuc: 'Bìa mềm',
        tomtat: 'Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu Tuổi trẻ đáng giá bao nhiêu',
        soluong: 1,
    },
    )

    function quantyplus(){
        temp = detail_book.soluong + 1
        setdetail_book(prevState =>({
            ...prevState,
            soluong: temp
        }))
    }

    function quantyminus(){
        if (detail_book.soluong >= 2){
            temp = detail_book.soluong - 1
            setdetail_book(prevState =>({
            ...prevState,
            soluong: temp
        }))
        } 
    }
    
    return(
        <ScrollView style = {styles.views}>
            <Image style = {styles.image} source={{uri:'https://nld.mediacdn.vn/2018/3/24/sach-1521858607292758740290.jpg'}}/>
            <View style = {styles.view}>
                <Text style = {styles.name}>{detail_book.name}</Text>
                <Text style = {styles.newprice}>{detail_book.price}     <Text style = {styles.price}>107.000 đ</Text></Text>
                <View style = {styles.viewstar}>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Text style={{ fontWeight:'400', fontSize:15}}>    4.8 (27 đánh giá) </Text>
                </View>
                <View style = {styles.button}>
                    <View style = {styles.quantity}>
                        <Pressable 
                            backgroundColor={'#FF6600'}
                            width={40}
                            height={40}
                            marginBottom={-5}
                            marginTop={-5}
                            borderTopLeftRadius={5}
                            borderBottomLeftRadius={5}
                            onPress={quantyminus}>
                            <Text style={{color:'#fff', fontSize: 25, marginBottom: 6, textAlign:'center'}} >-</Text>
                        </Pressable>
                        
                        <Text style={{width: 40, color:'#000', height: 39.5, fontSize: 17, lineHeight:40, textAlign:'center', alignItems:'center', borderWidth: 1, borderStyle: 'solid', borderColor: '#FF6600'}}>{detail_book.soluong}</Text>
                        
                        <Pressable 
                            backgroundColor={'#FF6600'}
                            width={40}
                            height={40}
                            marginBottom={-5}
                            marginTop={-5}
                            borderTopRightRadius={5}
                            borderBottomRightRadius={5}
                            onPress={quantyplus}>
                            <Text style={{color:'#fff', fontSize: 20, margin: 5, textAlign:'center'}} >+</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable 
                            backgroundColor={'#ff424e'}
                            height={40}
                            marginBottom={-5}
                            marginTop={-5}
                            borderRadius={5}>
                            <Text style={{color:'#fff', fontSize: 17, margin: 5, marginTop:7, textAlign:'center'}} >  Thêm vào giỏ hàng  </Text>
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
                    <Text style={{maxWidth: 220,}}>{detail_book.name}</Text>
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
                    <Text>{detail_book.nhaXB}</Text>
                </View>

                <View style = {styles.bookdetail_infos}>
                    <Text style = {styles.bookdetail_info}> Năm XB</Text>
                    <Text>2019</Text>
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
                    <Text style={{marginRight: 7, marginLeft: 3,}}>
                        {detail_book.tomtat}
                    </Text>
                </View>
            </View>

            {/* Sản phẩm chi tiết */}
            <View style={styles.container}>
                <Text style={{margin: 10, marginBottom: 5, color:'black', fontWeight:'600',fontSize:15}}>  Sản phẩm tương tự </Text>
                <ScrollView horizontal={true}>
                {
                    Book.map((item) => {
                    return(
                        <View key={item.id}>
                            <View style={styles.item}>
                                <Image style={styles.img} source={{uri:item.img}}/>
                                <Text 
                                style={styles.name_item}
                                numberOfLines={2}
                                ellipsizeMode='tail'>{item.name}</Text>
                                <View style={styles.viewinfo}>
                                    <Text style={styles.bprice}>179.000 đ</Text>
                                </View>
                            </View>
                        </View>
                    )
                    })
                }
                </ScrollView>
            </View>

            <View style = {styles.view}>
                <Text style={{marginTop: 10, paddingLeft: 5, color:'black', fontWeight:'600',fontSize:14}}>Đánh giá sản phẩm</Text>
                <View style = {styles.viewstar}>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Image style = {styles.star} source={require('../asset/icon/star.png')}/>
                    <Text style={{ fontWeight:'400', fontSize:15}}>    4.8/5 (27 đánh giá) </Text>
                </View>
            </View>
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
        marginLeft: 100,
        marginRight: 10,
        fontSize: 15,
        fontWeight: fontWeights[6],
        textDecorationLine: 'line-through',
    },

    star:{
        margin: 2,
        width: 18,
        height: 18,
        tintColor: '#FFCC00',
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

})

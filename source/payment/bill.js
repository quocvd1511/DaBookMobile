import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput} from 'react-native';
import { useRoute, useNavigation, NavigationContainer } from '@react-navigation/native';

export default function BillUp()
{
    const route = useRoute()
    const navigation = useNavigation()
    console.log(route.params)
    const ListBuy = route.params.ListBuyed
    const UserInfor = route.params.UserInfor
    //console.log(ListBuy)
    var SoLuong=0
    const d = new Date()
    const now = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
    for(var i=0;i<ListBuy.length;i++)
    {
        SoLuong+=parseInt(ListBuy[i].SoLuong)
    }
    // console.log(SoLuong)
    return(
        <ScrollView>
            <View style={{paddingTop: 20}}>
                <View style={{backgroundColor:'#f0f8ff', borderRadius:5, borderWidth: 1, borderColor: '#1ba8ff', margin:5,}}>
                    <Text style={styles.text_style}>Mã đơn hàng:  {route.params.madh}</Text>
                    <Text style={styles.text_style}>Ngày đặt hàng:  {now}</Text>
                    <Text style={styles.text_style}>Địa chỉ người nhận:</Text>
                        <View style={{backgroundColor:'#f0f8ff'}}> 
                            <View style={styles.main}>
                                <View style={styles.type_user}>
                                    <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                                    <Text style={{fontSize: 16}}>{UserInfor.hoten}</Text>
                                </View>

                                <View style={styles.type_numberphone}>
                                    <Text style={{fontSize: 16}}>SĐT: {UserInfor.sodt}</Text>
                                </View>
                            </View>
                            <View style={styles.address}>
                                <Text style={{fontSize: 16}}>Địa chỉ: {UserInfor.diachigoc}</Text>
                            </View>
                        </View>
                    <View style={styles.deli_dabook}>
                        <Text style={styles.text_style}>Được giao bởi: </Text>
                        <Image style={styles.deli_style} source={require('../asset/icon/dabook_deli.png')}/>
                    </View>
                </View>

                {
                route.params.ListBuyed.map((item) =>{
                    return(
                        <View style = {styles.view1}>
                            <Image style = {styles.img_book} source={{uri:item.hinhanh}}/>    
                            <View>
                                <Text style={styles.book_name} numberOfLines={2}
                                    ellipsizeMode='tail'>{item.tensach}</Text>
                                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginRight:10,}}>
                                    <Text style = {styles.price}> SL: {item.SoLuong}</Text>
                                    <Text style={styles.newprice}>{item.TongTien} đ</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
                
                }



                {/* <View style = {styles.view1}>
                    <Image style = {styles.img_book} source={{uri:'https://inthienhang.com/wp-content/uploads/2020/03/bia-sach-co-font-chu-dep-278x400.jpg'}}/>    
                    <View>
                        <Text style={styles.book_name} numberOfLines={2}
                            ellipsizeMode='tail'>Nếu anh là truyền thuyết của em đối thoại với ma đối thoại với người</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginRight:10,}}>
                            <Text style = {styles.price}> 110.000 đ </Text>
                            <Text style={styles.newprice}>101.000 đ</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.view1}>
                    <Image style = {styles.img_book} source={{uri:'https://designs.vn/wp-content/images/18-04-2013/Beyond%20the%20cover%20Ng%C3%B4n%20t%C3%ACnh%20%20(14).jpg'}}/>    
                    <View>
                        <Text style={styles.book_name} numberOfLines={2}
                            ellipsizeMode='tail'>Nếu anh là truyền thuyết của em</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginRight:10,}}>
                            <Text style = {styles.price}> 110.000 đ </Text>
                            <Text style={styles.newprice}>101.000 đ</Text>
                        </View>
                    </View>
                </View> */}
                <View style = {styles.view2}>
                    <Text style={{fontSize: 16, color: 'blue'}}>{SoLuong} sản phẩm</Text>
                    <Text style={{fontSize: 16}}>Thành tiền:<Text style={styles.newprice}>{route.params.TongTien}</Text></Text>
                </View>
                <View style = {styles.view3}>
                    <Text style={{fontSize: 17, color: 'green'}}>Đang chờ xác nhận</Text>
                    <Pressable 
                        backgroundColor={'#FF6600'}
                        width={100}
                        height={34}
                        marginBottom={-5}
                        marginTop={-5}
                        borderRadius={5}
                        style={
                            ({pressed}) =>[{
        
                                opacity: pressed ? 0.5:1
                            },
                            //styles.button_login
                        ]}
                        onPress={() => {navigation.popToTop()}}>
                        <Text style={{color:'#fff', fontSize: 17, margin: 5, textAlign:'center'}}>Về giỏ hàng</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    
    main:{
        backgroundColor: '#f0f8ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    deli_dabook:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    address:{
        backgroundColor: '#f0f8ff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 20,
        marginBottom: 10,
    },

    type_user:{
        flexDirection: 'row',
        height: 50,
        width:'50%',
        justifyContent:'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },

    type_numberphone:{
        flexDirection: 'row',
        height: 50,
        width:'50%',
        justifyContent:'center',
        alignItems: 'center',
        marginRight:10,
        fontWeight: 'bold',
        fontSize: 20,
    },

    icon_style:
    {
        height: 25,
        width: 25,
        marginRight: 10,
        marginLeft: 15,
        tintColor: '#1E90FF'
    },

    deli_style: {
        resizeMode: "contain",
        height: 90,
        width: 110,
        marginRight: 70,
        marginLeft: 15,
        paddingRight:30,
    },

    text_style:{
        fontSize: 17,
        tintColor: '#1E90FF',
        fontWeight: '600',
        lineHeight: 28,
        marginLeft: 10,
        color:'#444'
    },

    card:{
        marginTop: 15,
        height: 120,
        backgroundColor: '#fff'
    },

    img_book: {
        resizeMode: "contain",
        height: 100,
        width: 100,
    },

    book_name: {
        width: 218,
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 26,
    },

    view1:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6600',
    },

    view2:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6600',
    },

    view3:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#fff',
        padding: 10,
        paddingBottom: 20,
        paddingTop: 20,
    },

    newprice: {
        color: 'red',
        marginLeft: 4,

        fontSize: 16,
        fontWeight: '500',
    },
    
    price: {
        color: '#888',
        marginLeft: 50,
        marginRight: 10,
        fontSize: 15,
        fontWeight: '500',
        // textDecorationLine: 'line-through',
    },
})
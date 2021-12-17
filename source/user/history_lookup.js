import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput} from 'react-native';

export default function HistoryLookup()
{
    return(
        <ScrollView>
            <View style={{paddingTop: 20}}>
                <View style = {styles.view1}>
                    <Image style = {styles.img_book} source={{uri:'https://vcdn.tikicdn.com/media/catalog/product/c/o/cover%20thanh%20xuan%20de%20danh.u2487.d20160905.t152805.232712.jpg'}}/>    
                    <View>
                        <Text style={styles.book_name} numberOfLines={2}
                            ellipsizeMode='tail'>Thanh xuân để dành</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginRight:10,}}>
                            <Text style = {styles.price}> 240.000 đ </Text>
                            <Text style={styles.newprice}>210.000 đ</Text>
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
                </View>
                <View style = {styles.view2}>
                    <Text style={{fontSize: 16, color: 'blue'}}>3 sản phẩm</Text>
                    <Text style={{fontSize: 16}}>Thành tiền:<Text style={styles.newprice}> 412.000 đ</Text></Text>
                </View>
                <View style = {styles.view3}>
                    <Text style={{fontSize: 17, color: 'green'}}>Đang chờ xác nhận</Text>
                    <Pressable 
                        backgroundColor={'#FF6600'}
                        width={100}
                        height={34}
                        marginBottom={-5}
                        marginTop={-5}
                        borderRadius={5}>
                        <Text style={{color:'#fff', fontSize: 17, margin: 5, textAlign:'center'}} >Mua lại</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{paddingTop: 20}}>
                <View style = {styles.view1}>
                    <Image style = {styles.img_book} source={{uri:'https://inthienhang.com/wp-content/uploads/2020/03/bia-sach-co-font-chu-dep-278x400.jpg'}}/>    
                    <View>
                        <Text style={styles.book_name} numberOfLines={2}
                            ellipsizeMode='tail'>Đối thoại cùng ma Đối thoại cùng ma Đối thoại cùng ma Đối thoại cùng ma Đối thoại cùng ma</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginRight:10,}}>
                            <Text style = {styles.price}> 197.000 đ </Text>
                            <Text style={styles.newprice}>158.000 đ</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.view2}>
                    <Text style={{fontSize: 16, color: 'blue'}}>1 sản phẩm</Text>
                    <Text style={{fontSize: 16}}>Thành tiền:<Text style={styles.newprice}> 178.000 đ</Text></Text>
                </View>
                <View style = {styles.view3}>
                    <Text style={{fontSize: 17, color: 'green'}}>Giao hàng thành công</Text>
                    <Pressable 
                        backgroundColor={'#FF6600'}
                        width={100}
                        height={34}
                        marginBottom={-5}
                        marginTop={-5}
                        borderRadius={5}>
                        <Text style={{color:'#fff', fontSize: 17, margin: 5, textAlign:'center'}} >Mua lại</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    
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
        textDecorationLine: 'line-through',
    },
})
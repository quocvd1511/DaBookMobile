import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Info()
{
//     const navigation = useNavigation();
//     const route = useRoute();
//     // const username = route.params.username;
//     const username = 'hongcute';
//     console.log(username);
    
//     const [User,setUser] = React.useState([])
//     React.useEffect(() => 
//   {
//     async function fetchData(){
//       const request = await axios.get('http://192.168.43.180:3000/chitietgiohang/' + username)
//       setUser(request.data.thongtintk)
//       return request.data.thongtintk
//     }
//     fetchData();
//     },['http://192.168.43.180:3000/chitietgiohang/' + username])

// 	 console.log(User);

    return(
        <View>
            <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 10, marginBottom:10,}}>Thông tin nhận hàng</Text>
            <View style={styles.main_info}>
                <View style={styles.type_user}>
                <Image style={styles.icon_style} source={require('../asset/icon/location.png')}/>
                    <Text style={{fontSize: 18}}>vdq1511</Text>
                </View>

                <View style={styles.type_numberphone}>
                <Text style={{fontSize: 18}}>SĐT: 111111</Text>
                </View>
            </View>
            
            <View style={styles.address}>
                <Text style={styles.text_style}>Địa chỉ:111111</Text>
            </View>
            <View style={{backgroundColor: '#fff', padding: 10}}>
                <Text style={styles.change}>Thay đổi</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main_info:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

   address:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:10,
        // marginRight:10,
        
        paddingLeft: 30,
        paddingRight: 20,
        marginBottom: 0,
        
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

    text_style:{
        fontSize: 18,
        lineHeight: 32,
        fontWeight: '600',
    },

    change: {
        fontSize: 16,
        color: '#1E90FF',
        fontWeight: '500',
        marginLeft: 20,
    }

})
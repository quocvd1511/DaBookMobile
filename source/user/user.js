import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image , Pressable} from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function UserScreen() 
{
  const route = useRoute()
  const navigation = useNavigation()
  const [username,setusername] = React.useState(route.params.username)
  // console.log('Những cái hay')
   //console.log(route)

  return (
    <ScrollView>
      {/* //-----Header User--------------------------------------------- */}
       <View style={styles.main_header}>
            <View style={styles.avatar}>
            <Avatar
                rounded
                source={require('../asset/icon/doremon.png')}
                size={80}
            />
            </View>
            <View style={styles.name_point}>
                <Text style={styles.username}>{username}</Text>
                <Text>Điểm tích lũy: 100000000</Text>
            </View>
        </View>

        {/* //---------Button thong tin ca nhan, dang xuat---------------------- */}

        <View style={styles.main_user_account}>
          <Pressable
            style={styles.type_user}
            onPress={() => navigation.navigate('UserDetail',{username: username})}
          >
                  <Image style={styles.icon_style_user} source={require('../asset/icon/user.png')}/>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>Thông Tin Cá Nhân</Text>
          </Pressable>

          <Pressable
            style={styles.user_point}
            onPress={() => navigation.navigate('Login')}
          >
                  <Image style={styles.icon_style_user} source={require('../asset/icon/logout.png')}/>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>Đăng Xuất</Text>
          </Pressable>
        </View>

        {/* //-----Order--------------------------------------------------------- */}
        <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15, margin: 10, marginBottom: 0, marginTop: 20}}>Đơn hàng của tôi</Text>
            <View style={styles.main_order}>
            <Pressable
                style={styles.main_category}
                onPress={() => navigation.navigate('ConfirmDetail',{username: username})}>
                <View style={styles.main_category}>
                    <Image style={styles.each_category_icon} source={require('../asset/icon/confirm.png')}/>
                    <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:14,marginTop: 5}}>Chờ xác nhận</Text>
                </View>
              </Pressable>

              <Pressable
                style={styles.main_category}
                onPress={() => navigation.navigate('PackingDetail',{username: username})}
              >
                      <Image style={styles.each_category_icon} source={require('../asset/icon/packing.png')}/>
                      <Text style={{paddingRight: 5, color:'#555', fontWeight:'600',fontSize:14,marginTop: 5, marginLeft: -5}}> Đang đóng gói</Text>
              </Pressable>

              <Pressable
                style={styles.main_category}
                onPress={() => navigation.navigate('ShippingDetail',{username: username})}
              >
                    <Image style={styles.each_category_icon} source={require('../asset/icon/delivery.png')}/>
                    <Text style={{paddingRight: 10, color:'#555', fontWeight:'600',fontSize:14, marginTop: 5}}>Vận chuyển</Text>
              </Pressable>

            </View>
            <Pressable
              style={styles.searching_history}
              onPress={() => navigation.navigate('HistoryLookup')}
            >
                  <Image style={styles.icon_style} source={require('../asset/icon/history.png')}/>
                  <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 5, marginBottom: 3,marginRight: 5}}>Tra cứu lịch sử đơn hàng</Text>
            </Pressable>
        </View>

        {/* //-------------------------Voucher--------------------------------- */}

        <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600', fontSize:15, margin: 10}}>Voucher sở hữu</Text>
            <Pressable
              style={styles.searching_history}
              onPress={() => navigation.navigate('VoucherDetail',{username: username})}
            >
                <Image style={styles.icon_style_voucher} source={require('../asset/icon/sale.png')}/>
                <Text style={styles.text_style_voucher}>Voucher của bạn</Text>
            </Pressable>
        </View>
        
      {/* //=====================Caring---------------------------- */}
      <View>
            <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15, margin: 10,}}>Quan Tâm</Text>
            <View style={styles.caring_button_caring}>
                <Image style={styles.icon_heart_caring} source={require('../asset/icon/heart.png')}/>
                <Text style={styles.text_style_caring}>Sách Đã Thích</Text>
            </View>
            <View style={styles.caring_button_caring}>
                <Image style={styles.icon_style_caring} source={require('../asset/icon/watch.png')}/>
                <Text style={styles.text_style_caring}>Sách Đã Xem</Text>
            </View>
        </View>

    </ScrollView>
  );
}


const styles=StyleSheet.create({
  main_header:{
      backgroundColor: '#00BFFF',
      height: 120,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center'
  },

  username:{
      fontSize: 18,
      fontWeight: 'bold'
  },

  point:{
      fontSize: 15,
      fontWeight: 'bold'
  },

  avatar:{
      marginLeft: 20,
  },

  name_point:{
      marginLeft: 20
  },

  //-------------------

  main_user_account:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
},

type_user:{
    flexDirection: 'row',
    backgroundColor: '#00BFFF',
    height: 50,
    width:'50%',
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    marginRight:15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
},

user_point:{
    flexDirection: 'row',
    backgroundColor: '#00BFFF',
    height: 50,
    width:'40%',
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
},

icon_style_user:
{
    height: 30,
    width: 30,
    marginRight: 10,
},

//--------------------------------

main_order:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin:10,
  borderRadius: 5,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
},

searching_history:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft:10,
  marginRight:10,
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  
  elevation: 11,
},



each_category_icon:{
  height: 40, 
  width: 40,
  tintColor:'#333',
},

main_category:{
  justifyContent:'center',
  alignItems:'center',
  margin: 10,
},

icon_style:
{
  height: 30,
  width: 30,
  marginRight: 10,
  marginLeft: 15,
  tintColor:'#333',
},

text_style:{
  fontSize: 15,
  fontWeight: 'bold',
},

//------------------------------

main_voucher:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin:10,
  borderRadius: 5,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
},

voucher_button_voucher:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft:10,
  marginRight:10,
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
},

icon_free_voucher: {
  height: 35,
  width: 35,
  marginRight: 10,
  marginLeft:15,
  tintColor: '#333',
},

each_category_icon_voucher:{
  height: 40, 
  width: 40,
},

main_category_voucher:{
  justifyContent:'center',
  alignItems:'center',
  margin: 15,
},

icon_style_voucher:{
  height: 30,
  width: 30,
  marginRight: 10,
  marginLeft:15,
  tintColor: '#333',
},

text_style_voucher:{
  paddingLeft: 5,
  color:'#333',
  fontWeight:'600',
  fontSize:15,
  marginTop: 5,        
  marginBottom: 5,
},

//-------------Caring------------------
main_caring:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  justifyContent: 'center',
  margin:10,
  borderRadius: 5,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
},

caring_button_caring:{
  backgroundColor: '#FFCC99',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft:10,
  marginRight:10,
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
},

each_category_icon_caring:{
  height: 40, 
  width: 40,
},

main_category_caring:{
  justifyContent:'center',
  alignItems:'center',
  margin: 15,
},

icon_style_caring:{
  height: 30,
  width: 30,
  marginRight: 10,
  marginLeft: 15,
},

icon_heart_caring:{
  height: 30,
  width: 30,
  marginRight: 10,
  marginLeft: 15,
  tintColor: 'red'
},

text_style_caring:{
  fontSize: 15,
  fontWeight: '600',
  color: '#333'
}

})

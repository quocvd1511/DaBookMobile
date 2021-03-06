import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image , Pressable, ImageBackground} from 'react-native';
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
    <View style={{backgroundColor:'#B0E2FF'}}>
      <ScrollView>
        {/* //-----Header User--------------------------------------------- */}
        <View style={styles.main_header}>
              <View style={styles.avatar}>
              <Avatar
                  rounded
                  source={require('../asset/icon/doremon.png')}
                  size={60}
              />
              </View>
              <View style={styles.name_point}>
                  <Text style={styles.username}>{username}</Text>
              </View>
          </View>

          {/* //---------Button thong tin ca nhan, dang xuat---------------------- */}

          <View style={styles.main_user_account}>
            <Pressable
              style={
                  ({pressed}) =>[{

                      opacity: pressed ? 0.5:1
                  },
                  styles.type_user
              ]}
              onPress={() => navigation.navigate('UserDetail',{username: username})}
              >
                <Image style={styles.icon_style_user} source={require('../asset/icon/user.png')}/>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>Thông Tin Cá Nhân</Text>
            </Pressable>
            
            <Pressable
              style={
                  ({pressed}) =>[{

                      opacity: pressed ? 0.5:1
                  },
                  styles.user_point
              ]}
              onPress={() => navigation.navigate('Login')}
              >
                <Image style={styles.icon_style_logout} source={require('../asset/icon/logout.png')}/>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>Đăng Xuất</Text>
            </Pressable>
          </View>

          {/* //-----Order--------------------------------------------------------- */}
          <View style={{marginTop: 20}}>
              <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15, margin: 10, marginBottom: 0, marginTop: 20}}>Đơn hàng của tôi</Text>
              <View style={styles.main_order}>
                <Pressable
                  style={
                      ({pressed}) =>[{

                          opacity: pressed ? 0.5:1
                      },
                      styles.main_category
                  ]}
                  onPress={() => navigation.navigate('ConfirmDetail',{username: username})}
                  >
                  <Image style={styles.each_confirm_icon} source={require('../asset/icon/confirm.png')}/>
                  <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:14,marginTop: 5}}>Chờ xác nhận</Text>
                </Pressable>

                <Pressable
                  style={
                      ({pressed}) =>[{

                          opacity: pressed ? 0.5:1
                      },
                      styles.main_category
                  ]}
                  onPress={() => navigation.navigate('PackingDetail',{username: username})}
                  >
                  <Image style={styles.each_pack_icon} source={require('../asset/icon/packing.png')}/>
                  <Text style={{paddingRight: 5, color:'#555', fontWeight:'600',fontSize:14,marginTop: 5, marginLeft: -5}}> Đang đóng gói</Text>
                </Pressable>

               
                <Pressable
                  style={
                      ({pressed}) =>[{

                          opacity: pressed ? 0.5:1
                      },
                      styles.main_category
                  ]}
                  onPress={() => navigation.navigate('ShippingDetail',{username: username})}
                  >
                  <Image style={styles.each_category_icon} source={require('../asset/icon/delivery.png')}/>
                  <Text style={{paddingRight: 10, color:'#555', fontWeight:'600',fontSize:14, marginTop: 5}}>Vận chuyển</Text>
                </Pressable>
{/*                 
              <View>
              <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.searching_history
                ]}
                onPress={() => navigation.navigate('List_HistoryLookup',{username: username})}
                >
                <Image style={styles.icon_style} source={require('../asset/icon/history.png')}/>
                <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 10, marginBottom: 3,marginRight: 5}}>Tra cứu lịch sử đơn hàng</Text>
              </Pressable>
              </View> */}

            </View>
            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.searching_history
                ]}
                onPress={() => navigation.navigate('List_HistoryLookup',{username: username})}
                >
                <Image style={styles.icon_style} source={require('../asset/icon/history.png')}/>
                <Text style={{paddingLeft: 0, color:'#555', fontWeight:'600',fontSize:15,marginTop: 10, marginBottom: 3,marginRight: 5}}>Tra cứu lịch sử đơn hàng</Text>
              </Pressable>
        </View>

          <View>
              <Text style={{paddingLeft: 5, color:'black', fontWeight:'600', fontSize:15, margin: 10}}>Voucher sở hữu</Text>
              <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.searching_history
                ]}
                onPress={() => navigation.navigate('VoucherDetail',{username: username})}
                >
                  <Image style={styles.icon_style_voucher} source={require('../asset/icon/sale.png')}/>
                  <Text style={styles.text_style_voucher}>Voucher của bạn</Text>
              </Pressable>
          </View>
          
        {/* //=====================Caring---------------------------- */}
        <View>
              <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15, margin: 10,}}>Quan Tâm</Text>
              <Pressable style={styles.caring_button_caring} style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.searching_history
                ]}  onPress={() => navigation.navigate('Cart',{username: username})}>
                  <Image style={styles.icon_heart_caring} source={require('../asset/icon/cart.png')}/>
                  <Text style={styles.text_style_caring} >Giỏ hàng của bạn</Text>
              </Pressable>
              <Pressable style={styles.caring_button_caring} style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.searching_history
                ]}>
                  <Image style={styles.icon_style_caring} source={require('../asset/icon/watch.png')}/>
                  <Text style={styles.text_style_caring}  onPress={() => navigation.navigate('BookHistory',{username: username})}>Sách Đã Xem</Text>
              </Pressable>
          </View>

      </ScrollView>
    </View>
  );
}


const styles=StyleSheet.create({
  main_header:{
      backgroundColor: '#1E90FF',
      position:'relative',
      height: 120,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
  },

  username:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },

  userpoint:{
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff'
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
    position: 'absolute',
    left: 10,
    top: -26,
    flexDirection: 'row',
    backgroundColor: '#FF9900',
    height: 50,
    width:'50%',
    borderRadius: 10,
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
    right: 10,
    position: 'absolute',
    top: -26,
    flexDirection: 'row',
    backgroundColor:'#FF9900',
    height: 50,
    width:'40%',
    borderRadius: 10,
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

icon_style_logout:
{
    height: 30,
    width: 30,
    marginRight: 10,
    tintColor: '#333',
},


//--------------------------------

main_order:{
  backgroundColor: '#FFF',
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
  backgroundColor: '#FFF',
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
  tintColor:'#10d038',
},

each_confirm_icon:{
  height: 40, 
  width: 40,
  tintColor:'#333',
},

each_pack_icon:{
  height: 40, 
  width: 40,
  tintColor:'#db3e00',
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
  backgroundColor: '#FFF',
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
  backgroundColor: '#FFF',
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
  tintColor: '#1E90FF',
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
  backgroundColor: '#FFF',
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
  backgroundColor: '#FFF',
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

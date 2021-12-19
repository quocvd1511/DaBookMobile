import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable} from 'react-native';
import { color } from 'react-native-reanimated';
import { useNavigation,useRoute } from '@react-navigation/native';
import axios from 'axios';


export default function ConfirmDetail() 
{

  const route = useRoute()
  const navigation = useNavigation()
  console.log('hello')
    
    const [Book, setBook] = React.useState([
      ])

      React.useEffect(() => 
      {
        async function fetchData()
      {
          const request = await axios.get('http://192.168.1.9:3000/danhsachdonhang?'+"matk"+"="+route.params.username+"&"+"tinhtrang="+"chờ xác nhận")
          console.log(request.data)
          for(var i=0;i<request.data.length;i++)
          {
              request.data[i].ngaylap = request.data[i].ngaylap.toString("dd/mm/yyyy")
          }
          setBook(request.data)
          //console.log(request.data)
      }

      fetchData()
    
      },['http://192.168.1.9:3000/'])


  return (
    <View>
        <View style={styles.main}>
            <Image style={styles.logo_header} source={require('../asset/icon/confirm.png')}/>
            <Text style={styles.text_header}>Các đơn hàng đã xác nhận</Text>
        </View>

        <View style={styles.container}>
            <ScrollView>
                {
                Book.map((item) => 
                {
                    return(
                      <View key={item.id} style={styles.item}>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>  
                            <View style={{backgroundColor: 'dodgerblue', padding: 25, borderRadius:5, margin: 10}}>
                                <Image style={{height:50, width:50,tintColor: 'white'}} source={require('../asset/icon/confirm.png')}/>
                            </View>

                            <View style={{marginLeft:10}}>
                                {/* <Text style={{color:'black', fontSize: 12}}>ID đơn hàng: {item.id}</Text> */}
                                <Text style={{color:'black', fontSize: 16,}}>Ngày đặt hàng: {item.ngaylap}</Text>
                                <Text style={{color: 'black', fontSize: 16}}>Giá tiền: {item.tongtien}</Text>
                                <View style={{backgroundColor:'dodgerblue', margin:24, justifyContent:'center', borderRadius: 5, width: 100, marginBottom: 0, marginLeft: 90}}>
                                  <Pressable
                                    width={100}
                                    padding={5}
                                    alignItems={'center'}
                                    onPress={() => navigation.navigate('HistoryLookup',{madh: item.madh})}
                                  >
                                    <Text style={{color:'#fff', fontWeight:'500', fontSize: 15 }}>Chi Tiết</Text>
                                  </Pressable>
                                </View>
                            </View>
                            
                        </View>
                       
                    </View>
                    )
                })
                }
            </ScrollView>
    </View>


    </View>
  );
}


const styles = StyleSheet.create({
    main:{
        backgroundColor: 'dodgerblue',
        height: 100,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    main_sale:{
        height: 100,
        width: '45%',
        backgroundColor: 'dodgerblue',
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },

    main_freeship:{
      height: 100,
      width: '45%',
      margin: 5,
      backgroundColor: 'dodgerblue',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      
      elevation: 14,
    },

    logo_header:{
        height: 80,
        width: 80,
        marginLeft: 5,
    },

    text_header:{
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color:'white'
    },

    logo_sale_header:{
      height: 65,
      width: 65,
      marginLeft: 5,
    },

    text_sale_header:{
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      color:'white'
    },

    logo_freeship_header:{
      height: 80,
      width: 80,
      marginLeft: 5,
      marginTop:6,
    },

    text_freeship_header:{
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      color:'white'
    },

    //-------
    container: {
        padding:10
      },
    item: {
      backgroundColor: 'white',
      // height:100,
      marginTop:5,
      marginBottom:5,
      marginLeft:5,
      marginRight:5,
      borderRadius:5,
      paddingLeft: 0,
      paddingRight:0,
      //flexDirection: 'row',
      flex:0.8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      
      elevation: 4,
  
    },
    
    title: {
      fontSize: 32,
    },
})
import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView,LogBox } from 'react-native';
import axios from 'axios';

const DATA = [
  {tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  {tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"}
]

function ListBook()
{
  //---------Kết nối Database lấy dữ liệu-------------------------    
  // const [DATA,setDATA] = React.useState([])
  // React.useEffect(() => 
  // {
  //   async function fetchData(){
  //     const request = await axios.get('http://192.168.1.4:3000/')
  //     setDATA(request.data)
  //     return request.data
  //   }
  //   fetchData();

  // },['http://192.168.1.4:3000/'])

  //---------------------------------------------------------------



  const Item = ({ tensach,giaban,hinhanh,tacgia }) => (
    <View style={styles.item}>
      <Image style={{height:220, width:135, borderRadius: 5,}} source={{uri:hinhanh}}/>
      <View  style={{paddingLeft:5 }}>
        <Text style={{fontWeight: 'bold', fontSize:12, color: 'black',width:160}}>{tensach}</Text>
        <Text></Text>
        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
          <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/author.png')}/>
          <Text style={{color: 'black', width:135, fontSize:12}}>Tác giả: {tacgia}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
          <Image style={{height:20,width:20,tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
          <Text style={{color: 'black', width: 135, fontSize: 12}}>Giá bán: {giaban}</Text>
        </View>
  </View>
    </View>
  );
  

  const renderItem = ({item}) => (
    <Item tensach={item.tensach} giaban={item.giaban} hinhanh={item.hinhanh} tacgia={item.tacgia}/>
  );
  console.log()
   return (
    <ScrollView>
    <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 30}}>Tất cả các sách</Text>
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      scrollEnabled={true}
      numColumns={2}
    />
  </View>
  </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingTop: 15,
    marginTop: 5,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 0,
    alignItems: 'center',
    paddingBottom: 15,
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
});

export default ListBook;
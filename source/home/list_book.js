import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView,LogBox } from 'react-native';
import axios from 'axios';

function ListBook()
{
  // const [Book, setBook] = useState([
  //     {key: '1', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"},
  //     {key: '2', tensach:"Harry Potter và Đứa trẻ bị nguyền rủa", giaban: "179.000", hinhanh:"https://cf.shopee.vn/file/4374236c87df1591d108fee35c25f414", tacgia:"J.K Rowling"}
  //])
  //---------Kết nối Database lấy dữ liệu-------------------------    
  const [Book,setBook] = React.useState([])
  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.1.9:3000/')
      setBook(request.data)
      return request.data
    }
    fetchData();

   },['http://192.168.1.9:3000/'])
  //---------------------------------------------------------------
   //console.log(Book)
   return (
    <View>
      <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 30}}>Tất cả các sách</Text>
      <ScrollView contentContainerStyle={styles.container}>
          {
          Book.map((item)=>
          {
            return(
              <View style={styles.item}>
                <Image style={{height:220, width:135, borderRadius: 5,}} source={{uri:item.hinhanh}}/>
                <View  style={{paddingLeft:5 }}>
                  <Text style={{fontWeight: 'bold', fontSize:12, color: 'black',width:160}}>{item.tensach}</Text>
                  <Text></Text>
                  <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                    <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/author.png')}/>
                    <Text style={{color: 'black', width:135, fontSize:12}}>Tác giả: {item.tacgia}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                    <Image style={{height:20,width:20,tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
                    <Text style={{color: 'black', width: 135, fontSize: 12}}>Giá bán: {item.giaban}</Text>
                  </View>
                </View>
              </View>

            )
          })
          }
      </ScrollView>
    </View>
    
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
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
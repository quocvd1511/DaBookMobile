import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NumberFormat from 'react-number-format';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



function ListTopSale() 
{
  const navigation = useNavigation(); 
  const route = useRoute()
  const username = route.params.username;

  const [Book, setBook] = useState([
    {id :1, name: 'Harry Potter And Something Else I Known', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
    {id :2, name: 'Harry Potter và Bảo bối tử thần', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
    {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
    {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
    {id:5, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
    {id: 6, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
  ])

  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.1.8:3000/laytopsale')
      setBook(request.data.listsach)
    }
    fetchData();

  },['http://192,168.1.8:3000/'])

  function BookViewed(index){
    console.log(username + ' SÁCH ĐÃ XEM ' + Book[index].tensach)
    const request = axios.get('http://192.168.1.8:3000/sachdaxem?username=' + username + '&tensach=' + Book[index].tensach + '&hinhanh=' + Book[index].hinhanh + '&giaban=' + Book[index].giaban);
   console.log(request.data);
   navigation.navigate('BookDetailHomeScreen', {tensach: Book[index].tensach, username: username})
  }


  return (
      <View style={styles.container}>
        <Text style={{padding:10, color:'red', fontWeight:'600',fontSize:18, backgroundColor: '#fff', textAlign: 'center', marginTop:0}}>Top sách bán chạy </Text>
        <ScrollView horizontal={true}>
          {
            Book.map((item, index) => {
              return(
                <TouchableOpacity key={item.id} onPress={() => BookViewed(index)}>
                  <View style={styles.item}>
                    <Image style={styles.img} source={{uri:item.hinhanh}}/>
                    <Text 
                    style={styles.name_item}
                    numberOfLines={2}
                    ellipsizeMode='tail'>{item.tensach}</Text>
                    <View style={styles.viewinfo}>
                    <NumberFormat value={item.giaban} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                renderText={(value) => <Text style={styles.newprice}> {value}</Text>}/>
                      {/* <Text style={styles.newprice}>{item.giaban} đ</Text> */}
                      <Text style={styles.qtysale}>Đã bán {item.soluongdaban}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
            
          }
        </ScrollView>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },

  item: {
    marginTop: 5,
    backgroundColor: '#fff',
    padding: 5,
    marginLeft: 5,
    borderRadius: 3,
    marginBottom: 0,
  },

  img: {
    resizeMode: "contain",
    width: 125,
    height: 125,
    paddingTop: 0,
    bordertopleftradius: 2,
    bordertoprightradius: 2,
  },

  newprice: {
    color: 'red',
    marginLeft: 4,
    marginRight: 0,
    fontSize: 14,
    fontWeight: '500',
  },
  
  viewinfo :{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
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

  qtysale: {
    padding: 5,
    width: 58,
    //lineHeight: 15,
    height: 40,
    marginLeft: 4,
    marginTop: -4,
    marginRight: -4,
    alignItems: 'center',
    color: '#333',
    fontSize: 11,
  },

  title: {
    fontSize: 32,
  },
});

export default ListTopSale;
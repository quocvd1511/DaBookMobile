import React, {useState}  from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import NumberFormat from 'react-number-format';



export default  function BookHistory(){

  const[Book, setBook] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const matk = route.params.username;

  console.log(matk, 'BOOK HISTORYYYYYYYYYYYYYYYYY')
  React.useEffect(() => 
  {
    async function fetchData(){
      const request = await axios.get('http://192.168.43.180:3000/ds_sachdaxem?username=' + matk )
      setBook(request.data.books)
      return request.data.books
    }
    fetchData();

  },['http://192,168.1.8:3000/'])

    console.log(Book)

return (
    <View style={{flex:1, backgroundColor:'#FFF'}}>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={{backgroundColor:'#1A94FF', marginBottom: 10}}>
            <Text style={{fontSize: 20, alignSelf: 'center', margin: 10, color: '#fff', fontWeight: '500'}}>SÁCH ĐÃ XEM</Text>
        </View>
        {
          Book.map((item)=>
          {
            return(
        <View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BookDetailHomeScreen', {tensach: item.tensach, username: matk})} >
                <Image style={styles.img} source={{uri:item.hinhanh}}/>
                <View>
                    <Text style={styles.name} 
                    numberOfLines={2}
                    ellipsizeMode='tail'>Tên sách: {item.tensach} </Text>
                    <NumberFormat value={item.giaban} displayType={'text'} thousandSeparator={true} suffix={' đ'} 
                                renderText={(value) => <Text style={styles.info}>Giá bán: {value}</Text>}/>
                    {/* <Text style={styles.info} >Giá bán: 197.000 đ</Text> */}
                    <Text style={styles.info} >Ngày xem: {item.ngayxem}</Text>
                </View>
            </TouchableOpacity>
        </View>
            )})}
    </ScrollView>
    </View>
);
}


const styles = StyleSheet.create({
  container: {
    
  },

  item: {
    display:'flex',
    flexDirection: 'row',
    borderColor: '#ff6600',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 5,
  },

  img:{
    marginTop: 0,
    resizeMode: "contain",
    height: 100,
    width: 100,
  },

  name: {
    fontWeight: '500', 
    fontSize: 14, 
    width: 250,
    color: 'black',
    lineHeight: 20,
    minHeight: 40,
    margin: 10,
    marginBottom: 0,
  },

  info: {
    fontWeight: '400', 
    fontSize: 14, 
    color: 'black',
    lineHeight: 20,
    minHeight: 14,
    marginLeft: 10,
    marginBottom: 0,
  }

})


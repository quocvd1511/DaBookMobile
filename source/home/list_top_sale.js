import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [

];


function ListTopSale() 
{
  const [Book, setBook] = useState([
      {id :1, name: 'Harry Potter And Something Else I Known', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
      {id :2, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
      {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
      {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
      {id:5, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
      {id: 6, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
  ])

  return (
      <View style={styles.container}>
      <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15}}>Top Sale</Text>
      <ScrollView horizontal={true}>
        {
          Book.map((item) => {
              return(
                <View key={item.id}>
                  <View style={styles.item}>
                    <Image style={{height:150, width:100}} source={{uri:item.img}}/>
                  </View>
                  <Text style={styles.name_item}>{item.name}</Text>
                  <Text style={styles.name_item}>Giá gốc: 200000</Text>
                  <Text style={styles.name_item}>Giá bán: 1000</Text>
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
  },
  item: {
    marginTop: 5,
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 5,
    borderRadius: 5,
  },

  name_item:{
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 110,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 10,
  },

  title: {
    fontSize: 32,
  },
});

export default ListTopSale;
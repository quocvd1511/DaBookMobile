import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text, Image,ScrollView } from 'react-native';

const DATA = [

];

const Item = ({name}) => (
  <View style={styles.item}>
      <Text style={{fontWeight: 'bold', fontSize:12, color: 'black'}}>{name}</Text>
  </View>
);

function TabType() 
{
  const [Book, setBook] = useState([
    {id :1, name:'Giả tưởng' },
    {id :2, name: 'Ngôn tình'},
    {id:3, name: 'Huyền bí'},
    {id:4, name: 'Kinh dị'},
    {id:5, name: 'Trinh thám'},
    {id: 6, name: 'Tâm linh'},
    {id :7, name:'Khoa học viễn tưởng' },
    {id :8, name: 'Du ký'},
    {id:9, name: 'Nấu ăn'},
    {id:10, name: 'Tuổi teen'},
    {id:11, name: 'Nghệ thuật'},
    {id: 12, name: 'Phát triển bản thân'},
    {id :13, name:'Động lực' },
    {id :14, name: 'Sức khỏe'},
    {id:15, name: 'Lịch sử'},
    {id:16, name: 'Du lịch'},
    {id:17, name: 'Sách hướng dẫn'},
    {id:18, name: 'Gia đình và xã hội'},
    {id :19, name:'Hài hước' },
    {id :20, name: 'Sách thiếu nhi'},
  ])
  return (
  <View style={styles.container}>
      <ScrollView horizontal={true}>
        {
            Book.map((item) => {
              return(
                <View key={item.id}>
                  <Text style={{fontWeight: 'bold', fontSize:12, color: 'black'}}>{item.name}</Text>
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
    backgroundColor: 'dodgerblue'
  },
  item: {
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 0,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 5,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 10,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  title: {
    fontSize: 32,
  },
});

export default TabType;

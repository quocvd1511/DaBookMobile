import React from 'react';
import {View, FlatList, StyleSheet, Text, Image,ScrollView } from 'react-native';

const DATA = [
{id :1, name:'Hài Hước' },
{id :2, name: 'Kinh dị'},
{id:3, name: 'Viễn tưởng'},
{id:4, name: 'Truyện ngắn'},
{id:5, name: 'Hú yaaaaaa'},
{id: 6, name: 'Yoloooooo'},
];

const Item = ({name}) => (
  <View style={styles.item}>
      <Text style={{fontWeight: 'bold', fontSize:12, color: 'black'}}>{name}</Text>
  </View>
);

const TabType = () => 
{
  const renderItem = ({item}) => (
    <Item name={item.name}/>
  );

  return (
  <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        horizontal
      />
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
    marginTop: 5,
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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  title: {
    fontSize: 32,
  },
});

export default TabType;
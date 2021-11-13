import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Image,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const DATA = [
    {id :1, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
    {id :2, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
    {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
    {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg'},
    {id:5, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg'},
    {id: 6, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg'},
    ];
    
    const Item = ({ name,price,img }) => (
      <View style={styles.item}>
        <Image style={{height:140, width:90, borderRadius: 5}} source={{uri:img}}/>
        <View style={{paddingLeft: 15, paddingTop: 10,marginBottom: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{paddingLeft: 5, color: 'black', fontWeight: 'bold', fontSize: 13}}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/author.png')}/>
                <Text style={{paddingLeft: 5,color: 'black'}}>Tác giả: JK Rolling</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/bookname.png')}/>
                <Text style={{paddingLeft: 5,color: 'black'}}>Thể loại: Huyền bí</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/star.png')}/>
                <Text style={{paddingLeft: 5,color: 'black'}}>Đánh giá: 10000</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image style={{height:20,width:20, tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
                <Text style={{paddingLeft: 5,color: 'black'}}>Giá: 10000</Text>
            </View>
        </View>


      </View>
    );
    
    const ListRank = () => 
    {
      const renderItem = ({ item}) => (
        <Item name={item.name} price={item.price} img={item.img}/>
      );
    
      return (
        <ScrollView nestedScrollEnabled={true}>
          <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 5}}>Bảng xếp hạng đánh giá chung</Text>
          <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={true}
          />
        </View>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding:10,
        borderRadius: 5,
      },
      item: {
        width: windowWidth,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 0,
        paddingRight:0,
        flexDirection: 'row',
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

export default ListRank
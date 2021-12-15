import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView,LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;



class ListBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: []
    };
  }

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/')
      .then((response) => {
        const data = response.books;
        this.setState({ Book: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }
displayBookList = (Book) => {

    if (!Book.length) return null;

    return Book.map((book) => (
     <View style={styles.item}>
              <Image style={styles.image} source={{uri:item.hinhanh}}/>
              <View  style={{paddingLeft:5 }}>
                <Text style={styles.book_name}
                      numberOfLines={2}
                      ellipsizeMode='tail'>{item.tensach}</Text>
                <Text></Text>
                
                <View style={{margin:10, marginTop:-4, flexDirection:'row', alignItems:'flex-start'}}>
                  <Image style={{height:24,width:24,tintColor:'dodgerblue'}} source={require('../asset/icon/cost.png')}/>
                  <Text style={styles.book_price}>  {item.giaban} đ</Text>
                </View>
              </View>
            </View>
    ));
  };


  
  render() {

    //console.log('State: ', this.state);

    //JSX
    return(
       <View style={{backgroundColor:'#f3f3f3'}}>
      <Text style={{paddingLeft: 5, color:'black', fontWeight:'600',fontSize:15,marginTop: 30}}>Tất cả các sách</Text>
      <ScrollView contentContainerStyle={styles.container}>
          {this.displayBookList(this.state.Book)}
      </ScrollView>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  item: {
    width: (windowWidth - 18) /2,
    paddingTop: 10,
    marginTop: 5,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

  },

  image: {
    marginTop: 0,
    resizeMode: "contain",
    height: (windowWidth - 18) /2,
    width: (windowWidth - 18) /2,
  },

  book_name: {
    fontWeight: '500', 
    fontSize: 14, 
    color: 'black',
    lineHeight: 20,
    margin: 10,
    marginBottom: 0,
  },

  book_price :{
    color: 'red', 
    fontSize: 15
  },

  title: {
    fontSize: 32,
  },
});

export default ListBook;
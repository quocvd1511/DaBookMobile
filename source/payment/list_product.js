import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native';



const windowWidth = Dimensions.get('window').width;
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id :1, name: 'Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 3},
        {id :2, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg', amountTaken: 4},
        {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg', amountTaken: 2},
        {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 1},
        ],
      ids: [],
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
        <Image source={{uri:item.img}} style={styles.imageStyle} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}  
                  numberOfLines={2}
                  ellipsizeMode='tail'>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Text>SL: {item.amountTaken}</Text>
              <Text style={styles.priceStyle}>{item.price} đ</Text>
            </View>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  render() {
    return (
      <SafeAreaView>
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'700',fontSize:20,marginTop: 10, marginBottom: 5}}>Thông tin giỏ hàng</Text>
        <Text style={{height: 90, padding: 10, paddingTop:0, paddingBottom:0, backgroundColor:'#CCFFCC', color:'#339900', fontWeight:'500',fontSize:16, marginTop: 5, marginBottom: 5, borderRadius: 5,borderStyle: 'solid', borderWidth: 1, borderColor: '#00CC00'}}>
          <Image style={styles.icon_dabookdeli} source={require('../asset/icon/dabook_deli.png')}/>
          Giao hàng trong vòng 5 ngày
        </Text>

        <FlatList style={{marginBottom: 55}}
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={this.renderItem}
        />
        <View style={styles.bottomView}>
          <View style={styles.textBottom}>
          <Text style={{fontSize: 18, color: 'black'}}>Tổng cộng</Text>
          <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>0 đ</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#C84B31'}}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1da1f2',
    backgroundColor: '#f0f8ff',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
  
  },

  nameContainer: {
    flexDirection: 'row',
  },

  nameTxt: {
    marginLeft: 10,
    width: 200,
    fontWeight: '600',
    color: '#333',
    fontSize: 18,
  },

  end: {
    marginLeft: 10,
    marginTop: 6,
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceStyle: {
    fontWeight: '600',
    color: 'red',
    width: 90,
    marginRight: 0,
    alignItems: 'center',
    borderRadius: 3,
    fontSize: 17,
  },

  imageStyle: {
    resizeMode: 'contain',
    width: 100, 
    height: 100, 
    marginRight: 0,
    marginLeft: 10,
  },

  icon_dabookdeli: {
    resizeMode: 'contain',
    width: 130, 
    height: 56, 
    marginTop: -5,
  },

  bottomView:{
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor:'#C2FFF9',
    bottom: 0,
    alignItems: 'center',
  },

  textBottom: {
    fontWeight: '600',
    paddingLeft: 30,
    fontSize: 25,
    marginRight: 130,
  },

  buyButton: {
    backgroundColor: '#FFE652',
    width: 150,
    borderRadius: 6,
    fontSize: 20,
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  }
  
});

export default ListProduct;
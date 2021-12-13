import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id :1, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 3},
        {id :2, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg', amountTaken: 4},
        {id:3, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg', amountTaken: 2},
        {id:4, name: 'Harry Potter 1', price:'100000', img:'https://www.archipanic.com/wp-content/uploads/2021/05/Harry-Potter-book-cover-by-AMDL-Circle-for-Salani-Editore-VII.jpg', amountTaken: 1},
        {id:5, name: 'Harry Potter 2', price:'100000', img:'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg', amountTaken: 3},
        {id: 6, name: 'Harry Potter 3', price:'100000', img:'https://i.pinimg.com/originals/9e/dc/30/9edc30d2b8a20c5f4893977e80e80cbc.jpg', amountTaken: 3},
        ],
      ids: [],
    };
  }

//   isChecked = (itemId) => {
//     const isThere = this.state.ids.includes(itemId);
//     return isThere;
//   };

//   toggleChecked = (itemId) => {
//     const ids = [...this.state.ids, itemId];

//     if (this.isChecked(itemId)) {
//       this.setState({
//         ...this.state,
//         ids: this.state.ids.filter((id) => id !== itemId),
//       });
//     } else {
//       this.setState({
//         ...this.state,
//         ids,
//       });
//     }
//   };

//   onChangeQual(index,type)
//   {
//     const calls = this.state.calls
//     let cantd = calls[index].amountTaken;

//     if (type) {
//      cantd = cantd + 1
//      calls[index].amountTaken = cantd
//      this.setState({calls:calls})
//     }
//     else if (type==false&&cantd>=2){
//      cantd = cantd - 1
//      calls[index].amountTaken = cantd
//      this.setState({calls:calls})
//     }
//     else if (type==false&&cantd==1){
//       calls.splice(index,1)
//      this.setState({calls:calls})
//     } 
//   }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
        {/* <CheckBox
            // iconRight
            checkedIcon="check-square"
            uncheckedIcon="square-o"
            checked={this.isChecked(item.id)}
            onPress={() => this.toggleChecked(item.id)}
          /> */}
        <Image source={{uri:item.img}} style={styles.imageStyle} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Text style={styles.priceStyle}>
              {item.price} đ
              </Text>
              <Text>Số lượng: {item.amountTaken}</Text>
            </View>
            {/* <View style={{flexDirection:'row', alignItems:'center',  marginRight: 0, padding: 10 }}>
                           <TouchableOpacity onPress={()=>this.onChangeQual(index,false)}>
                             <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
                           </TouchableOpacity>
                           <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.amountTaken}</Text>
                           <TouchableOpacity onPress={()=>this.onChangeQual(index,true)}>
                             <Icon name="ios-add-circle" size={30} color={"#33c37d"} />
                           </TouchableOpacity>
            </View> */}
          </View>
          {/* <TouchableOpacity style={{flexDirection:'row', alignItems:'center',  marginRight: 0, paddingLeft: 50 }}>
                <Icon name="trash" size={25} color={"#33c37d"} />
          </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    );
  };


  render() {
    return (
      <SafeAreaView>
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 5}}>Thông tin giỏ hàng</Text>
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
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#C84B31'}}>Mua Hàng</Text>
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
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
  
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // width: 270,
  },
  nameTxt: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#222',
    fontSize: 20,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceStyle: {
    fontWeight: '600',
    color: 'red',
    paddingLeft: 10,
    width: 90,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3,
    fontSize: 18,
  },
  imageStyle: {
    width: 85, 
    height: 120, 
    marginRight: 20
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
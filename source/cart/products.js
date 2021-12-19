import axios from 'axios';
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
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;



// const navigation = useNavigation(); 

// function GetData(){
//   const route = useRoute();
//     const username = route.params.username;
//     return username;
// }

class ListProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Book:null,
      Giohang: null,
      Total: 0,
      ids: [],
    };
  }

  // Lấy dữ liệu cho Giohang
  getDataGH(){
    const Book = this.state.Book;
    this.setState({Giohang: Book["giohang"]})
  }

  // Tạo giá trị cho biến username
  getParams(){
    const { navigation } = this.props;
    const username = 'hongcute'
    return username;
  }

  // Lấy dữ liệu giỏ hàng của khách hàng
  async componentDidMount() {
    const username = this.getParams();
    console.log(username);
    const request = await axios.get('http://192.168.43.180:3000/chitietgiohang/' + username);
    const data = request.data.thongtintk;
    console.log(data);
    this.setState({ Book: data})
    this.getDataGH();
}

// Checkbox
  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };

  toggleChecked = (itemId, index) => {
    const ids = [...this.state.ids, itemId];
    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter(
          (id) => id !== itemId),
        
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
    this.SumTotal(index);
  };

  // Tính tổng tiền sản phẩm đã check
  SumTotal(index){
    let Giohang = this.state.Giohang;
    let gia = Giohang[index].giaban
    let soluong = Giohang[index].soluong
    const total = this.state.Total;
    let new_total = total + gia*soluong
    this.setState({Total:new_total})
  }

  // Tăng giảm số lượng
  onChangeQual(index,type)
  {
    const Giohang = this.state.Giohang
    let cantd = Giohang[index].soluong;

    if (type) {
     cantd = cantd + 1
     Giohang[index].soluong = cantd
     this.setState({Giohang:Giohang})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     Giohang[index].soluong = cantd
     this.setState({Giohang:Giohang})
    }
    else if (type==false&&cantd==1){
      Book.splice(index,1)
     this.setState({Giohang:Giohang})
    } 
  }

  // Xóa sản phẩm khỏi giỏ hàng
  removeBook(index) {
    var array = [...this.state.Giohang]; // make a separate copy of the array
     let Giohang = this.state.Giohang;
    let tensach = Giohang[index].tensach
    let username = this.getParams();
    array.splice(index, 1);
    this.setState({Giohang: array});
    const response = axios.get('http://192.168.43.180:3000/xoasanpham/' + username + "/" + tensach);
    const data = response.data;
  }


  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
        <CheckBox
            // iconRight
            checkedIcon="check-square"
            uncheckedIcon="square-o"
            checked={this.isChecked(item.tensach)}
            onPress={() => this.toggleChecked(item.tensach, index)}
          />
        <Image source={{uri:item.hinhanh}} style={styles.imageStyle} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.tensach}</Text>
            </View>
            <View style={styles.end}>
              <Text style={styles.priceStyle}>
              {item.giaban}000 đ
              </Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',  marginRight: 0, padding: 10 }}>
              <TouchableOpacity onPress={()=>this.onChangeQual(index,false)}>
                <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
              </TouchableOpacity>

              <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:15}}>{item.soluong}</Text>

              <TouchableOpacity onPress={()=>this.onChangeQual(index,true)}>
                <Icon name="ios-add-circle" size={30} color={"#33c37d"} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center',  marginRight: 0, paddingLeft: 50 }} onPress={() => this.removeBook(index)}>
                <Icon name="trash" size={25} color={"#33c37d"}/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };


  render() {    
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'800',fontSize:20,marginTop: 5}}>Thông tin giỏ hàng</Text>
        <FlatList style={{marginBottom: 55}}
          extraData={this.state}
          data={this.state.Giohang}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={this.renderItem}
        />
        <View style={styles.bottomView}>
          <View style={styles.textBottom}>
          <Text style={{fontSize: 18, color: 'black'}}>Tổng cộng</Text>
          <Text  style={{fontSize: 25, fontWeight: 'bold', color: '#C84B31'}}>{this.state.Total} đ</Text>
          </View>
          <TouchableOpacity style={styles.buyButton} onPress={() => this.props.navigation.navigate('Payment')}>
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
    fontSize: 15,
    width: 100,
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
    fontSize: 15,
  },
  imageStyle: {
    width: 85, 
    height: 120, 
    marginRight: 20
  },
  bottomView:{
    flexDirection: 'row',
    position: 'absolute',
    width: windowWidth,
    height: 60,
    backgroundColor:'#C2FFF9',
    bottom: 0,
    alignItems: 'center',
  },
  textBottom: {
    fontWeight: '600',
    paddingLeft: 30,
    fontSize: 25,
    marginRight: (windowWidth - 280),
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
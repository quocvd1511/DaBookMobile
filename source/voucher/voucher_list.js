import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

const ListVoucher = () => 
{
  const [Book, setBook] = useState([
    {id :1, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :2, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :3, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :4, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :5, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :6, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
    {id :7, name: 'Free Ship', price:'100%', img:'https://cdn.shopify.com/s/files/1/0194/4221/products/shipping-free-512_grande.png?v=1587611827'},
    {id :8, name: 'Sale', price:'100%', img:'https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/sale_copy-512.png'},
  ])
  return (
    <View>
      <View style={styles.container}>
      <ScrollView>
        {
          Book.map((item) => {
            return(
              <View key={item.id} style={styles.item}>
                  <View style={{backgroundColor: 'dodgerblue', padding: 25, borderRadius:5}}>
                      <Image style={{height:50, width:50,tintColor: 'white'}} source={{uri:item.img}}/>
                  </View>

                  <View style={{marginLeft:10}}>
                      <Text style={{color:'black', fontSize: 12}}>Loại: {item.name}</Text>
                      <Text style={{color: 'black', fontSize: 12}}>Giảm: {item.price}</Text>
                      <Text style={{color: 'black', fontSize: 12}}>HSD: 12/12/3000</Text>
                  </View>

                  <Pressable
                    backgroundColor={'dodgerblue'}
                    padding={5}
                    paddingLeft={20}
                    paddingRight={20}
                    borderRadius={5}
                    marginLeft={50}
                    marginTop={45}
                  >
                    <Text style={{color:'white'}}>Lưu</Text>
                  </Pressable>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  item: {
    backgroundColor: 'white',
    height:100,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
    borderRadius:5,
    paddingLeft: 0,
    paddingRight:0,
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.8,
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

export default ListVoucher;
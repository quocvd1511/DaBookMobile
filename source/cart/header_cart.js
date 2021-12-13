import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';


export default function HeaderCart() {
    return (
      <View style={{ }}>
          <View style={styles.main}>
          <Text style={styles.text_header}>GIỎ HÀNG</Text>
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    main:{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_header:{
        textAlign:'center',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color:'white',
    },
});
import * as React from 'react';
import { View,  StyleSheet, Image} from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const Select = () => {
  const [value, setValue] = React.useState('first');

  return (
    <View style={{backgroundColor: '#FFF'}}>
        <Text style={{paddingLeft: 10, color:'black', fontWeight:'700',fontSize:20,marginTop: 10, marginBottom: 5}}>Chọn hình thức thanh toán</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.select_pay}>
            <RadioButton value="first" />
            <Image style={styles.icon_pay} source={require('../asset/icon/pay.png')}/> 
            <Text style={{fontSize: 16, marginLeft: 5}} >Thanh toán bằng tiền mặt</Text>
        </View>
        <View style={styles.select_pay}>
            <RadioButton value="second" />
            <Image style={styles.icon_paymomo} source={require('../asset/icon/MoMo_Logo.png')}/> 
            <Text style={{fontSize: 16, marginLeft: 5}} > Thanh toán bằng ví Momo</Text>
        </View>
        </RadioButton.Group>
    </View>

  );
};

const styles = StyleSheet.create({
    select_pay: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
  
    icon_pay: {
      resizeMode: 'contain',
      width: 54, 
      height: 54, 
      marginTop: 5,
    },

    icon_paymomo: {
        resizeMode: 'contain',
        width: 40, 
        height: 40, 
        marginTop: 0,
        marginLeft: 6,
    }
    
});
  

export default Select;
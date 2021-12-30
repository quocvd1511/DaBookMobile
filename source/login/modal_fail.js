import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput, Modal} from 'react-native';

export default function ModalSuccess()
{
    const [modalVisible, setModalVisible] = React.useState(false);
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.view}>
            <View style={styles.view2}></View>
            <View style={styles.view3}>
                <Image style={{marginTop:10, width: 80, height: 80, alignSelf:'center', marginBottom: 10}} source={require('../asset/icon/fail.png')}/>
                <Text style={{fontSize: 18, fontWeight: '600', color:'#333'}}>Đăng nhập không thành công!</Text>
            </View>
        </View>

      </Modal>
    )
}


const styles=StyleSheet.create({
    view: {
        alignSelf:'center',
        width:300, 
        height: 190, 
        backgroundColor:'#fff', 
        borderColor: 'red',
        borderRadius: 10,
        marginTop: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },

    view2: {
        width: 300,
        height: 40,
        backgroundColor:'#eb4924', 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    },

    view3: {
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    }
   
})
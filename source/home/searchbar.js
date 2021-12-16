import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, {Easing} from 'react-native-reanimated';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function SearchBar() {
    const navigation = useNavigation(); 
    const [text,setText] = React.useState([])

    return(
        <View style={styles.main}>
                <Image style={styles.logo} source={require('../asset/icon/logo.png')}/>
                <TextInput style={styles.text_input} placeholder='  Tìm kiếm sách của bạn...'
                     onChangeText={text => setText(text)}
                     value={text}
                ></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchBook', {text: text})}>
                    <Image style={{height:38, width: 38, tintColor:'white', marginRight: 10,}} source={require('../asset/icon/icon_search.png')} 
                     />
                </TouchableOpacity>
        </View>
    )
    console.log(text);
}


const styles=StyleSheet.create({
    main:{
        backgroundColor: '#1A94FF',
        padding:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 68,
        width: 68,
        marginRight: 10,
        marginLeft: 10,
    },
    search_input:{
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text_input:{
        backgroundColor: 'white',
        width: 230,
        height: 30,
        right: 5,
        borderRadius: 30,
        padding: 6,
      
    },

    button:{
        alignContent: 'center',
        justifyContent: 'center'
    }
})




  
import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TouchableOpacity, TextInput} from 'react-native';

export default function HistoryLookup()
{
    return(
        <View style={styles.view}>
            <View style={styles.view3}>
                <Text style={{fontSize: 17, fontWeight: '600', color:'#333', marginTop:15}}>Bạn chắc chắn muốn xóa sản phẩm?</Text>
            </View>
            <View style={styles.view2}>
            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.button1
                ]
                }
                >
                <Text style={{color:'#fff', fontSize: 17, margin: 5, marginTop:7, textAlign:'center'}}>  Không </Text>
            </Pressable>
            <Pressable
                style={
                    ({pressed}) =>[{

                        opacity: pressed ? 0.5:1
                    },
                    styles.button2
                ]}
                >
                <Text style={{color:'#fff', fontSize: 17, margin: 5, marginTop:7, textAlign:'center'}}>  Xóa  </Text>
            </Pressable>

            </View>

        </View>
    )
}


const styles=StyleSheet.create({
    view: {
        alignSelf:'center',
        width:320, 
        height: 126, 
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
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        margin: 10,
        marginTop:30,
        justifyContent:'flex-start'
    },

    view3: {
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,  
    },

    button1: {
        backgroundColor:'#1A94FF', 
        height:40, 
        width: 100,
        marginBottom:-5, 
        marginTop:-5, 
        borderRadius:5,
        marginRight: 10
    },

    button2: {
        backgroundColor:'#ff424e', 
        height:40, 
        width: 100,
        marginBottom:-5, 
        marginTop:-5, 
        borderRadius:5,
        marginLeft: 10,
    }
   
})
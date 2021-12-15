import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, Pressable, TextInput} from 'react-native';

export default function HistoryLookup()
{
    return(
        <ScrollView>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../asset/icon/bookname.png')}/>
            </View>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    body:{
        backgroundColor: 'dodgerblue',
        height: 150,
    },

    textinput:{
        backgroundColor: 'white',
    },

    card:{
        marginTop: 15,
        borderWidth: 0.5,
        height: 120,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    image:{
        height: 60,
        width: 60,
        margin: 10,
        backgroundColor: 'dodgerblue'
    }
})
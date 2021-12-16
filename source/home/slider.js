import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react'
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const {width} = Dimensions.get("window")
const height = width * 0.4

let list_slide=[
    <Image source={require('../asset/icon/banner6.png')}/>,
    <Image source={require('../asset/icon/banner7.png')}/>,
    <Image source={require('../asset/icon/banner8.png')}/>
]

export default function Slider()
{
    const navigation = useNavigation(); 

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
            <ScrollView
                horizontal 
                pagingEnabled 
                style={{width, height}}
                showsHorizontalScrollIndicator={false}
                >
                <Image style={{width, height}} source={require('../asset/icon/banner6.png')}/>
                <Image style={{width, height}} source={require('../asset/icon/banner7.png')}/>
                <Image style={{width, height}} source={require('../asset/icon/banner8.png')}/>
            </ScrollView>
            <View style={{flexDirection: 'row', position:'absolute', bottom:0, alignSelf:'center'}}>
                {
                    list_slide.map((i,k) => (
                        <Text key={k} style={{color:'white',margin: 10}}>⬤</Text>
                    ))
                }
            </View>
            </TouchableOpacity>
    )
}
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const {width} = Dimensions.get("window")
const height = width * 0.5

let list_slide=[
    'https://wallpaperaccess.com/full/1782494.jpg',
    'https://wallpaperforu.com/wp-content/uploads/2020/08/vector-wallpaper-20082715094222-scaled.jpg',
    'https://wallpaperaccess.com/full/215574.jpg'
]

export default function Slider()
{
    return(
        <View>
            <ScrollView 
                horizontal 
                pagingEnabled 
                style={{width,height}}
                showsHorizontalScrollIndicator={false}
                >
                {
                    list_slide.map((image, index) => (
                        <Image
                            key={index}
                            source={{uri: image}}
                            style={{width,height}}
                            />
                    ))
                }
            </ScrollView>
            <View style={{flexDirection: 'row', position:'absolute',bottom:0, alignSelf:'center'}}>
                {
                    list_slide.map((i,k) => (
                        <Text key={k} style={{color:'white',margin: 10}}>⬤</Text>
                    ))
                }
            </View>
        </View>
    )
}
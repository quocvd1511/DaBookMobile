import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VanHoc from './Vanhoc';
import TrinhTham from './Trinhtham';
import { useNavigation } from '@react-navigation/native';
import TuoiTeen from './Tuoiteen';
import NgonTinh from './Ngontinh';
import KinhDi from './Kinhdi';
import HaiHuoc from './Haihuoc';
import PhongSu from './Phongsu';
import book_detail_home from '../book_detail/book_detail';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRoute } from '@react-navigation/native';



function HomeScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TabRanks() {
  const route = useRoute();

  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
    screenOptions={
    {
      tabBarScrollEnabled: true,
      tabBarStyle: {backgroundColor: '#fff', height: 40, justifyContent: 'center',}
    }}
    >
      <Tab.Screen name="Văn học" component={VanHoc} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Trinh Thám" component={TrinhTham} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Tuổi teen" component={TuoiTeen} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Hài hước" component={HaiHuoc} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Ngôn Tình" component={NgonTinh} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Kinh dị" component={KinhDi} initialParams={{username: route.params.username}}/>
      <Tab.Screen name="Phóng sự" component={PhongSu} initialParams={{username: route.params.username}}/>
    </Tab.Navigator>
    //  </NavigationContainer>
  );
}
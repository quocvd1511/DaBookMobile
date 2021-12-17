import * as React from 'react';
import { Text, View } from 'react-native';
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


function HomeScreen() {

  const navigation = useNavigation(); 
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
  return (

    <Tab.Navigator
    screenOptions={
    {
      tabBarScrollEnabled: true,
      tabBarStyle: {backgroundColor: 'dodgerblue', height: 35, justifyContent: 'center',}
    }}
    >
      <Tab.Screen name="Văn học" component={VanHoc} />
      <Tab.Screen name="Trinh Thám" component={TrinhTham} />
      <Tab.Screen name="Hài hước" component={HaiHuoc} />
      <Tab.Screen name="Tuổi teen" component={TuoiTeen} />
      <Tab.Screen name="Ngôn Tình" component={NgonTinh} />
      <Tab.Screen name="Kinh dị" component={KinhDi} />
      <Tab.Screen name="Phóng sự" component={PhongSu} />
    </Tab.Navigator>
  );
}
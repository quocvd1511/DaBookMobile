import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './header';
import ListVoucher from './voucher_list';

export default function VoucherScreen() {
  return (
    <ScrollView>
      <Header/>
      <ListVoucher/>
    </ScrollView>
  );
}

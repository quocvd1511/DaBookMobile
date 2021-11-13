import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import HeaderUser from './header_user';
import UserAccount from './user_account';
import Order from './order';
import OwnVoucher from './own_voucher';
import Caring from './caring';

export default function UserScreen() {
  return (
    <ScrollView>
      <HeaderUser/>
      <UserAccount/>
      <Order/>
      <OwnVoucher/>
      <Caring/>
    </ScrollView>
  );
}

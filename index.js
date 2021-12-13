/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './source/user/history_lookup';
// import App from './source/user/user_detail';
// import App from './source/user/voucher_freeship_detail'
// import App from './source/user/voucher_sale_detail'
// import App from './source/user/confirm_detail';
// import App from './source/user/own_voucher' 
import App from './source/user/user' 
// import App from './source/user/packing_detail' 

// import App from './source/user/shipping_detail'



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

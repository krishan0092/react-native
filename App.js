import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import GiftChat from './src/Chat/GiftChat';
import Calender from './src/calender/Calender';
import Navigator from './src/ChatWithFirebase/AppNavigator';
import Loader from './src/ChatWithFirebase/screens/Loader';
import Redux from './src/Redux Toolkit/Redux';
import {Provider} from 'react-redux';
import myStore from './src/Redux Toolkit/Store';
import AppNavigator from './src/newTask/appNavigator';
import GoogleSignIn from './src/GoggleSign';
import {
  getFCMToken,
  getnotification,
  requestUserPermission,
} from './src/utl/FirebaseMesseging';
import Responsive from './src/Responsivee';

const App = () => {
  useEffect(() => {
    getFCMToken();
    requestUserPermission();
    getnotification();
  }, []);
  return (
    // <View style={{flex: 1}}>
    //   <Navigator/>
    // </View>
    <View style={{flex: 1}}>
      <Responsive />
    </View>
  );
};

export default App;

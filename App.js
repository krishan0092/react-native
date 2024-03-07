import {View, Text} from 'react-native';
import React from 'react';
import GiftChat from './src/Chat/GiftChat';
import Calender from './src/calender/Calender';
import Navigator from './src/ChatWithFirebase/AppNavigator';
import Loader from './src/ChatWithFirebase/screens/Loader';
import Redux from './src/Redux Toolkit/Redux';
import {Provider} from 'react-redux';
import myStore from './src/Redux Toolkit/Store';

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <Navigator/>
    // </View>
    <View style={{flex: 1}}>
      <Provider store={myStore}>
        <Navigator />
      </Provider>
    </View>
  );
};

export default App;

import {View, Text, Button} from 'react-native';
import React from 'react';
import GiftChat from './src/Chat/GiftChat';
import Calender from './src/calender/Calender';
import Navigator from './src/ChatWithFirebase/AppNavigator';
import Loader from './src/ChatWithFirebase/screens/Loader';
import Redux from './src/Redux Toolkit/Redux';
import {Provider} from 'react-redux';
import myStore from './src/Redux Toolkit/Store';
import AppNavigator from './src/newTask/appNavigator';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <Navigator/>
    // </View>
    <View style={{flex: 1}}>
      
      
      <Button
        title={'Sign in with Google'}
        onPress={() => {
          GoogleSignin.configure({
            androidClientId:
              '645433576496-bvlq87uc1964422tmlvh7q9i3e9ra1sd.apps.googleusercontent.com',
            iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
          });
          GoogleSignin.hasPlayServices()
            .then(hasPlayService => {
              if (hasPlayService) {
                GoogleSignin.signIn()
                  .then(userInfo => {
                    console.log(JSON.stringify(userInfo));
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }}
      />
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        //onPress={Signin}
        
      />
    </View>
  );
};

export default App;

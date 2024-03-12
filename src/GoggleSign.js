import {View, Text, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GoogleSignIn = () => {
  return (
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
    </View>
  );
};

export default GoogleSignIn;

import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      ChkLogin();
    }, 2000);
  });
  const ChkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      navigation.navigate('Chats');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/Image/speak.png')}
        style={{width: 70, height: 70}}
      />
      <Text style={styles.text}>ChatApp With Firebase</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

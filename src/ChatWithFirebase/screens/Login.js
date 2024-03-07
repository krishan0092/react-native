import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Loader from './Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const loginUser = () => {
    setVisible(true);
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(res => {
        setVisible(false);
        if (res.docs !== '') {
          console.log(JSON.stringify(res.docs[0].data()));
          saveData(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId,
          );
        }
      })
      .catch(err => {
        setVisible(false);
        console.log(err);
        Alert.alert('data not found');
      });
  };
  const saveData = async (name, email, userId) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
    navigation.navigate('Chats');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.sign}>Login</Text>
      </View>

      <TextInput
        placeholder="Email"
        style={[styles.input, {marginTop: 20}]}
        onChangeText={txt => setEmail(txt)}
        value={email}
      />

      <TextInput
        placeholder="Password"
        onChangeText={txt => setPassword(txt)}
        value={password}
        style={[styles.input, {marginTop: 20}]}
      />

      <TouchableOpacity style={styles.btn} onPress={() => loginUser()}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <Text
        style={[styles.loginbtn, {marginTop: 20}]}
        onPress={() => navigation.navigate('SignUp')}>
        Or Sign Up
      </Text>
      <Loader visible={visible} />
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 24,
  },
  sign: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 25,
    paddingLeft: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: '#62717a',
    padding: 10,
    borderRadius: 15,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: '400',
  },
  loginbtn: {
    fontSize: 20,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'black',
  },
});

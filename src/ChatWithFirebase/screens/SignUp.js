import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import firebase from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const registerUser = () => {
    const userId = uuid.v4();
    firebase()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        confirm: confirm,
        userId: userId,
      })
      .then(
        () => console.log('user created successfully'),
        setName(''),
        setConfirm(''),
        setMobile(''),
        setConfirm(''),
        setEmail(''),
        setPassword(''),
        navigation.navigate('Login'),
      )
      .catch(err => console.log('error...', err));
  };
  const validate = () => {
    let isVaild = true;
    if (
      name == '' ||
      email == '' ||
      mobile == '' ||
      password == '' ||
      confirm == '' ||
      confirm !== password
    ) {
      isVaild = false;
    }
    return isVaild;
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.sign}>SignUp</Text>
      </View>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={txt => setName(txt)}
        value={name}
      />
      <TextInput
        placeholder="Email"
        style={[styles.input, {marginTop: 20}]}
        onChangeText={txt => setEmail(txt)}
        value={email}
      />
      <TextInput
        placeholder="Mobile"
        style={[styles.input, {marginTop: 20}]}
        onChangeText={txt => setMobile(txt)}
        maxLength={10}
        keyboardType="number-pad"
        value={mobile}
      />
      <TextInput
        placeholder="Password"
        onChangeText={txt => setPassword(txt)}
        secureTextEntry={true}
        value={password}
        style={[styles.input, {marginTop: 20}]}
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={txt => setConfirm(txt)}
        value={confirm}
        secureTextEntry={true}
        style={[styles.input, {marginTop: 20}]}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (validate()) {
            registerUser();
          } else {
            Alert.alert('please fill correct data');
          }
        }}>
        <Text style={styles.btnTxt}>Sign up</Text>
      </TouchableOpacity>
      <Text
        style={[styles.loginbtn, {marginTop: 20}]}
        onPress={() => navigation.goBack('SignUp')}>
        Or Login
      </Text>
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

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const Data = () => {
    let show = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    // console.log(show);
    navigation.navigate('showData', {show});
    setEmail('');
    setMobile('');
    setPassword('');
    setName('');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Fill Details</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
        placeholderTextColor={'#000'}
      />
      <TextInput
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={txt => setEmail(txt)}
        style={[styles.input, {marginTop: 20}]}
        placeholderTextColor={'#000'}
      />
      <TextInput
        placeholder="Mobile"
        value={mobile}
        maxLength={10}
        keyboardType="phone-pad"
        onChangeText={txt => setMobile(txt)}
        style={[styles.input, {marginTop: 20}]}
        placeholderTextColor={'#000'}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={txt => setPassword(txt)}
        style={[styles.input, {marginTop: 20}]}
        placeholderTextColor={'#000'}
      />
      <TouchableOpacity style={styles.BTN} onPress={Data}>
        <Text style={styles.txt2}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginTop: 60,
  },
  input: {
    width: '85%',
    height: 50,
    borderWidth: 0.5,
    borderColor: '#666',
    alignSelf: 'center',
    borderRadius: 15,
    paddingLeft: 15,
    marginTop: 30,
    fontSize: 17,
    opacity: 0.5,
    color: '#000',
  },
  BTN: {
    width: '80%',
    height: 50,
    borderWidth: 0.5,
    backgroundColor: '#2d5e09',
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  txt2: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
});

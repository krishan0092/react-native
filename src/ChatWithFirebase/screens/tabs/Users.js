import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

let id = '';
const Users = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let temp = [];
    id = await AsyncStorage.getItem('USERID');
    let email = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs != []) {
          res.docs.map(item => temp.push(item.data()));
        }
        setUser(temp);
      });
  };
  const renderUser = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.usertem}
        onPress={() => navigation.navigate('Message', {data: item, id: id})}>
        <Image
          source={require('../../../assets/Image/user.png')}
          style={styles.icon}
        />
        <Text style={styles.itemtxt}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Chats With Firebase</Text>
      </View>
      <FlatList data={user} renderItem={renderUser} />
    </View>
  );
};

export default Users;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'grey',
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#62717a',
  },
  usertem: {
    height: 60,
    width: Dimensions.get('window').width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  icon: {
    width: 35,
    height: 35,
  },
  itemtxt: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    marginLeft: 20,
  },
});

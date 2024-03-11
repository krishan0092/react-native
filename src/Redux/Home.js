import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Decrement, Increment, apiData} from '../Redux/Action/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(State => State);

  const Call = () => {
    apiData().then(res => {
      console.log(res.data, '.........');
    });
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          dispatch(Increment(), Call());
          navigation.navigate('Count');
        }}
        style={styles.btn}>
        <Text style={styles.txt}>Increase</Text>
      </TouchableOpacity>
      <Text style={[styles.txt, {marginTop: 70}]}>{count}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch(Decrement());
        }}>
        <Text style={styles.txt}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#acbdb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: '#426a75',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  txt: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
});

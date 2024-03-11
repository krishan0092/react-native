import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';

const ShowData = ({route}) => {
  const [timer, setTimer] = useState(10);
  //console.log(route.params.show);
  const data = route.params.show;
  useEffect(() => {
    const interval = setInterval(() => {
      timer != 0 && setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <View style={styles.main}>
      {timer > 0 ? (
        <Text style={styles.text}> Wait 10 sec:{timer}</Text>
      ) : (
        Alert.alert('data is submited')
      )}
      {timer == 0 ? (
        <View>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.mobile}</Text>
          <Text style={styles.text}>{data.email}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default ShowData;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'center',
  },
});

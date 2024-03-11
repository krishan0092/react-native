import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Count = () => {
  const data = useSelector(state => state);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#acbdb0',
      }}>
      <Text
        style={{marginTop: 70, fontSize: 20, fontWeight: '400', color: '#fff'}}>
        {data}
      </Text>
    </View>
  );
};

export default Count;

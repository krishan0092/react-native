import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Users from './tabs/Users';
import Settings from './tabs/Settings';

const Chats = () => {
  const [select, setSelect] = useState(0);
  return (
    <View style={styles.container}>
      {select == 0 ? <Users /> : <Settings />}
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => setSelect(0)}>
          <Image
            source={require('../../assets/Image/group.png')}
            style={{tintColor: select == 0 ? '#fff' : '#aba8a1'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelect(1)}>
          <Image
            source={require('../../assets/Image/settings.png')}
            style={{tintColor: select == 1 ? '#fff' : '#aba8a1'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chats;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#62717a',
    width: '100%',
    height: 65,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

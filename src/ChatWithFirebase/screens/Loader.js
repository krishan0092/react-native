import {View, StyleSheet, Modal} from 'react-native';
import React from 'react';
import {WaveIndicator} from 'react-native-indicators';
const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.mian}>
        <View style={styles.modal}>
          <WaveIndicator size={50} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
const styles = StyleSheet.create({
  mian: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0.4)',
  },
  modal: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

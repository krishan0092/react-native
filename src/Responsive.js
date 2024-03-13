// use this responsive method portrait orientation mode..

import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';

const Responsive = () => {
  const styles = UseStyles();
  return (
    <View style={styles.root}>
      <View style={styles.left}></View>
      <View style={styles.right}></View>
    </View>
  );
};

export default Responsive;

function UseStyles() {
  const {height, width} = useWindowDimensions();
  return StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'row',
    },
    left: {
      width: width > 500 ? 300 : 100,
      backgroundColor: 'pink',
    },
    right: {
      flex: 1,
      backgroundColor: 'green',
    },
  });
}

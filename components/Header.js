import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style = {styles.textStyle}>
        Albums
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ffcfba',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#40281d",
  }
});

export default Header;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style = {styles.textstyle}>
        Albums
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
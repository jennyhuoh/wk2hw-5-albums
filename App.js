import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => {
  return ( 
    <View>
      <Header />
      <ScrollView>

        <AlbumList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <ScrollView>
      <Header />
      <AlbumList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default App;
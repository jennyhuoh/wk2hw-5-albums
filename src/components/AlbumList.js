import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import Album from "../albums.json"

const AlbumList = () => {
  return (
    <View style = {styles.allStyle}>
      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri: Album[0].url}}
          />
          <View>
            <Text style = {styles.singerNameStyle}>{Album[0].artist}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{uri: Album[0].image}}
        />
        <View style = {styles.whiteBoardStyle}>
          <Text style = {styles.albumnameStyle}>{Album[0].title}</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri: Album[1].url}}
          />
          <View>
            <Text style = {styles.singerNameStyle}>{Album[1].artist}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{uri: Album[1].image}}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>{Album[1].title}</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri: Album[2].url}}
          />
          <View>
            <Text style = {styles.singerNameStyle}>{Album[2].artist}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{uri: Album[2].image}}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>{Album[2].title}</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri: Album[3].url}}
          />
          <View>
            <Text style = {styles.singerNameStyle}>{Album[3].artist}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{uri: Album[3].image}}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>{Album[3].title}</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri: Album[4].url}}
          />
          <View>
            <Text style = {styles.singerNameStyle}>{Album[4].artist}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{uri: Album[4].image}}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>{Album[4].title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allStyle: {
    height: 2080,
    backgroundColor: "rgba(255, 209, 253,0.7)",
  },
  cardContainerStyle: {
    backgroundColor: "rgba(255, 209, 253,0.7)",
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 60,
    width: 60,
    marginTop: 30,
    marginLeft: 20,
  },
  singerNameStyle: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Arial",
  },
  imageStyle: {
    height: 300,
    width: 350,
    borderRadius: 20,
  },
  cardSectionStyle: {
    paddingTop: 5,
    backgroundColor: "rgba(255, 209, 253,0.7)",
    alignItems: "center",
  },
  whiteBoardStyle: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.7)",
    width: 350,
    height: 85,
    marginTop: 220,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },
  albumnameStyle: {
    fontSize: 23,
    marginTop: 35,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#363636",
  }
});

export default AlbumList;
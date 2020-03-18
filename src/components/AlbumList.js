import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AlbumList = () => {
  return (
    <View>
      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61e18f40e124f34970a304e59f1?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U5Mg==,xp_5,yp_5"
            }}
          />
          <View style = {styles.headerContentStyle}>
            <Text>王以太</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{
            uri: "https://omusic.friday.tw/img/album/1753856.jpg"
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  imageStyle: {
    height: 300,
    width: null,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  }
});

export default AlbumList;
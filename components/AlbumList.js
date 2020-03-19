import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const AlbumList = () => {
  return (
    <View style = {styles.allStyle}>
      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61e18f40e124f34970a304e59f1?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U5Mg==,xp_5,yp_5"
            }}
          />
          <View>
            <Text style = {styles.singerNameStyle}>王以太</Text>
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
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>演說家</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "https://obs.line-scdn.net/0hoMjyhl9zMGJXAByvwYBPNW1WMw1kbCNhMzZhYRRublYqYCc8ODN5DHQIbQUoNHc8OTN2B3ECK1N8ZHBmaDR5/w644"
            }}
          />
          <View>
            <Text style = {styles.singerNameStyle}>9m88</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{
            uri: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/002/021/30/0020213090.jpg&v=5d1c3f75&w=348&h=348"
          }}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>平庸之上</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "https://cw1.tw/CC/images/article/J1435024572824.jpg"
            }}
          />
          <View>
            <Text style = {styles.singerNameStyle}>陳綺貞</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{
            uri: "https://i.kfs.io/album/global/136440,1v1/fit/500x500.jpg"
          }}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>太陽</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "http://moviepic.manmankan.com/yybpic/yanyuan/8670.jpg"
            }}
          />
          <View>
            <Text style = {styles.singerNameStyle}>郭靜</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{
            uri: "https://s.zimedia.com.tw/s/2pw1Qs-0"
          }}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>下一個天亮</Text>
        </View>
      </View>

      <View style = {styles.cardContainerStyle}>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{
              uri: "https://i.kfs.io/artist/global/57683,0v3/fit/300x300.jpg"
            }}
          />
          <View>
            <Text style = {styles.singerNameStyle}>Nicki Minaj</Text>
          </View>
        </View>
      </View>
      <View style = {styles.cardSectionStyle}>
        <Image
          style = {styles.imageStyle}
          source = {{
            uri: "https://media.pitchfork.com/photos/5b19a58225d5df5ff053e405/2:1/w_790/DfHmTTYVMAAXKCo.jpg"
          }}
        />
        <View style = {styles.whiteBoardStyle}>
            <Text style = {styles.albumnameStyle}>Queen</Text>
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
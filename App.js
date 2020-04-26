import React from "react";
import { StyleSheet, View, Button } from "react-native";
import TrackPlayer from "react-native-track-player";

export default function App() {
  async function runSound() {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: "trackId",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        title: "Demo",
        artist: "Demo App",
      });
      TrackPlayer.updateOptions({
        stopWithApp: false,
      });
      TrackPlayer.seekTo(0);
      TrackPlayer.play();
    });
  }

  async function stopSound(){
    TrackPlayer.destroy();
  }

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={runSound}></Button>
      <Button title="Stop" onPress={stopSound}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

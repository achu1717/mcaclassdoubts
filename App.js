import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/backi.jpg")}
      style={styles.container}
    >
      <View style={styles.v1}>
        <Image
          source={require("./assets/rvslogo.png")}
          style={styles.rvslogo}
        ></Image>
        <Text style={styles.t1}>Education For Digital Era</Text>
      </View>
      <View style={styles.v2}></View>
      <View style={styles.v3}></View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  v1: {
    height: 500,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
  },

  rvslogo: {
    height: 200,
    width: 200,
    alignItems: "center",
  },
  v2: {
    backgroundColor: "#80ff00",
    height: 100,
    width: "100%",
  },
  v3: {
    backgroundColor: "#00bfff",
    height: 100,
    width: "100%",
  },
  t1: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

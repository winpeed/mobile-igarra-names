import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Igarra Names</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 60,
    textTransform: "uppercase",
    flexWrap: "wrap",
    fontWeight: "900",
    textAlign: "left",
    letterSpacing: 3,
    lineHeight: 70,
  },
});

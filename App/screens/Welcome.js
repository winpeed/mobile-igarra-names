import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

function Welcome() {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const screen = Dimensions.get("window");

  const fetchData = async () => {
    const response = await fetch(
      `https://igarranames.vercel.app/api/v1/names/`
    );
    const data = await response.json();
    setNames(
      data.data.filter((item) =>
        item.fields.engName.toLowerCase().startsWith("a")
      )
    );
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <Text style={styles.text}>Welcome</Text>
      ) : (
        <View>
          <Text style={styles.text}>IGARRA NAMES</Text>
          <Text style={[styles.modalText, { width: screen.width * 0.7 }]}>
            Over 120 Etuno names and counting...
          </Text>
        </View>
      )}
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
    flexWrap: "wrap",
    fontWeight: "900",
    textAlign: "left",
    letterSpacing: 3,
    lineHeight: 70,
    color: "yellow",
  },
  modalText: {
    marginBottom: 15,
    flexWrap: "wrap",
    fontSize: 25,
    marginVertical: 10,
    lineHeight: 32,
    color: "white",
  },
});

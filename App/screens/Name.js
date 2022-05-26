import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
} from "react-native";

function Name() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Meaning of Ametu</Text>
        <Text>Past deeds</Text>
        <Text>Share</Text>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Name;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
    paddingTop: 50,
    paddingBottom: 20,
  },
  text: {
    fontSize: 22,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderColor: "#bdc3c7",
    borderBottomWidth: 1,
    fontWeight: "400",
    backgroundColor: "#f5f6fa",
  },
});

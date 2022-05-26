import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { letters } from "../../letters";

function AllNames() {
  const screen = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Names starting with</Text>
      <ScrollView>
        <View style={styles.scroll}>
          {letters.map((letter) => {
            return (
              <TouchableOpacity key={letter}>
                <Text style={[styles.text, { width: screen.width * 0.2 }]}>
                  {letter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AllNames;

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
    fontSize: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    textTransform: "lowercase",
    borderColor: "#bdc3c7",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    fontWeight: "800",
    textAlign: "center",
  },
});

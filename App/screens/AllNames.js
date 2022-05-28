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
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function AllNames() {
  const screen = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scroll}>
          {letters.map((letter) => {
            return (
              <TouchableOpacity
                key={letter}
                onPress={() =>
                  navigation.navigate("Names", {
                    letter,
                  })
                }
              >
                <Text style={[styles.text, { width: screen.width * 0.19 }]}>
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
    marginTop: 10,
  },
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 15,
  },
  text: {
    fontSize: 21,
    paddingVertical: 15,
    paddingHorizontal: 15,
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

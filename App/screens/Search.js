import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search({ navigation, route }) {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView>
      <View>
        <View>
          <Ionicons name="search" size={34} color="black" />
          <TextInput
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            placeholder="Enter Search Name"
            style={styles.input}
          />
        </View>

        <Pressable onPress={() => navigation.navigate("AllNames")}>
          <Text>All Names</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Search;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

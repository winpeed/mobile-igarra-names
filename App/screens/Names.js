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

function Names() {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Names starting with a</Text>
      {isLoading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          data={names}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={styles.text}>{item.fields.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
}

export default Names;

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

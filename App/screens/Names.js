import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function Names() {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const screen = Dimensions.get("window");

  const navigation = useNavigation();
  const route = useRoute();
  const { letter } = route.params;

  const fetchData = async () => {
    const response = await fetch(
      `https://igarranames.vercel.app/api/v1/names/`
    );
    const data = await response.json();
    setNames(
      data.data.filter((item) =>
        item.fields.engName.toLowerCase().startsWith(letter.toLowerCase())
      )
    );
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000000"
          style={{ paddingTop: 30 }}
        />
      ) : names.length !== 0 ? (
        <FlatList
          data={names}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Name", {
                  name: item.fields.name,
                  item: names.filter(
                    (elem) => elem.fields.name === item.fields.name
                  ),
                })
              }
            >
              <Text style={styles.text}>{item.fields.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <Text style={styles.emptyText}>
            There are currently no names starting with '{letter}'
          </Text>
        </View>
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
  emptyText: {
    fontSize: 22,
    paddingVertical: 95,
    paddingHorizontal: 20,
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

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
  Modal,
  Alert,
  StatusBar,
  TouchableHighlight,
  Pressable,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Name() {
  const screen = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Help us improve Ametu</Text>
            <Text style={styles.modalText}>
              Do you have a story to share about this name? Do you think we
              missed something? Kindly share with us make improvements.
            </Text>
            <TextInput style={styles.formInput} multiline={true} />

            <View style={styles.buttonWrapper}>
              <Pressable style={[styles.button, styles.buttonOpen]}>
                <Text style={[styles.textSubmit]}>Submit</Text>
              </Pressable>
              <Pressable
                onPress={() => setIsModalVisible(!isModalVisible)}
                style={[styles.button, styles.buttonClose]}
              >
                <Text style={[styles.textClose]}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <Text style={styles.subheading}>Meaning of Ametu</Text>
        <Text style={styles.body}>Past deeds</Text>

        <Text style={styles.subheading}>Pronounciation</Text>
        <TouchableOpacity>
          <Ionicons name="play-circle-outline" size={90} color="black" />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <Text style={styles.subheading}>Share</Text>
        <View style={[styles.icons, { width: screen.width * 0.7 }]}>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-square" size={55} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="twitter-square" size={55} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="whatsapp-square" size={55} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.updated}>Last Updated on 23/11/2022</Text>
        <TouchableHighlight
          onPress={() => setIsModalVisible(!isModalVisible)}
          style={{ width: screen.width * 0.5 }}
        >
          <Text style={[styles.button, { width: screen.width * 0.5 }]}>
            Improve this entry
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Name;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingLeft: 20,
  },
  subheading: {
    fontWeight: "700",
    fontSize: 25,
    paddingTop: 40,
    paddingBottom: 20,
  },
  body: {
    fontSize: 20,
    paddingLeft: 30,
    fontWeight: "400",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  updated: {
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "italic",
    textAlign: "center",
    paddingVertical: 40,
    color: "#2980b9",
  },
  button: {
    backgroundColor: "#27ae60",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight: "600",
    fontSize: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    fontWeight: "800",
    fontSize: 21,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
    marginVertical: 10,
    lineHeight: 22,
  },
  buttonClose: {
    backgroundColor: "red",
    color: "white",
  },
  textSubmit: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  textClose: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: 20,
  },
  formInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: 270,
    height: 80,
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 0,
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

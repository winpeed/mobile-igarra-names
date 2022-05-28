import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AllNames from "./screens/AllNames";
import Name from "./screens/Name";
import Names from "./screens/Names";
import Welcome from "./screens/Welcome";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./screens/Search";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: () => (
              <Ionicons name="search" size={34} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => (
              <SimpleLineIcons name="settings" size={34} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Home"
            component={Welcome}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          />
        ) : (
          <Stack.Screen
            name="Real Home"
            component={Home}
            options={{
              title: "",
            }}
          />
        )}

        <Stack.Screen
          name="AllNames"
          component={AllNames}
          options={{
            headerTitle: "Names starting with: ",
          }}
        />
        <Stack.Screen
          name="Names"
          component={Names}
          options={({ route }) => ({
            title: `All names starting with '${route.params.letter}'`,
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={({ route }) => ({
            title: `${route.params.name}`,
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

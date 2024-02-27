import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screens/HomeScreen";
const Sam = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1a232f",
        },
      }}
    >
      <tab.Screen name="Home" component={HomeScreen} />
    </tab.Navigator>
  );
};

export default Sam;

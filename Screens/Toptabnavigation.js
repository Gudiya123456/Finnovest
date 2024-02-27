import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Livesignals from "./Livesignals";
import Pastsignals from "./Pastsignals";
import SignalsHeader from "./Signalsheader";
import ExitedSIgnals from "./ExitedSIgnals";
const Tab = createMaterialTopTabNavigator();
const Toptabnavigation = ({ navigation }) => {
  return (
    <>
      <SignalsHeader navigation={navigation} />
      <Tab.Navigator
        tabBarPosition="top"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "600",
            letterSpacing: 0.2,
            textAlign: "left",
          },
          // animationEnabled: false,
          tabBarStyle: {
            backgroundColor: "orange",
          },
          tabBarIndicatorStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="Livesignals" component={Livesignals} />
        <Tab.Screen name="ExitedSIgnals" component={ExitedSIgnals} />
        <Tab.Screen name="Pastsignals" component={Pastsignals} />
      </Tab.Navigator>
    </>
  );
};

export default Toptabnavigation;

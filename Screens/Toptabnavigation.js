import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Livesignals from "./Livesignals";
import Pastsignals from "./Pastsignals";
import SignalsHeader from "./Signalsheader";
import ExitedSIgnals from "./ExitedSIgnals";
const Tab = createMaterialTopTabNavigator();
const Toptabnavigation = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "orange" }}>
      <SignalsHeader navigation={navigation} />
      <Tab.Navigator
        tabBarPosition="top"
        screenOptions={{
          tabBarPressOpacity: 1,
          tabBarPressColor: "transparent",
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "white",
          unmountOnBlur: true,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "600",
            // letterSpacing: 0.2,
            // textAlign: "center",
          },
          // animationEnabled: false,
          tabBarStyle: {
            backgroundColor: "navy",
          },
          tabBarItemStyle: {
            alignItems: "center",
            padding: 0,
          },
          tabBarIndicatorStyle: { backgroundColor: "yellow" },
        }}
      >
        <Tab.Screen name="Live signals" component={Livesignals} />
        <Tab.Screen name="Exited SIgnals" component={ExitedSIgnals} />
        <Tab.Screen name="Past signals" component={Pastsignals} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Toptabnavigation;

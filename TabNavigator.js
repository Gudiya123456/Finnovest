import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./Screens/HomeScreen";
import { Signals } from "./Screens/Signals";
import { Mutualfund } from "./Screens/Mutualfund";
import { Portfolio } from "./Screens/Portfolio";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Toptabnavigation from "./Screens/Toptabnavigation";
const Tab = createBottomTabNavigator();

const screenOptions = {
  // tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: "#fff",
  tabBarActiveBackgroundColor: "#000",
  tabBarInactiveBackgroundColor: "#000",
  tabbarstyle: { backgroundcolor: "red", bordertopcolor: "#23321a" },
  // bordertopcolor: "#000",
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="home"
                  size={20}
                  color={focused ? "#fff" : "grey"}
                  style={styles.searchIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Signals"
        component={Toptabnavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="window-restore"
                  size={20}
                  color={focused ? "#fff" : "grey"}
                  style={styles.searchIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Performance"
        component={Mutualfund}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name={"insert-chart"}
                  size={20}
                  color={focused ? "#fff" : "grey"}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="rupee-sign"
                  size={20}
                  color={focused ? "#fff" : "grey"}
                  style={styles.searchIcon}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

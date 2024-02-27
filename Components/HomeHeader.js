import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Default, perfectSize } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "expo-image";
export default function HomeHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: perfectSize(15),
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          height: perfectSize(40),
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.push("notifications")}>
          <Ionicons name="notifications-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: perfectSize(200),
    height: perfectSize(50),
    contentFit: "contain",
  },
});

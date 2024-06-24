import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Default, perfectSize } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function TabScreenHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Default.fixPadding * 1,
        // marginBottom: Default.fixPadding,
        marginHorizontal: perfectSize(15),
      }}
    >
      <View
        style={{
          flex: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.push("notifications")}>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

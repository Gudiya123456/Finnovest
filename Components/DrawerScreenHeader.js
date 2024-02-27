import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { Default } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function DrawerScreenHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Default.fixPadding * 1,
        // marginBottom: Default.fixPadding,
        marginHorizontal: Default.fixPadding * 2,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
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
          <Ionicons name="menu-outline" size={30} color="#fff" />
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
        <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

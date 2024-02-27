import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { Default, perfectSize } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

export default function SignalsHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
        paddingHorizontal: perfectSize(15),
        paddingVertical: perfectSize(10),
        backgroundColor: "orange",
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.headerTitle}>Signals</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.push("notifications")}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  subHeaderTitle: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});

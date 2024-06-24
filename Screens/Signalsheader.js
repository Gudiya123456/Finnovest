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
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import { FONTS, COLORS, SIZES, icons } from "../constants";

export default function SignalsHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
        paddingHorizontal: perfectSize(15),
        // paddingVertical: perfectSize(15),
        backgroundColor: "navy",
        alignItems: "center",
        paddingBottom: 18,
        // marginTop: perfectSize(3),
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {/* <Ionicons name="menu-outline" size={30} color="#fff" />
           */}
          <FontAwesome5 name="bars" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.headerTitle}>Signals</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.push("notifications")}>
          <MaterialCommunityIcons name="bell-badge" size={24} color="#fff" />
          <View
            style={{
              position: "absolute",
              right: -2,
              backgroundColor: "navy",
              borderRadius: 10,
              minWidth: 15,
              top: -2,
              padding: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                minWidth: 14,
                justifyContent: "center",
                alignItems: "center",
                padding: 0.3,
              }}
            >
              <Text style={{ fontSize: 12, color: "orange", lineHeight: 13 }}>
                1
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    lineHeight: 35,
    color: COLORS.white,
    fontSize: 24,
    fontFamily: "bold",
  },
  subHeaderTitle: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});

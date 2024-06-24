import {
  View,
  Text,
  TouchableOpacity,
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
export default function DrawerScreenHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        // justifyContent: "center",
        marginTop: perfectSize(5),
        // marginBottom: Default.fixPadding,
        marginHorizontal: perfectSize(15),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 8,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View> */}
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
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

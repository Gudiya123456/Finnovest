import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import DrawerCloseButton from "./DrawerCloseButton";
import { Default, perfectSize } from "../constants/theme";
import { Image } from "expo-image";
export default function DrawerHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: "#ff751a" }}>
      <View
        style={{
          borderBottomColor: "yellow",
          flexDirection: "row",

          paddingTop: StatusBar.currentHeight,
          padding: perfectSize(10),
        }}
      >
        <View>
          <DrawerCloseButton />
        </View>

        <View>
          {/* <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>Finovest </Text> */}

          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: 225,
    height: 50,
  },
});

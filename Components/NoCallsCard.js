import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NoCallsCard() {
  return (
    <View
      style={{
        // backgroundColor: "#ff751a",
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "orange",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        There are no calls today!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

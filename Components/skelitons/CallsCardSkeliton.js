import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Skeliton from "./Skeliton";
import { perfectSize } from "../../constants/theme";
export const cardWidth = Dimensions.get("window").width * 0.92;
export default function CompanyCard({ navigation, company }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {/* <View
        style={{
          backgroundColor: "#d9d9d9",
          width: "100%",
          height: 150,
          marginBottom: 10,
          borderRadius: 15,
        }}
      /> */}
      <View
        style={{
          marginTop: perfectSize(10),
          marginBottom: perfectSize(10),
        }}
      >
        <Skeliton height={245} width={cardWidth} style={{ borderRadius: 15 }} />
      </View>
    </ScrollView>
  );
}

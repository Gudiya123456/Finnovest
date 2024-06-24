import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { Default, perfectSize } from "../constants/theme";

export const Breadcrumb = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}....</Text>
      <Text style={styles.subHeaderTitle}>{props.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "navy",
    marginHorizontal: perfectSize(15),
    paddingVertical: perfectSize(40),
    borderRadius: 20,
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  subHeaderTitle: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});

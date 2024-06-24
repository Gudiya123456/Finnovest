import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { Default, perfectSize } from "../constants/theme";

export const HomeBreadcrumb = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}...</Text>
      <Text style={styles.subHeaderTitle}>{props.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    marginTop: -40,
    // marginBottom: Default.fixPadding * 2,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",
    // zIndex: 6,
    // marginHorizontal: 1,
    paddingVertical: perfectSize(30),
    // borderRadius: 20,
    borderTopRightRadius: 30,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.black,
  },
  subHeaderTitle: {
    ...FONTS.body3,
    color: COLORS.black,
  },
});

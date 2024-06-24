import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
// import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Default, perfectSize } from "../constants/theme";
export default function SearchInput() {
  return (
    <View style={styles.passwordContainer}>
      <Ionicons
        name="search-outline"
        size={24}
        color="#8c8c8c"
        style={styles.searchIcon}
      />

      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="Search for stocks"
        // value={"Search for stocks"}
        // onChangeText={this.onPasswordEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: Default.fixPadding * 3,
    borderRadius: 5,
    marginHorizontal: perfectSize(15),
    // borderWidth: 0.5,
  },
  inputStyle: {
    flex: 1,
    color: "#8c8c8c",
    paddingRight: 10,
  },

  searchIcon: {
    padding: 2,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

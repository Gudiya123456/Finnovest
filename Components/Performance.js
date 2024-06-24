import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React from "react";
import DrawerScreenHeader from "./DrawerScreenHeader";
import { perfectSize } from "../constants/theme";
const Performance = ({ navigation }) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "navy",
          height: 160,
          borderBottomRightRadius: perfectSize(20),
          // borderBottomLeftRadius: 20,
        }}
      >
        <DrawerScreenHeader navigation={navigation} />
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Text style={styles.title}>Performance coming soon</Text>
        </View>
      </View>
    </>
  );
};

export default Performance;
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.7,
  },
  header: {
    justifyContent: "center",
    marginTop: -40,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 40,
    paddingVertical: perfectSize(40),
    borderTopRightRadius: 30,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
  },
});

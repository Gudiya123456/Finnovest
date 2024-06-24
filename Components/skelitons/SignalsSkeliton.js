import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import HeaderSkeliton from "./HeaderSkeliton";
import Skeliton from "./Skeliton";
import CallsCardSkeliton from "./CallsCardSkeliton";
import { Default, perfectSize } from "../../constants/theme";
import SignalHeadingsSkeliton from "./SignalHeadingsSkeliton";

const SignalsSkeliton = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSkeliton />

        <View style={styles.header}>
          <Skeliton height={25} width={150} style={{ borderRadius: 0 }} />
        </View>
        <View style={styles.footer}>
          <Skeliton height={25} width={170} style={{ borderRadius: 0 }} />
          <View style={{ marginTop: 10 }}>
            <SignalHeadingsSkeliton />
            <CallsCardSkeliton />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignalsSkeliton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  footer: {
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: perfectSize(15),
    paddingTop: perfectSize(10),
    minHeight: "100",
  },
  header: {
    justifyContent: "center",
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: perfectSize(15),
    paddingBottom: 1,
  },
});

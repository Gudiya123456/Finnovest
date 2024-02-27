import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";
import HeaderSkeliton from "./HeaderSkeliton";
import { Default, perfectSize } from "../../constants/theme";
import Skeliton from "./Skeliton";
import CallsCardSkeliton from "./CallsCardSkeliton";
export const cardWidth = Dimensions.get("window").width * 0.9;

const HomeHeaderSkeliton = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSkeliton />
        <View style={styles.passwordContainer}>
          <Skeliton
            height={35}
            width={cardWidth}
            style={{ borderRadius: 10 }}
          />
        </View>
        <View style={styles.header}>
          <Skeliton height={25} width={110} style={{ borderRadius: 0 }} />
          <View style={{ marginTop: 10 }}>
            <Skeliton height={25} width={220} style={{ borderRadius: 0 }} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ marginLeft: perfectSize(15) }}>
            <Skeliton height={25} width={170} style={{ borderRadius: 0 }} />
          </View>
          <View style={{ marginTop: 10 }}>
            <CallsCardSkeliton />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeHeaderSkeliton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: Default.fixPadding * 2,
    borderRadius: 10,
    marginHorizontal: perfectSize(15),
  },
  header: {
    justifyContent: "center",
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: perfectSize(15),
    paddingBottom: 1,
  },
  footer: {
    flex: 4,

    paddingVertical: perfectSize(10),
  },
});

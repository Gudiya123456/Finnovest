import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import HeaderSkeliton from "./HeaderSkeliton";
import { Default, perfectSize } from "../../constants/theme";
import Skeliton from "./Skeliton";
import CallsCardSkeliton from "./CallsCardSkeliton";
export const cardWidth = Dimensions.get("window").width * 0.92;
export const cardWidthhead = Dimensions.get("window").width * 0.92;

const HomeHeaderSkeliton = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: perfectSize(10),
        }}
      >
        <HeaderSkeliton />
        <View style={styles.passwordContainer}>
          <Skeliton height={45} width={cardWidth} style={{ borderRadius: 5 }} />
        </View>
        {/* <View style={styles.header}>
          <Skeliton height={25} width={110} style={{ borderRadius: 0 }} />
          <View style={{ marginTop: 10 }}>
            <Skeliton height={25} width={220} style={{ borderRadius: 0 }} />
          </View>
        </View> */}
        <View
          style={{
            marginHorizontal: perfectSize(15),
            marginTop: perfectSize(30),
          }}
        >
          <Skeliton
            height={120}
            width={cardWidthhead}
            style={{ borderTopRightRadius: 30 }}
          />
        </View>
        <View style={styles.footer}>
          <View style={{ marginLeft: perfectSize(15) }}>
            <Skeliton height={25} width={170} style={{ borderRadius: 0 }} />
          </View>
          <View style={{ marginTop: 25 }}>
            <CallsCardSkeliton />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeHeaderSkeliton;
const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    marginTop: -40,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",

    marginHorizontal: 5,
    paddingVertical: perfectSize(40),
    // borderRadius: 20,
    borderTopRightRadius: 30,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: Default.fixPadding * 4,
    borderRadius: 10,
    // marginHorizontal: perfectSize(5),
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
    marginTop: perfectSize(15),
    paddingVertical: perfectSize(10),
  },
});

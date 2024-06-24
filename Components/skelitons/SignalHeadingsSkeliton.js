import { View } from "react-native";
import React from "react";
import Skeliton from "./Skeliton";
import { perfectSize } from "../../constants/theme";
const SignalHeadingsSkeliton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: perfectSize(10),
        marginTop: perfectSize(10),
      }}
    >
      <Skeliton height={30} width={100} style={{ borderRadius: 10 }} />

      <Skeliton height={30} width={100} style={{ borderRadius: 10 }} />

      <Skeliton height={30} width={100} style={{ borderRadius: 10 }} />
    </View>
  );
};

export default SignalHeadingsSkeliton;

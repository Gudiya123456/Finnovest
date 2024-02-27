import { View } from "react-native";
import React from "react";
import { Default, perfectSize } from "../../constants/theme";
import Skeliton from "./Skeliton";

const HeaderSkeliton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Default.fixPadding * 1,
        // marginBottom: Default.fixPadding,
        marginHorizontal: perfectSize(15),
      }}
    >
      <View
        style={{
          flex: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Skeliton height={25} width={25} style={{ borderRadius: 0 }} />
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Skeliton height={25} width={25} style={{ borderRadius: 0 }} />
      </View>
    </View>
  );
};

export default HeaderSkeliton;

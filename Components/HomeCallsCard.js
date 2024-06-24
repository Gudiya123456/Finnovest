import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const HomeCallsCard = (props) => {
  return (
    <View style={styles.callsCard}>
      <Text style={styles.callText}>{props.data.message}</Text>

      <Text style={styles.callTime}>{props.data.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  callsCard: {
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "orange",
  },
  callText: {
    lineHeight: 25,
  },

  callTime: {
    lineHeight: 25,
    textAlign: "right",
    fontSize: 12,
  },
});

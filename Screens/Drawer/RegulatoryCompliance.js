import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function RegulatoryCompliance({ navigation }) {
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
          <Text style={styles.title}>Regulatory Compliance</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <Text style={styles.content}>
            Shanawaz Pasha is a SEBI registered research analyst with
            registration number INH200008024
          </Text>

          <Text style={styles.subTitle}>KYC</Text>
          <Text style={styles.content}>
            As per SEBI norms finnovestresearch is required to collect a few
            documents from the customer as a part of the KYC process, failing to
            receive the documents may result in service going on temporary hold
            till we receive these documents, finnovestresearch Compliance team
            will contact the customer for these documents and help the customer
            in sending these documents. Please note these documents are required
            only one time, the customer will not need to send these when he/she
            renews the services.
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

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
  content: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 23,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.7,
    marginVertical: perfectSize(10),
  },
});

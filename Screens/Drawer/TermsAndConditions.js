import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function TermsAndConditions({ navigation }) {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "orange",
          paddingBottom: 80,
          borderBottomRightRadius: perfectSize(20),
          // borderBottomLeftRadius: 20,
        }}
      >
        <DrawerScreenHeader navigation={navigation} />
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Text style={styles.title}>Terms & Conditions</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <View>
            <Text style={styles.subTitle}>TERMS</Text>
            <Text style={styles.content}>
              By accessing this web site, you are agreeing to be bound by these
              website Terms and Conditions of Use, all applicable laws and
              regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of
              these terms, you are prohibited from using or accessing this site.
              The materials contained in this web site are protected by
              applicable copyright and trade mark law. By registering on
              www.finnovestresearch.com you explicitly agree to be contacted by
              our personnel/send you SMS’s related to our services even if the
              contact number you have entered is on DND (Do not Disturb).
            </Text>
          </View>
          <View>
            <Text style={styles.subTitle}>USE LICENSE</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={[styles.subTitle, { marginVertical: perfectSize(-1) }]}
                >
                  a.{" "}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.content}>
                  Permission is granted to temporarily download one copy of the
                  materials (information) on finnovestresearch’s web site for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 19, marginTop: perfectSize(5) }}>
              <Text style={styles.content}>
                i. modify or copy the materials;
              </Text>
              <Text style={styles.content}>
                ii. use the materials for any commercial purpose, or for any
                public display (commercial or non-commercial);
              </Text>
              <Text style={styles.content}>
                iii. attempt to decompile or reverse engineer any software
                contained on finnovestresearch’s web site;
              </Text>
              <Text style={styles.content}>
                iv. remove any copyright or other proprietary notations from the
                materials; or
              </Text>
              <Text style={styles.content}>
                v. transfer the materials to another person or “mirror” the
                materials on any other server.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={[styles.subTitle, { marginVertical: perfectSize(-1) }]}
                >
                  b.{" "}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.content}>
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by
                  finnovestresearch at any time. Upon terminating your viewing
                  of these materials or upon the termination of this license,
                  you must destroy any downloaded materials in your possession
                  whether in electronic or printed format.
                </Text>
              </View>
            </View>
          </View>
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
    lineHeight: perfectSize(22),
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.7,
    marginVertical: perfectSize(10),
  },
});

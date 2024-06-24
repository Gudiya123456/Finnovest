import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function TermsAndConditions({ navigation }) {
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
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View>
                <Text style={styles.content}>a. </Text>
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
            <View style={{ marginLeft: 16, marginTop: perfectSize(5) }}>
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
                <Text style={styles.content}>b. </Text>
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
            <View>
              <Text style={styles.subTitle}>DISCLAIMER</Text>
              <Text style={styles.content}>
                The materials on finnovestresearch’s web site are provided “as
                is”. finnovestresearch makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties,
                including without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights. Further, finnovestresearch does not warrant or make any
                representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its Internet web site
                or otherwise relating to such materials or on any sites linked
                to this site.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>LIMITATIONS</Text>
              <Text style={styles.content}>
                In no event shall finnovestresearch or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                or profit, monetary and/or non monetary,) arising out of the use
                or inability to use the materials communicated by
                finnovestresearch and its Employees.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>REVISIONS</Text>
              <Text style={styles.content}>
                AND ERRATA The materials appearing on finnovestresearch’s web
                site could include technical, typographical, or photographic
                errors. finnovestresearch does not warrant that any of the
                materials on its web site are accurate, complete, or current.
                finnovestresearch may make changes to the materials contained on
                its web site at any time without notice. finnovestresearch does
                not, however, make any commitment to update the materials.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>LINKS</Text>
              <Text style={styles.content}>
                finnovestresearch has not reviewed all of the sites linked to
                its Internet web site and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply
                endorsement by finnovestresearch of the site. Use of any such
                linked web site is at the user’s own risk.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>SITE</Text>
              <Text style={styles.content}>
                TERMS OF USE MODIFICATIONS finnovestresearch may revise these
                terms of use for its web site at any time without notice. By
                using this web site you are agreeing to be bound by the then
                current version of these Terms of Use.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>GOVERNING</Text>
              <Text style={styles.content}>
                LAW Any claim relating to finnovestresearch’s web site shall be
                governed by the Indian laws, without regard to its conflict of
                law provisions.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                General Terms and Conditions applicable to Use of a Website.
              </Text>
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
    // textAlign: "justify",
    lineHeight: 23,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.7,
    marginVertical: perfectSize(10),
  },
});

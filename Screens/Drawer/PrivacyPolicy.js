import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function PrivacyPolicy({ navigation }) {
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
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <View>
            <Text style={styles.content}>
              Your privacy is very important to us. Accordingly, we have
              developed this Policy in order for you to understand how we
              collect, use, communicate and disclose and make use of personal
              information. The following outlines our privacy policy.
            </Text>

            <Text style={styles.subTitle}>GENERAL PRIVACY</Text>
            <Text style={styles.content}>
              Like most Websites finnovestresearch collects
              non-personally-identifying information of the sort that web
              browsers and
            </Text>
            <Text style={styles.content}>
              servers typically make available, such as the browser type,
              language preference, referring site, and the date and time of each
              visitor request.
            </Text>
            <Text style={styles.content}>
              finnovestresearch.com also collects potentially
              personally-identifying information like Internet Protocol (IP)
              addresses for security reasons.
            </Text>
            <Text style={styles.content}>
              finnovestresearch does not disclose personally-identifying
              information other than as described below. And visitors can always
              refuse to supply personally-identifying information, with the
              caveat that it may prevent them from engaging in certain
              website-related activities.
            </Text>

            <Text style={styles.subTitle}>
              PROTECTION OF CERTAIN PERSONALLY-IDENTIFYING INFORMATION
            </Text>
            <Text style={styles.content}>
              finnovestresearch discloses potentially personally-identifying and
              personally-identifying information only to those of its employees,
              contractors and affiliated organizations that (i) need to know
              that information in order to process it on finnovestresearch’
              behalf or to provide services available at finnovestresearch’
              websites, and (ii) that have agreed not to disclose it to others.
              finnovestresearch will not rent or sell potentially
              personally-identifying and personally-identifying information to
              anyone.
            </Text>
            <Text style={styles.content}>
              If you are a registered user of finnovestresearch website and have
              supplied your email address, finnovestresearch may occasionally
              send you an email to tell you about new features, solicit your
              feedback, or just keep you up to date with what’s going on with
              finnovestresearch and our products. finnovestresearch takes all
              measures reasonably necessary to protect against the unauthorized
              access, use, alteration or destruction of potentially
              personally-identifying and personally-identifying information.
            </Text>

            <Text style={styles.subTitle}>COOKIES</Text>
            <Text style={styles.content}>
              A cookie is a string of information that a website stores on a
              visitor’s computer, and that the visitor’s browser provides to the
              website each time the visitor returns. finnovestresearch uses
              cookies to help finnovestresearch identify and track visitors,
              their usage of finnovestresearch website, and their website access
              preferences. finnovestresearch visitors who do not wish to have
              cookies placed on their computers should set their browsers to
              refuse cookies before using finnovestresearch’ websites, with the
              drawback that certain features of finnovestresearch’ websites may
              not function properly without the aid of cookies.
            </Text>

            <Text style={styles.subTitle}>PRIVACY POLICY CHANGES</Text>
            <Text style={styles.content}>
              Although most changes are likely to be minor, finnovestresearch
              may change its Privacy Policy from time to time, and in
              finnovestresearch’ sole discretion. finnovestresearch encourages
              visitors to frequently check this page for any changes to its
              Privacy Policy. Your continued use of this site after any change
              in this Privacy Policy will constitute your acceptance of such
              change.
            </Text>
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

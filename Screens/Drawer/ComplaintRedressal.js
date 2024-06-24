import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function ComplaintRedressal({ navigation }) {
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
          <Text style={styles.title}>Complaint Redressal</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <Text style={styles.content}>
            Client’s queries / complaints may arise due to lack of understanding
            or a deficiency of service experienced by clients. Deficiency of
            service may include lack of explanation, clarifications,
            understanding which escalates into shortfalls in the expected
            delivery standards, either due to inadequacy of facilities available
            or through the attitude of staff towards client.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>1. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Clients can seek clarification to their query and are further
                entitled to make a complaint in writing, orally or
                telephonically. An email may be sent to the Client Servicing
                Team on support@finnovestresearch.com . Alternatively, the
                Investor may call on +91 84970 77442.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>2. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                A letter may also be written with their query/complaint and
                posted at the below mentioned address : JP Nagar Bangalore -
                560078
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>3. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Clients can write to the research analyst at
                support@finnovestresearch.com if the Investor does not receive a
                response within 10 business days of writing to the Client
                Servicing Team. The client can expect a reply within 10 business
                days of approaching research analyst.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>4. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                In case you are not satisfied with our response you can lodge
                your grievance with SEBI at http://scores.gov.in or you may also
                write to any of the offices of SEBI. SCORES may be accessed
                thorough SCORES mobile application as well, same can be
                downloaded from below link
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>5. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                After exhausting the above options for resolution of the
                grievance, if the investor/client is still not satisfied with
                the outcome, they can initiate dispute resolution through the
                ODR Portal. For more details about the ODR mechanism, fees,
                timelines etc., you may read the master circular released by
                SEBI titled: "Online Resolution of Disputes in the Indian
                Securities Market" available at the following link:
                https://www.sebi.gov.in/legal/master-circulars/aug-2023/online-resolution-of-disputes-in-the-indian-securities-market_75220.html
                Details of Compliance Officer: Name: Mr. Shanawaz Pasha Contact
                No.: +91-8747098900 Email: ShahnwazPasha@finnovestresearch.com
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

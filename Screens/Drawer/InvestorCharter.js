import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function InvestorCharter({ navigation }) {
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
          <Text style={styles.title}>Investor Charter</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <Text style={styles.subTitle}>
            A. Vision and Mission Statements for investors
          </Text>
          <Text style={[styles.content, { fontWeight: "600" }]}>Vision</Text>
          <Text style={styles.content}>Invest with knowledge & safety.</Text>
          <Text style={[styles.content, { fontWeight: "600" }]}>Mission</Text>
          <Text style={styles.content}>
            Every investor should be able to invest in right investment products
            based on their needs, manage and monitor them to meet their goals,
            access reports and enjoy financial wellness.
          </Text>
          <Text style={styles.subTitle}>
            B. Details of business transacted by the Research Analyst with
            respect to the investors.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                To publish research report based on the research activities of
                the RA.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                To provide an independent unbiased view on securities.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                To offer unbiased recommendation, disclosing the financial
                interests in recommended securities.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                To provide research recommendation, based on analysis of
                publicly available information and known observations.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>To conduct audit annually.</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>
            C. Details of services provided to investors (No Indicative
            Timelines)
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>Onboarding of Clients</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>• </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>Disclosure to Clients</Text>
            </View>
          </View>
          <View style={{ marginLeft: perfectSize(20) }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.content}>• </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.content}>
                  To distribute research reports and recommendations to the
                  clients without discrimination.
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.content}>• </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.content}>
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.subTitle}>
            D. Details of grievance redressal mechanism and how to access it
          </Text>
          <Text style={styles.content}>
            In case of any grievance / complaint, an investor should approach
            the concerned research analyst and shall ensure that the grievance
            is resolved within 30 days.
          </Text>
          <Text style={styles.content}>
            If the investor’s complaint is not redressed satisfactorily, one may
            lodge a complaint with SEBI on SEBI’s SCORES portal which is a
            centralized web-based complaints redressal system. SEBI takes up the
            complaints registered via SCORES with the concerned intermediary for
            timely redressal. SCORES facilitates tracking the status of the
            complaint.
          </Text>
          <Text style={styles.content}>
            If the investor’s complaint is not redressed satisfactorily, one may
            lodge a complaint with SEBI on SEBI’s SCORES portal which is a
            centralized web-based complaints redressal system. SEBI takes up the
            complaints registered via SCORES with the concerned intermediary for
            timely redressal. SCORES facilitates tracking the status of the
            complaint.
          </Text>
          <Text style={styles.subTitle}>
            E. Expectations from the investors (Responsibilities of investors)
          </Text>
          <Text style={[styles.content, { fontWeight: "600" }]}>Do's</Text>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>1. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Always deal with SEBI registered Research Analyst.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>2. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Ensure that the Research Analyst has a valid registration
                certificate.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>3. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Check for SEBI registration number.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>4. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Please refer to the list of all SEBI registered Research
                Analysts which is available on SEBI website in the following
                link :
                https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>5. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Always pay attention towards disclosures made in the research
                reports before investing.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>6. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Pay your Research Analyst through banking channels only and
                maintain duly signed receipts mentioning the details of your
                payments.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>7. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Before buying securities or applying in public offer, check for
                the research recommendation provided by your research Analyst.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>8. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Ask all relevant questions and clear your doubts with your
                Research Analyst before acting on the recommendation.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>9. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Inform SEBI about Research Analyst offering assured or
                guaranteed returns.
              </Text>
            </View>
          </View>

          <Text style={[styles.content, { fontWeight: "600" }]}>Don'ts</Text>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>1. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Do not provide funds for investment to the Research Analyst.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>2. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Don’t fall prey to luring advertisements or market rumours.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>3. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Do not get attracted to limited period discount or other
                incentive, gifts, etc. offered by Research Analyst.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.content}>4. </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.content}>
                Do not share login credentials and password of your trading and
                demat accounts with the Research Analyst.
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

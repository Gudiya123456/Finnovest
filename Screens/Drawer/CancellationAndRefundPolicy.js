import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function CancellationAndRefundPolicy({ navigation }) {
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
          <Text style={styles.title}>Cancellation & RefundPolicy</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                All sales are final. All customers are advised to go through the
                terms and conditions of the services and understand the risks
                associated with the stock and commodity markets and then proceed
                to subscribe to the services based on the your Risk capability
                and suitability assessment. We do not offer refunds on
                subscriptions that have already been taken.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                It is the client’s Sole responsibility to Read and understand
                all information associated with the products/services and
                Customer support offered from finnovestresearch and its
                Assignees.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                We value our customers and are committed to providing best
                services. Our clients need to realize that we do not offer a
                100% guarantee on our calls and hence cannot offer any refund on
                subscriptions regardless of the individual client's performance.
                Once a service has been subscribed to and a payment has been
                made for the same, it can't be canceled or refunded in any case.
                If for some unforeseen reason, the client is not satisfied with
                our services, they may call us to seek direction on future
                calls. We will give our best effort to increase the satisfaction
                levels in such cases. However, any request by the client to
                cancel a service or get a refund will NOT be accepted in any
                case.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                We strongly recommend that before making a payment, our visitors
                and potential clients, please:
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                • Read all information about our services and support given to
                our clients.
              </Text>

              <Text style={styles.content}>
                • Read our Terms and Conditions.
              </Text>
              <Text style={styles.content}>
                • Read our Privacy Policy and Refund Policy.
              </Text>
              <Text style={styles.content}>
                • There is no refund possible in any case whatsoever.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                Kindly make the payment after reading all terms and conditions,
                disclaimers and refund policy.
              </Text>
            </View>
            <View style={{ marginTop: perfectSize(15) }}>
              <Text style={styles.title}>FAQs</Text>
              <Text style={styles.subTitle}>
                WHAT EXACTLY DO I GET FOR MY MONEY?
              </Text>
              <Text style={styles.content}>
                You get intraday/swing recommendations for the service you have
                chosen, Sample recommendations given below
              </Text>
              <Text style={styles.content}>
                _Buy Nifty futures above 5200 SL- 5175 TG- 5225/5250_
              </Text>
              <Text style={styles.subTitle}>
                DO YOU GIVE CALLS ON FUNDAMENTAL OR TECHNICAL ANALYSIS?
              </Text>
              <Text style={styles.content}>
                Our recommendations are purely based on Technical Analysis.
                However for a few delivery products we also look at the
                Fundamentals but primiarily it is technicals.
              </Text>
              <Text style={styles.subTitle}>
                I FEEL YOUR SERVICES ARE EXPENSIVE COMPARED TO OTHERS?{" "}
              </Text>
              <Text style={styles.content}>
                We house a highly specialised and qualified research, we employ
                the smartest and the brightest people for our Customer Support
                team. We work extremely high-end and accurate software to ensure
                the best quality and quality comes at a price.
              </Text>

              <Text style={styles.subTitle}>
                BEFORE I SUBSCRIBE TO YOUR SERVICES, I WAS JUST WONDERING, ON
                AVERAGE HOW OFTEN DO YOU MAKE RECOMMENDATIONS?
              </Text>
              <Text style={styles.content}>
                This completely depends on the service you are subscribing to,
                on an average varies from 1 - 4 recommendations in a day.
              </Text>

              <Text style={styles.subTitle}>
                WILL I GET ANY OTHER INFORMATION ON SMS, OTHER THAN TRADING?
              </Text>
              <Text style={styles.content}>
                We provide all information our Research team deems relevant for
                a successful trade, this might include Market news, levels etc.,
              </Text>

              <Text style={styles.subTitle}>
                WHAT IS YOUR SUCCESS AND RISK REWARD RATIO?
              </Text>
              <Text style={styles.content}>
                We have been maintaining an accuracy of 70-75%, over the years.
                Our risk reward ratio is min 1:1 and upto 1:3 (depending on
                market condition), where we give stop loss of 1:1 and 2 targets.
              </Text>

              <Text style={styles.subTitle}>
                CAN I CONTACT MY ADVISOR DURING MARKET HOURS?
              </Text>
              <Text style={styles.content}>
                {" "}
                Yes, you can reach us @ +91 8497077442. We have a dedicated team
                of Business Analysts to help you out.
              </Text>

              <Text style={styles.subTitle}>DO YOU REFUND MONEY?</Text>
              <Text style={styles.content}>
                Since we have an estmated accuracy of 70-75%, which is the best
                in the market today, I do not think you will have the need for
                money back.
              </Text>
              <View style={{ marginTop: perfectSize(15) }}>
                <Text style={[styles.title, { marginBottom: 10 }]}>
                  DISCLAIMER
                </Text>
                <Text style={styles.content}>
                  Trading and investing in stocks and commodities is a risk
                  involving activity and thus has its own share of risk. Sincere
                  efforts have been made to present the right investment
                  perspective and thus the information contained herein is based
                  on the analysis and the sources that we consider reliable.
                  However, any action you choose to take in the markets is
                  totally your own responsibility. finnovestresearch.com will
                  not be liable for any, direct or indirect, consequential or
                  incidental damages or loss arising out of the use of the
                  information given in the website, phone or through SMS.
                </Text>
                <Text style={styles.content}>
                  finnovestresearch.com has taken due care and caution in
                  compilation of data for its web site. The views and investment
                  tips expressed by investment experts on finnovestresearch.com
                  are their own, and not that of the website or its management.
                  finnovestresearch.com advises users to check with certified
                  experts before taking any investment decision. However,
                  finnovestresearch.com does not guarantee the accuracy,
                  adequacy or completeness of any information and is not
                  responsible for any errors or omissions or for the results
                  obtained from the use of such information.
                  finnovestresearch.com especially states that it has no
                  financial liability whatsoever to any user on account of the
                  use of information provided on its website.
                </Text>
                <Text style={styles.content}>
                  There are risks associated with utilizing internet and short
                  messaging system (sms) based information and research
                  dissemination services. Subscribers are advised to understand
                  that the services can fail due to failure of hardware,
                  software, and Internet connection. While we ensure that the
                  messages are delivered in time to the subscribers Mobile
                  Network, the delivery of these messages to the customer's
                  mobile phone/handset is the responsibility of the customer's
                  Mobile Network. SMS may be delayed or not delivered to the
                  customer's mobile phone/handset on certain days, owing to
                  technical reasons that can only be addressed by the customer's
                  Mobile Network, and finnovestresearch and its employees cannot
                  be held responsible for the same in any case.
                </Text>
                <Text style={styles.content}>
                  finnovestresearch is a SEBI registered with registration
                  number INH200008024. finnovestresearch does not provide any
                  execution based/PMS based services. We only provide
                  investment/trading advice to customers on a pre-paid
                  subscription basis. finnovestresearch does not have
                  affiliations with any intermediary and hence does receive any
                  remuneration or compensation of any form from any other
                  intermediary.
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
    // textAlign: "justify",
    lineHeight: 23,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 0.7,
    marginTop: perfectSize(12),
    lineHeight: perfectSize(22),
  },
});

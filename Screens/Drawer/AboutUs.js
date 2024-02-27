import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";

export default function AboutUs({ navigation }) {
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
          <Text style={styles.title}>About Us</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <Text style={styles.subTitle}>Who Are We</Text>
          <View>
            <Text style={styles.content}>
              Finnovest Research is a financial market research group. We
              generate intraday as well as delivery calls in Stock cash and F&O
              in NSE & BSE, Commodities including bullions, metals & commodities
              traded in MCX and NCDEX. Our calling facility is a very effective
              system which ensures the instant message delivery without any loss
              of time, so the clients get sufficient time to execute their
              trades in order to fetch maximum Profits.
            </Text>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.content}>
                To ensure effective solutions for our customers, our experienced
                team has conceptualized and deployed technological tools that
                have been custom-built to analyze markets incisively and
                holistically.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Our Values</Text>
              <Text style={styles.content}>
                Our vision is to provide our clients with wide-ranging, secured
                and finest financial reports to achieve sustained growth. We aim
                to do this by being responsive towards our clients and strive
                relentlessly to improve. We at finnovestresearch want to be
                worthy of our customer’s trust and provide them with the finest
                Stock and Commodity market recommendation.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Our Vision</Text>
              <Text style={styles.content}>
                We Endeavour to be valued as leader in client satisfaction &
                profitability. We work hard continuously to enhance our
                reputation for accessibility, professionalism, analysis & depth
                & quality of our long term consultative relationship with
                clients.
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.subTitle}>What We Provide</Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Our Expertise</Text>
              <Text style={styles.content}>
                All our intraday trading recommendation are based on technical
                analysis of the market with appropriations made at market
                fundamentals and its risk reward ratio. All our services are
                reliable, transparent and committed to the delight of our
                customers.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Best Investment</Text>
              <Text style={styles.content}>
                Plans We always focus on the stand for best share market
                recommendation provider. Here we offer the most excellent
                research report and recommendation, which are backed up by our
                teams of enjoyment, diligent and sharp individuals who thrive to
                give out exquisite.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Minimum Risk, More Profit</Text>
              <Text style={styles.content}>
                We always work hard so that you can acquire more profit. Your
                investment arranges will remain in the hands of the perfect
                business sector recommendation supplier to make quick money
                prudently. Be without stress as we study the business sector for
                you, so that you can play safe in the risky stock market.
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

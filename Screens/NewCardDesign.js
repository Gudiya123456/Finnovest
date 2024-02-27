import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { FONTS, COLORS } from "../constants";
import axios from "axios";
import TabScreenHeader from "../Components/TabScreenHeader";
import SearchInput from "../Components/SearchInput";
import { Breadcrumb } from "../Components/Breadcrumb";
import { CallsCard } from "../Components/CallsCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignalDetails from "../Components/SignalDetails";

export const Mutualfund = ({ navigation }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    // fetchHomeData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 0.6 }}
          colors={["#ff751a", "#ffff00"]}
          style={{ flex: 1 }}
        >
          <TabScreenHeader navigation={navigation} />
          <SearchInput />
          <Breadcrumb
            title="Hey Nikhil Sasikumar"
            subTitle="Here is your command centre"
          />
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.recommendations}>
              Recommendations New Design
            </Text>
            {/* {isLoading ?
                            <View style={styles.contentLoader}><ActivityIndicator size="large" color="#ff751a" /></View>
                            :
                            calls.map((call) => {
                                return <CallsCard key={call.id} data={call} />
                            })
                        } */}

            <SignalDetails />
            <SignalDetails />
            <SignalDetails />
            <SignalDetails />
          </Animatable.View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
    minHeight: "100",
  },
  inputHeader: {
    textTransform: "uppercase",
    ...FONTS.body4,
    marginVertical: 4,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 28,
  },
  checkbox: {
    marginRight: 8,
    height: 16,
    width: 16,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },

  recommendations: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  contentLoader: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});

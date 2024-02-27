import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../constants";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import TabScreenHeader from "../Components/TabScreenHeader";
import { CallsCard } from "../Components/CallsCard";
import NoCallsCard from "../Components/NoCallsCard";
import { Breadcrumb } from "../Components/Breadcrumb";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import SignalsSkeliton from "../Components/skelitons/SignalsSkeliton";

export const Signals = ({ navigation }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [exitApp, setExitApp] = useState(0);
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000);
    if (exitApp === 0) {
      setExitApp(exitApp + 1);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () =>
      BackHandler.removeEventListener(
        "hardwareBackPress",
        backHandler.remove()
      );
  });

  useEffect(() => {
    fetchPastSignals();
  }, []);

  const fetchPastSignals = async () => {
    setRefreshing(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://app-console.finocrm.in/api/v2/get-signals",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.status) setCalls(response.data.liveSignals);
    } catch (error) {
      if (error.response.status === 401) navigation.push("login");
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <SignalsSkeliton />
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 0.6 }}
          colors={["#ff751a", "#ffff00"]}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            {/* <StatusBar hidden={false} backgroundColor='#ff751a' /> */}
            {/* <View style={{ height: 150 }}> */}
            <TabScreenHeader navigation={navigation} />
            <Breadcrumb title="Past Signals" subTitle="" />
            {/* </View> */}

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={fetchPastSignals}
                  />
                }
              >
                <Text style={styles.recommendations}>Past Performance</Text>
                {refreshing ? (
                  // <View style={styles.contentLoader}>
                  //   <ActivityIndicator size="large" color="#ff751a" />
                  // </View>
                  calls.map((call) => {
                    return <CallsCardSkeliton key={call.id} />;
                  })
                ) : calls.length == 0 ? (
                  <NoCallsCard />
                ) : (
                  calls.map((call) => {
                    return <CallsCard key={call.id} data={call} />;
                  })
                )}
              </ScrollView>
            </Animatable.View>
          </SafeAreaView>
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 10,
    minHeight: "100",
  },
  recommendations: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentLoader: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});

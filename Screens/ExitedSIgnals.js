import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
} from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import NoCallsCard from "../Components/NoCallsCard";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import { perfectSize } from "../constants/theme";
import CallsCard from "../Components/CallsCard";

const ExitedSIgnals = () => {
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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchPastSignals}
          />
        }
      >
        {refreshing ? (
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
    </View>
  );
};

export default ExitedSIgnals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: perfectSize(15),
    paddingHorizontal: perfectSize(15),
  },
});

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
import EmptyCallsSkeliton from "../Components/skelitons/EmptyCallsSkeliton";
import SignalsCard from "../Components/SignalsCard";
import { useSelector } from "react-redux";
const Livesignals = ({ navigation }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [reload, setReload] = useState();
  const [exitApp, setExitApp] = useState(0);
  useEffect(() => {
    if (!isFetched) {
      fetchPastSignals();
    }
  }, [reload]);

  const reloader = useSelector((state) => state.ref.ref);
  useEffect(() => {
    setReload(reloader);
  }, [reloader]);

  // const backAction = () => {
  //   setTimeout(() => {
  //     setExitApp(0);
  //   }, 2000);
  //   if (exitApp === 0) {
  //     setExitApp(exitApp + 1);
  //   } else if (exitApp === 1) {
  //     BackHandler.exitApp();
  //   }
  //   return true;
  // };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     fetchPastSignals();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );
  //   return () =>
  //     BackHandler.removeEventListener(
  //       "hardwareBackPress",
  //       backHandler.remove()
  //     );
  // });

  const fetchPastSignals = async () => {
    setRefreshing(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://finocrm.in/api/get-signal-data",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.status == "success") {
        setCalls(response.data.liveCalls);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigation.push("login");
      }
      console.log(`live ${error}`);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <View style={{ marginTop: 15 }}>
          <CallsCardSkeliton />
          <CallsCardSkeliton />
          <CallsCardSkeliton />
          <CallsCardSkeliton />
          <CallsCardSkeliton />
          <CallsCardSkeliton />
        </View>
      ) : (
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
              calls.length == 0 ? (
                <View style={{ marginTop: 15 }}>
                  <EmptyCallsSkeliton />
                </View>
              ) : (
                <View style={{ marginTop: 15 }}>
                  {calls.map((call) => {
                    return <CallsCardSkeliton key={call.id} />;
                  })}
                </View>
              )
            ) : calls.length == 0 ? (
              <View style={{ marginTop: 15 }}>
                <NoCallsCard />
              </View>
            ) : (
              <View style={{ marginBottom: 15 }}>
                {calls.map((call) => {
                  return <CallsCard key={call.id} data={call} />;
                })}
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Livesignals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: perfectSize(10),
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",
  },
});

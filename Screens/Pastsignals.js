import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import NoCallsCard from "../Components/NoCallsCard";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import { perfectSize } from "../constants/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CallsCard from "../Components/CallsCard";

const Pastsignals = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [signals, setSignals] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTodatepickerVisible, setTodatePickerVisible] = useState(false);
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
      <View
        style={{
          backgroundColor: "#4682b4",
          height: 50,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: perfectSize(5),
          marginBottom: perfectSize(10),
        }}
      >
        <TouchableOpacity
          onPress={() => setDatePickerVisibility(true)}
          style={{
            flex: 5,
            backgroundColor: "#fff",
            flexDirection: "row",
            height: 35,
            margin: 5,
            borderRadius: 8,
            alignItems: "center",
            paddingLeft: 5,
          }}
        >
          <Ionicons name="md-calendar" size={20} color="gray" />
          <Text
            style={{
              paddingLeft: 5,
            }}
          >
            {fromDate ? fromDate.toLocaleDateString() : "From date"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTodatePickerVisible(true)}
          style={{
            flex: 5,
            backgroundColor: "#fff",
            flexDirection: "row",
            height: 35,
            margin: 5,
            borderRadius: 8,
            alignItems: "center",
            paddingLeft: 5,
          }}
        >
          <Ionicons name="md-calendar" size={20} color="gray" />
          <Text
            style={{
              paddingLeft: 5,
            }}
          >
            {toDate ? toDate.toLocaleDateString() : "To date"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 3,
            backgroundColor: "black",
            height: 30,
            margin: 5,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
            }}
          >
            Track Now
          </Text>
        </TouchableOpacity>
      </View>
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

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => {
          setFromDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />
      <DateTimePickerModal
        isVisible={isTodatepickerVisible}
        mode={"date"}
        onConfirm={(date) => {
          setToDate(date);
          setTodatePickerVisible(false);
        }}
        onCancel={() => setTodatePickerVisible(false)}
      />
    </View>
  );
};

export default Pastsignals;
const styles = StyleSheet.create({
  container: {
    paddingTop: perfectSize(10),
    flex: 1,
    paddingHorizontal: perfectSize(15),
  },
});

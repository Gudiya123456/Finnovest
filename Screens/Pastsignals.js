import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import NoCallsCard from "../Components/NoCallsCard";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import { perfectSize } from "../constants/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CallsCard from "../Components/CallsCard";
import EmptyCallsSkeliton from "../Components/skelitons/EmptyCallsSkeliton";
import { useFocusEffect } from "@react-navigation/native";

const Pastsignals = ({ navigation }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filteredCalls, setFilteredCalls] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTodatepickerVisible, setTodatePickerVisible] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [exitApp, setExitApp] = useState(0);
  useEffect(() => {
    if (!isFetched) {
      fetchPastSignals();
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     fetchPastSignals();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

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
        setCalls(response.data.pastCalls);
        setFilteredCalls(response.data.pastCalls);
      }
    } catch (error) {
      console.log(`past ${error}`);
      if (error.response && error.response.status === 401) {
        navigation.push("login");
      }
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const trackCalls = () => {
    const filteredCalls = calls.filter((call) => {
      const callDate = new Date(call.created_at);
      if (fromDate && toDate) {
        return (
          callDate >= fromDate &&
          callDate <= new Date(toDate.getTime() + 86400000)
        );
      } else if (fromDate) {
        return callDate >= fromDate;
      } else if (toDate) {
        return callDate <= toDate;
      }
      return true;
    });
    setFilteredCalls(filteredCalls);
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
          marginTop: perfectSize(5),
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
            {fromDate ? fromDate.toISOString().split("T")[0] : "From date"}
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
            {toDate ? toDate.toISOString().split("T")[0] : "To date"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 3,
            backgroundColor: "black",
            height: 35,
            margin: 5,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={trackCalls}
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
          filteredCalls.length === 0 ? (
            <View style={{ marginTop: perfectSize(15) }}>
              <EmptyCallsSkeliton />
            </View>
          ) : (
            <View style={{ marginTop: perfectSize(15) }}>
              {filteredCalls.map((call) => {
                return <CallsCardSkeliton key={call.id} data={call} />;
              })}
            </View>
          )
        ) : filteredCalls.length === 0 ? (
          <View style={{ marginTop: perfectSize(15) }}>
            <NoCallsCard />
          </View>
        ) : (
          <View style={{ marginBottom: perfectSize(15) }}>
            {filteredCalls.map((call) => {
              return <CallsCard key={call.id} data={call} />;
            })}
          </View>
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
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",
  },
});

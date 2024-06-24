import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../constants";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import TabScreenHeader from "../Components/TabScreenHeader";
import NoCallsCard from "../Components/NoCallsCard";
import { Breadcrumb } from "../Components/Breadcrumb";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import SignalsSkeliton from "../Components/skelitons/SignalsSkeliton";
import { perfectSize } from "../constants/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CallsCard from "../Components/CallsCard";
import SignalsHeader from "./Signalsheader";

export const Signals = ({ navigation }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("live");
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
          {/* <View style={{ height: 150 }}> */}
          <SafeAreaView style={{ backgroundColor: "#ff751a" }}>
            <SignalsHeader navigation={navigation} />

            {/* </View> */}
            <View style={styles.signals}>
              <TouchableOpacity
                style={[
                  styles.signal,
                  { borderBottomWidth: activeTab == "live" ? 3 : 0 },
                ]}
                onPress={() => {
                  setActiveTab("live");
                }}
              >
                <Text
                  style={[
                    styles.content,
                    { color: activeTab === "live" ? "yellow" : "#e7e1dc" },
                  ]}
                >
                  Live Signals
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.signal,
                  { borderBottomWidth: activeTab == "exited" ? 3 : 0 },
                ]}
                onPress={() => {
                  setActiveTab("exited");
                }}
              >
                <Text
                  style={[
                    styles.content,
                    { color: activeTab === "exited" ? "yellow" : "#e7e1dc" },
                  ]}
                >
                  Exited Signals
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.signal,
                  { borderBottomWidth: activeTab == "past" ? 3 : 0 },
                ]}
                onPress={() => {
                  setActiveTab("past");
                }}
              >
                <Text
                  style={[
                    styles.content,
                    { color: activeTab === "past" ? "yellow" : "#e7e1dc" },
                  ]}
                >
                  Past Signals
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: perfectSize(10),
                marginBottom: perfectSize(10),
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: activeTab == "live" ? "#ff751c" : "#d4d4d6",
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  setActiveTab("live");
                }}
              >
                <Text
                  style={{
                    color: activeTab == "live" ? "#fff" : "#000",
                  }}
                >
                  Live Signals
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor:
                    activeTab == "exited" ? "#ff751c" : "#d4d4d6",
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  setActiveTab("exited");
                }}
              >
                <Text
                  style={{
                    color: activeTab == "exited" ? "#fff" : "#000",
                  }}
                >
                  Exited Signals
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: activeTab == "past" ? "#ff751c" : "#d4d4d6",
                  padding: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  setActiveTab("past");
                }}
              >
                <Text
                  style={{
                    color: activeTab == "past" ? "#fff" : "#000",
                  }}
                >
                  Past Signals
                </Text>
              </TouchableOpacity>
            </View> */}
            {activeTab == "past" && (
              <View
                style={{
                  backgroundColor: "#4682b4",
                  height: 50,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: perfectSize(10),
                  marginTop: perfectSize(10),
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
            )}

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
                  return (
                    <CallsCard
                      key={call.id}
                      data={call}
                      activeTab={activeTab}
                    />
                  );
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
          </Animatable.View>
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    paddingHorizontal: perfectSize(15),
    paddingTop: perfectSize(10),
  },
  content: {
    fontSize: 16,
    color: "white",
    letterSpacing: 0.8,
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
  signals: {
    flexDirection: "row",
    // backgroundColor: "red",
    // backgroundColor: "red",
    // paddingHorizontal: perfectSize(15),
    // marginBottom: Platform.OS === "ios" ? -20 : 0,
    // backgroundColor: "#ff751a",
    // backgroundColor: "black",
    // paddingBottom: perfectSize(5),
  },
  signal: {
    borderColor: "#f9fad1",
    alignItems: "center",
    flex: 1,
    paddingTop: perfectSize(25),
    // borderTopWidth: 1,
    paddingBottom: perfectSize(10),
  },
});

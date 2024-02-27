import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  BackHandler,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { FONTS, COLORS } from "../constants";
import axios from "axios";
import TabScreenHeader from "../Components/TabScreenHeader";
import SearchInput from "../Components/SearchInput";
import { Breadcrumb } from "../Components/Breadcrumb";
import { CallsCard } from "../Components/CallsCard";
import NoCallsCard from "../Components/NoCallsCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import SignalDetails from "../Components/SignalDetails";
import AutoHeightWebView from "react-native-autoheight-webview";
import { Dimensions } from "react-native";
import HeaderSkeliton from "../Components/skelitons/HeaderSkeliton";
import HomeHeaderSkeliton from "../Components/skelitons/HomeHeaderSkeliton";
import CallsCardSkeliton from "../Components/skelitons/CallsCardSkeliton";
import { perfectSize } from "../constants/theme";
import HomeHeader from "../Components/HomeHeader";
import { HomeBreadcrumb } from "../Components/HomeBreadcrumb";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
}

export const HomeScreen = ({ navigation }) => {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      AsyncStorage.setItem("expoToken", token);
      sendPushTokenToServer(token);
    });
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        if (notification.request.content.data.action == "new-call")
          setReload(new Date().getTime());
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  AsyncStorage.getItem("userName").then((userName) => {
    setUserName("Hey " + userName);
  });
  const [userName, setUserName] = useState();
  const [reload, setReload] = useState(1);
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
    fetchHomeData();
  }, [reload]);

  const fetchHomeData = async () => {
    setRefreshing(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://app-console.finocrm.in/api/v2/get-home-data",
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

  const sendPushTokenToServer = async (aa) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post(
        "https://app-console.finocrm.in/api/v2/set-token",
        { token: aa },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {}
  };

  return (
    <>
      {isLoading ? (
        <HomeHeaderSkeliton />
      ) : (
        // <LinearGradient
        //   start={{ x: 0, y: 0.4 }}
        //   end={{ x: 1, y: 0.6 }}
        //   colors={["#ff751a", "#ffff00"]}
        //   style={{ flex: 1 }}
        // >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <SafeAreaView
            style={{
              backgroundColor: "orange",
              paddingBottom: 60,
              borderBottomRightRadius: perfectSize(20),
              // borderBottomLeftRadius: 20,
            }}
          >
            <HomeHeader navigation={navigation} />
            <SearchInput />
          </SafeAreaView>
          <View style={styles.footer}>
            <HomeBreadcrumb
              title={userName}
              subTitle="Here is your command centre"
            />

            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={fetchHomeData}
                />
              }
              contentContainerStyle={{
                flexGrow: 1,
                // marginTop: perfectSize(10),
              }}
            >
              <Text style={styles.recommendations}>Recommendations</Text>
              {refreshing ? (
                <CallsCardSkeliton />
              ) : calls.length == 0 ? (
                <NoCallsCard />
              ) : (
                calls.map((call) => {
                  return <CallsCard key={call.id} data={call} />;
                })
              )}
            </ScrollView>
          </View>
        </View>
        // </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 4,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: perfectSize(15),
    paddingVertical: perfectSize(10),
    // minHeight: "100",
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
    color: "#4682b4",
    // fontStyle: "italic",
    // letterSpacing: 0.8,
  },
  contentLoader: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FONTS, COLORS, SIZES } from "../../constants";
import Button from "../../Components/Button";
import axios from "axios";
import { HomeScreen } from "../HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErros] = useState({});
  const [defaultParams] = useState({
    phone: "",
  });

  const [params, setParams] = useState(
    JSON.parse(JSON.stringify(defaultParams))
  );

  const changeValue = (e, value) => {
    setErros({ ...errors, [e]: "" });
    setParams({ ...params, [e]: value });
  };
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
    checkLogedIn();

    setTimeout(() => {
      // setIsLogedIn(true);
    }, 10000);
  }, []);

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

  const checkLogedIn = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // setIsLogedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validate = () => {
    setErros({});
    let errors = {};
    if (!params.phone)
      errors = { ...errors, phone: "Phone number is required!" };
    else if (isNaN(params.phone))
      errors = { ...errors, phone: "Invalid phone number!" };
    else if (params.phone.length != 10)
      errors = { ...errors, phone: "Phone number should be 10 digits!" };
    setErros(errors);
    return { totalErrors: Object.keys(errors).length };
  };

  const getOtpFromServer = () => {
    setIsLoading(true);
    const isValid = validate();
    if (isValid.totalErrors) {
      setIsLoading(false);
      return false;
    }
    getOtpForLogin();
  };

  const getOtpForLogin = async () => {
    const phone = params.phone;
    try {
      const response = await axios.get(
        "https://app-console.finocrm.in/api/v2/check-number/" + phone
      );
      if (!response.data.status) {
        setIsLoading(false);
        setErros({ ...errors, phone: response.data.message });
      }
      if (response.data.status) {
        setIsLoading(false);
        navigation.push("otp", { phone });
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return isLogedIn ? (
    <HomeScreen />
  ) : (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 1, y: 0.6 }}
      colors={["#ff751a", "#ffff00"]}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Sign In</Text>
            <Text style={styles.subHeaderTitle}>
              Please signin to your existing account.
            </Text>
          </View>
        </SafeAreaView>
        <View style={styles.footer}>
          <Animatable.View animation="fadeInUpBig" style={styles.box}>
            <KeyboardAwareScrollView>
              <Text style={styles.inputHeader}>Phone</Text>
              <View style={[styles.inputContainer, { borderColor: "gray" }]}>
                <TextInput
                  style={styles.input}
                  placeholder={"Enter 10 Digits Number"}
                  placeholderTextColor={"#000"}
                  value={params.phone}
                  keyboardType="numeric"
                  onChangeText={(text) => changeValue("phone", text)}
                />
              </View>
              <View style={styles.checkBoxContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Verification")}
                >
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: errors.phone ? COLORS.error : COLORS.primary,
                    }}
                  >
                    {errors?.phone
                      ? errors.phone
                      : "You will receive an OTP at the provided phone number"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Button
                title="LOGIN"
                isLoading={isLoading}
                onPress={getOtpFromServer}
              />
            </KeyboardAwareScrollView>
          </Animatable.View>
          <View
            style={{
              zIndex: 2,
              top: -80,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#ff751c",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                width: "70%",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  subHeaderTitle: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: SIZES.padding,
    textAlign: "center",
  },
  footer: {
    flex: 1.5,
    backgroundColor: COLORS.white,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // paddingHorizontal: 22,
    // paddingVertical: 30,
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
    marginVertical: 10,
    marginBottom: 50,
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
  inputContainer: {
    width: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderRadius: 5,
    borderWidth: 0.7,
    marginVertical: 5,
    flexDirection: "row",
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontFamily: "",
    paddingTop: 0,
  },
  box: {
    marginHorizontal: 25,
    backgroundColor: "white",
    top: -60,
    padding: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 0 },
  },
});

import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, COLORS, SIZES } from "../../constants";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { perfectSize } from "../../constants/theme";

const Verification = ({ navigation, route }) => {
  const { phone } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [resendisLoading, setIsResendLoading] = useState(false);
  const [errors, setErros] = useState({});
  const [showresendButton, setShowResendButton] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [otpstatus, setOtpStatus] = useState("");
  const [defaultParams] = useState({
    otp: "",
  });
  const [params, setParams] = useState(
    JSON.parse(JSON.stringify(defaultParams))
  );
  // const backAction = () => {
  //   return true;
  // };
  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", backAction);
  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", backAction);
  // }, []);
  const changeValue = (value) => {
    setErros({ ...errors, otp: "" });
    setParams({ ...params, otp: value });
  };
  const validate = () => {
    setErros({});
    let errors = {};
    if (!params.otp) errors = { ...errors, otp: "OTP is required!" };
    else if (isNaN(params.otp))
      errors = { ...errors, otp: "Invalid OTP format!" };
    else if (params.otp.length != 4)
      errors = { ...errors, otp: "Please Enter 4 digit OTP!" };
    setErros(errors);
    return { totalErrors: Object.keys(errors).length };
  };

  const verifyOtpFromServer = () => {
    setIsLoading(true);
    const isValid = validate();
    if (isValid.totalErrors) {
      setIsLoading(false);
      return false;
    }
    verifyOtp();
  };

  const verifyOtp = async () => {
    const otp = params.otp;
    try {
      const response = await axios.post("https://finocrm.in/api/check-otp", {
        phone: phone,
        otp: otp,
      });
      console.log(response.data.status);

      if (response.data.status == "error") {
        setIsLoading(false);
        setErros({ ...errors, otp: response.data.message });
      }
      if (response.data.status == "success") {
        AsyncStorage.setItem("token", response.data.token);
        AsyncStorage.setItem("userName", response.data.name);
        setIsLoading(false);
        navigation.push("tabnavigator");
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed with server Error try after sometime!");
    }
  };
  const getOtpForLogin = async () => {
    setIsResendLoading(true);
    try {
      const response = await axios.get(
        "https://finocrm.in/api/resend-otp/" + phone
      );
      if (response.data.status == "error") {
        setIsResendLoading(false);
        setOtpStatus("failed");
        setInterval(() => {
          setOtpStatus("");
        }, 4000);
      }
      if (response.data.status == "success") {
        setIsResendLoading(false);
        setShowResendButton(false);
        setTimer(30);
        setTimerActive(true);
        setOtpStatus("success");
        setTimeout(() => {
          setOtpStatus("");
        }, 4000);
      }
    } catch (error) {
      setIsResendLoading(false);
      alert("Failed with server Error!");
    }
  };
  useEffect(() => {
    if (timer > 0 && timerActive) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setTimerActive(false);
    }
  }, [timer, timerActive]);

  useEffect(() => {
    if (timer == 0) {
      setTimerActive(false);
      setShowResendButton(true);
    }
  }, [timer]);

  useEffect(() => {
    if (params.otp.length == 4) {
      Keyboard.dismiss();
      verifyOtpFromServer();
    }
  }, [params]);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView
        style={{ flex: 1, padding: perfectSize(15), backgroundColor: "white" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={styles.container}>
            <ImageBackground
              source={require("../../assets/round-shape.png")}
              style={styles.background}
            >
              <View>
                <Image
                  source={require("../../assets/phone.png")}
                  style={styles.image}
                />
              </View>
            </ImageBackground>
            <View style={{ marginTop: perfectSize(15) }}>
              <Text style={styles.heading}>Verification code</Text>
            </View>
            <View
              style={{
                marginTop: perfectSize(15),
                marginBottom: perfectSize(10),
              }}
            >
              <Text
                style={[styles.content, { color: "gray", textAlign: "center" }]}
              >
                Please enter the Verification code sent to your mobile number.
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.heading}>+91 {phone} </Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <AntDesign name="edit" size={perfectSize(20)} color="green" />
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: perfectSize(10) }}>
              <OTPTextInput
                textInputStyle={styles.OTPStyle}
                inputCount={4}
                tintColor={COLORS.primary}
                handleTextChange={changeValue}
              />
            </View>
            {errors && (
              <Text
                style={{
                  fontSize: 13,
                  color: "red",
                  marginTop: perfectSize(3),
                }}
              >
                {errors.otp}
              </Text>
            )}
            {otpstatus && (
              <View>
                {otpstatus == "failed" && (
                  <Text style={[styles.content, { color: "red" }]}>
                    Failed to send otp try after sometimes
                  </Text>
                )}
              </View>
            )}
          </View>
          {!showresendButton ? (
            <Text
              style={[
                styles.content,
                { textAlign: "center", letterSpacing: 0.8 },
              ]}
            >
              you can resend otp in
              <Text style={{ color: "#ff751c" }}> {timer} </Text>seconds
            </Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={getOtpForLogin}>
              {resendisLoading ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ActivityIndicator size={"small"} color={"#ff751c"} />
                  <Text style={[styles.content, { color: "#ff751c" }]}>
                    {"  "}
                    Please Wait........
                  </Text>
                </View>
              ) : (
                <Text style={[styles.content, { color: "#000080" }]}>
                  Resend
                </Text>
              )}
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.button2}
            onPress={verifyOtpFromServer}
          >
            {isLoading ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ActivityIndicator size={"small"} color={"white"} />
                <Text style={[styles.content, { color: "white" }]}>
                  {"  "}
                  Please Wait........
                </Text>
              </View>
            ) : (
              <Text style={[styles.content, { color: "white" }]}>Submit</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    // fontFamily: "regular",
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: perfectSize(16),
  },
  content: {
    fontSize: 15,
    letterSpacing: 0.5,
  },

  OTPStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    height: 57,
    width: 57,
    borderBottomWidth: 1,
    marginHorizontal: perfectSize(10),
    marginTop: perfectSize(30),
  },

  errorBoxContainer: {
    marginVertical: 10,
  },
  image: {
    width: perfectSize(200),
    height: perfectSize(100),
    resizeMode: "contain",
    // backgroundColor:'#000080'
    // color:'#000080'

  },
  button: {
    // backgroundColor: "#ff751c",
    height: perfectSize(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#000080",
    marginTop: perfectSize(10),
  },
  button2: {
    backgroundColor: "#000080",
    height: perfectSize(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: perfectSize(20),
  },
  background: {
    resizeMode: "cover",
    height: perfectSize(180),
    justifyContent: "center",
  },
});
export default Verification;

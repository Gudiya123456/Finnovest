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
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FONTS, COLORS, SIZES } from "../../constants";
import Button from "../../Components/Button";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { perfectSize } from "../../constants/theme";

const Verification = ({ navigation, route }) => {
  const { phone } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErros] = useState({});
  const [defaultParams] = useState({
    otp: "",
  });
  const [params, setParams] = useState(
    JSON.parse(JSON.stringify(defaultParams))
  );
  const backAction = () => {
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
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
      const response = await axios.post(
        "https://app-console.finocrm.in/api/v2/check-otp",
        {
          phone: phone,
          otp: otp,
        }
      );
      if (!response.data.status) {
        setIsLoading(false);
        setErros({ ...errors, otp: response.data.message });
      }
      if (response.data.status) {
        AsyncStorage.setItem("token", response.data.token);
        AsyncStorage.setItem("userName", response.data.name);
        setIsLoading(false);
        navigation.push("tabnavigator");
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed with server Error!");
    }
  };

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
              <Text style={styles.heading}>+91 9656676466 </Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <AntDesign name="edit" size={perfectSize(20)} color="green" />
              </TouchableOpacity>
            </View>
            <View>
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
          </View>
          <TouchableOpacity style={styles.button} disabled={true}>
            <Text style={[styles.content, { color: "gray" }]}>Resend</Text>
          </TouchableOpacity>
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
    height: 58,
    width: 58,
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
  },
  button: {
    // backgroundColor: "#ff751c",
    height: perfectSize(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: perfectSize(25),
    borderWidth: 0.5,
    borderColor: "gray",
  },
  button2: {
    backgroundColor: "#ff751c",
    height: perfectSize(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: perfectSize(20),
  },
  background: {
    resizeMode: "cover",
    height: perfectSize(180),
    justifyContent: "center",
  },
});
export default Verification;

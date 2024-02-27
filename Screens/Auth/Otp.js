import { View, Text, StyleSheet, BackHandler, ScrollView } from "react-native";
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
            <Text style={styles.headerTitle}>Verification</Text>
            <Text style={styles.subHeaderTitle}>
              OTP send to your registerd phone number{" "}
            </Text>
          </View>
        </SafeAreaView>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <KeyboardAwareScrollView>
            <Text style={styles.inputHeader}>Please Enter the OTP</Text>
            <OTPTextInput
              textInputStyle={styles.OTPStyle}
              inputCount={4}
              tintColor={COLORS.primary}
              handleTextChange={changeValue}
            />

            <View style={styles.errorBoxContainer}>
              <View>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: errors.otp ? COLORS.error : COLORS.primary,
                  }}
                >
                  {errors?.otp
                    ? errors.otp
                    : "Please enter the 4-digit OTP received on your number"}
                </Text>
              </View>
              {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    color={isChecked ? COLORS.primary : COLORS.black}
                                    onValueChange={setChecked}
                                />
                                <Text style={{ ...FONTS.body4 }}>Remenber me</Text>
                            </View> */}
            </View>

            <Button
              title="VERIFY"
              isLoading={isLoading}
              onPress={verifyOtpFromServer}
            />
          </KeyboardAwareScrollView>
        </Animatable.View>
      </ScrollView>
    </LinearGradient>
  );
};

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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  inputHeader: {
    textTransform: "uppercase",
    ...FONTS.body4,
    marginVertical: 4,
  },
  OTPStyle: {
    backgroundColor: COLORS.gray,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    height: 58,
    width: 58,
    borderBottomWidth: 1,
  },

  errorBoxContainer: {
    marginVertical: 10,
  },
});
export default Verification;

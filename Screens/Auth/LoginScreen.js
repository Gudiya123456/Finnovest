import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, COLORS, SIZES } from "../../constants";
import axios from "axios";
import { HomeScreen } from "../HomeScreen";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { perfectSize } from "../../constants/theme";
import { StatusBar } from "expo-status-bar";

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
        "https://finocrm.in/api/check-number/" + phone
      );
      console.log();
      if (response.data.status == "error") {
        setIsLoading(false);
        setErros({ ...errors, phone: response.data.message });
      }
      if (response.data.status == "success") {
        setIsLoading(false);
        navigation.push("otp", { phone });
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed with server Error try after sometime!");
    }
  };
  useEffect(() => {
    if (params.phone.length == 10) {
      Keyboard.dismiss();
      getOtpFromServer();
    }
  }, [params]);
  return isLogedIn ? (
    <HomeScreen />
  ) : (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />

      <SafeAreaView style={{ flex: 1, padding: perfectSize(15) }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.heading}>Login to your account!</Text>
            </View>
            <View style={{ marginTop: perfectSize(5) }}>
              <Text style={[styles.content, { color: "gray" }]}>
                Hello, wellcome back!
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.content, { color: "gray" }]}>
                Phone Number
              </Text>
              <View style={styles.inputbox}>
                <Feather name="phone-call" size={20} color="black" />
                <TextInput
                  style={styles.input}
                  placeholder={"Enter 10 Digits Number"}
                  placeholderTextColor={"#000"}
                  value={params.phone}
                  keyboardType="numeric"
                  onChangeText={(text) => changeValue("phone", text)}
                  maxLength={10}
                />
              </View>
              {errors.phone && (
                <View style={{ marginLeft: perfectSize(3) }}>
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: errors.phone ? COLORS.error : COLORS.primary,
                    }}
                  >
                    {errors.phone && errors.phone}
                  </Text>
                </View>
              )}

              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={getOtpFromServer}
                >
                  {isLoading ? (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <ActivityIndicator size={"small"} color={"white"} />
                      <Text style={[styles.content, { color: "white" }]}>
                        {"  "}
                        Please Wait........
                      </Text>
                    </View>
                  ) : (
                    <Text style={[styles.content, { color: "white" , backgroundColor:'navi' }]}>
                      Request OTP
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* <View>
              <Text>Don"t have an account</Text>
            </View> */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: perfectSize(40),
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

  inputContainer: {
    marginTop: perfectSize(30),
  },
  inputbox: {
    flexDirection: "row",
    borderWidth: 0.5,
    // borderColor: "gray",
    paddingHorizontal: perfectSize(10),
    borderRadius: 5,
    alignItems: "center",
    marginVertical: perfectSize(10),
    height: perfectSize(45),
  },
  input: {
    fontSize: 15,
    letterSpacing: 0.6,
    flex: 1,
    paddingHorizontal: perfectSize(10),
  },
  button: {
    backgroundColor: "#000080",
    height: perfectSize(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: perfectSize(20),
  },
});

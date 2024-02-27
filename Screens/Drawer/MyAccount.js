import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FONTS, COLORS, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerScreenTitle } from "../../Components/DrawerScreenTitle";
import * as Animatable from "react-native-animatable";
import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../Components/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyAccount({ navigation }) {
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUserDetails = async () => {
    setIsLoading(true);

    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://app-console.finocrm.in/api/v2/get-profile-data",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.data.status == "success") setUser(response.data.profile);
    } catch (error) {
      if (error.response.status === 401) navigation.push("login");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 1, y: 0.6 }}
      colors={["#ff751a", "#ffff00"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <DrawerScreenHeader navigation={navigation} />

        <DrawerScreenTitle title="Your Profile" subTitle="" />
      </SafeAreaView>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://ui-avatars.com/api/?background=random&name=" +
                user?.name,
            }}
            style={styles.image}
          />
        </View>

        {isLoading ? (
          <View style={styles.contentLoader}>
            <ActivityIndicator size="large" color="#ff751a" />
          </View>
        ) : (
          <KeyboardAwareScrollView style={{ height: 600 }}>
            <View style={[styles.inputContainer, { borderColor: "gray" }]}>
              <TextInput
                style={styles.input}
                placeholder={"Enter Your Full Name"}
                placeholderTextColor={"#000"}
                value={user?.name}
                keyboardType="numeric"
                onChangeText={(text) => changeValue("phone", text)}
              />
            </View>

            <View style={[styles.inputContainer, { borderColor: "gray" }]}>
              <TextInput
                style={styles.input}
                placeholder={"Enter Your Email Address"}
                placeholderTextColor={"#000"}
                value={user?.email}
                keyboardType="email-address"
                onChangeText={(text) => changeValue("phone", text)}
              />
            </View>

            <View
              style={[
                styles.inputContainer,
                { borderColor: "gray", backgroundColor: "#ffe6e6" },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={"Enter 10 Digits Number"}
                placeholderTextColor={"#000"}
                value={user?.phone}
                keyboardType="numeric"
                editable={false}
                onChangeText={(text) => changeValue("phone", text)}
              />
            </View>

            {/* <Button
                                title="Save Details"
                                isLoading={false}
                            // onPress={alert(9)}
                            /> */}
          </KeyboardAwareScrollView>
        )}
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 30,
    minHeight: "100",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    marginTop: -80,
    borderRadius: 50,
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
  },

  inputHeader: {
    textTransform: "uppercase",
    ...FONTS.body4,
    marginVertical: 4,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderRadius: 12,
    borderWidth: 0.7,
    marginVertical: 5,
    flexDirection: "row",
    marginTop: 15,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontFamily: "",
    paddingTop: 0,
    fontSize: 16,
  },
  contentLoader: {
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
});

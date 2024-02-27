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

export default function Faqs({ navigation }) {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <LinearGradient
        start={{ x: 0, y: 0.4 }}
        end={{ x: 1, y: 0.6 }}
        colors={["#ff751a", "#ffff00"]}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <DrawerScreenHeader navigation={navigation} />

          <DrawerScreenTitle title="Faq" subTitle="Coming Soon" />
        </SafeAreaView>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        ></Animatable.View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
    // minHeight: "500",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  content: {
    // fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    textAlign: "justify",
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  contentLoader: {
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
});

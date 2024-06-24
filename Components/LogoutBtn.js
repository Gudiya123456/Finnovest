import { View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { perfectSize } from "../constants/theme";

export default function LogoutBtn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const logoutHandle = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userName");
      navigation.navigate("login");
    } catch (error) {
      console.error("Error removing data from AsyncStorage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#ff751a",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 5,
        }}
        onPress={logoutHandle}
      >
        {/* <Button title="Logout" onPress={logoutHandle} isLoading={isLoading} /> */}
        <Text style={{ fontSize: 15, letterSpacing: 0.8, color: "white" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

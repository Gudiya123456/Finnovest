import { View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { perfectSize } from "./kyc/IndentityDetails";

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
    <View style={{ padding: 35 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#ff751a",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: perfectSize(15),
          borderRadius: 10,
        }}
      >
        {/* <Button title="Logout" onPress={logoutHandle} isLoading={isLoading} /> */}
        <Text style={{ fontSize: 15, letterSpacing: 0.8, color: "white" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

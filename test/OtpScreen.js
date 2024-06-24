import { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
export default function OtpScreen({ navigation, route }) {
  const { phone } = route.params;
  const [otp, setOtp] = useState(null);
  const checkOtp = async () => {
    try {
      const response = await axios.post(
        "https://app-console.finocrm.in/api/v2/check-otp",
        {
          phone: phone,
          otp: otp,
        }
      );

      if (response.data.status) {
        setupAuthData(response.data);
      } else {
        alert(response.data.message);
      }
    } catch (error) {}
  };

  const setupAuthData = async (data) => {
    try {
      await SecureStore.setItemAsync("appToken", data.token);
      navigation.push("tabnavigator");
    } catch (error) {
      // Handle errors, such as when data storage fails
      console.error("Error storing data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>OTP Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setOtp(value);
        }}
        value={otp}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button
        style={{ fontSize: 20, color: "green" }}
        styleDisabled={{ color: "red" }}
        onPress={checkOtp}
        title="Press Me"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

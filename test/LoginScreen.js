import { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { PageLoader } from "../../Components/PageLoader";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
export default function LoginScreen({ navigation }) {
  const [appToken, setAppToken] = useState(null);
  const [phone, setPhone] = useState("9656676466");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveData();
  }, []);

  const checkTokenValid = async (storedData) => {
    try {
      //
    } catch (error) {}
  };

  const retrieveData = async () => {
    try {
      const storedData = await SecureStore.getItemAsync("appToken");
      if (storedData !== null) {
        setAppToken(storedData);
        checkTokenValid(storedData);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      setLoading(false);
    }
  };

  const checkPhoneNumber = async () => {
    try {
      const response = await axios.get(
        "https://app-console.finocrm.in/api/v2/check-number/" + phone
      );

      if (response.data.status) {
        navigation.push("otp", { phone });
      } else {
        alert(response.data.message);
      }
    } catch (error) {}
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setPhone(value);
        }}
        value={phone}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button
        style={{ fontSize: 20, color: "green" }}
        styleDisabled={{ color: "red" }}
        onPress={checkPhoneNumber}
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

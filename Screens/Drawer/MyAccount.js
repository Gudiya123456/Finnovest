import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Platform,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { perfectSize } from "../../constants/theme";

export default function MyAccount({ navigation }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(1);
  const [errors, setErros] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchUserDetails();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchUserDetails();
  }, [reload]);
  const fetchUserDetails = async () => {
    setRefresh(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get("https://finocrm.in/api/get-user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.data.status == "success") {
        setUser(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) navigation.push("login");
    } finally {
      setRefresh(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setParams({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
  }, [user]);

  const [params, setParams] = useState(JSON.parse(JSON.stringify(user)));
  const changeValue = (e, value) => {
    setErros({ ...errors, [e]: "" });
    setParams({ ...params, [e]: value });
  };
  const validate = () => {
    // console.log(5)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    setErros({});
    let errors = {};
    if (!params.first_name) {
      errors = { ...errors, first_name: "First Name is required!" };
    } else if (!nameRegex.test(params.first_name)) {
      errors = {
        ...errors,
        first_name: "Invalid Name!",
      };
    }
    if (!params.last_name) {
      errors = { ...errors, last_name: "Last name is required!" };
    } else if (!nameRegex.test(params.last_name)) {
      errors = {
        ...errors,
        last_name: "Invalid Name!",
      };
    }
    if (!params.email) {
      errors = { ...errors, email: "Email address is required!" };
    } else if (!emailRegex.test(params.email)) {
      errors = { ...errors, email: "invalid email address!" };
    }

    setErros(errors);
    return { totalErrors: Object.keys(errors).length };
  };

  const updateApi = async () => {
    setBtnLoading(true);

    try {
      const token = await AsyncStorage.getItem("token");

      const response = await axios({
        method: "post",
        url: "https://finocrm.in/api/update-user",
        data: {
          first_name: params.first_name,
          last_name: params.last_name,
          email: params.email,
        },
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (response.data.status == "success") {
        alert("Profile Updated successfully");
        AsyncStorage.setItem(
          "userName",
          params.first_name + " " + params.last_name
        );
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        console.log(error);
      }
    } finally {
      setBtnLoading(false);
    }
  };

  const update = () => {
    const isValid = validate();
    if (isValid.totalErrors) return false;
    updateApi();
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "navy",
          height: 160,
          borderBottomRightRadius: perfectSize(20),
          // borderBottomLeftRadius: 20,
        }}
      >
        <DrawerScreenHeader navigation={navigation} />
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        {/* <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://ui-avatars.com/api/?background=random&name=" +
                user?.name,
            }}
            style={styles.image}
          />
        </View> */}
        {isLoading || refresh ? (
          <View style={styles.contentLoader}>
            <ActivityIndicator size="large" color="#ff751a" />
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={fetchUserDetails}
              />
            }
          >
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: Platform.OS === "ios" ? 600 : 0 }}
            >
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={styles.input}
                  placeholder={"Enter Your first Name"}
                  placeholderTextColor={"#000"}
                  value={params?.first_name}
                  onChangeText={(text) => changeValue("first_name", text)}
                />
              </View>
              {errors.first_name && (
                <Text style={styles.error}>{errors.first_name}</Text>
              )}

              <View style={[styles.inputContainer]}>
                <TextInput
                  style={styles.input}
                  placeholder={"Enter Your last Name"}
                  placeholderTextColor={"#000"}
                  value={params?.last_name}
                  onChangeText={(text) => changeValue("last_name", text)}
                />
              </View>
              {errors.last_name && (
                <Text style={styles.error}>{errors.last_name}</Text>
              )}

              <View style={[styles.inputContainer]}>
                <TextInput
                  style={styles.input}
                  placeholder={"Enter Your Email Address"}
                  placeholderTextColor={"#000"}
                  value={params?.email}
                  keyboardType="email-address"
                  onChangeText={(text) => changeValue("email", text)}
                />
              </View>
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <View
                style={[
                  styles.inputContainer,
                  { backgroundColor: "whitesmoke" },
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder={"Enter 10 Digits Number"}
                  placeholderTextColor={"#000"}
                  value={user?.phone}
                  keyboardType="numeric"
                  editable={false}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={update}>
                  {btnLoading ? (
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
                    <Text style={[styles.input, { color: "white" }]}>
                      Update
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.7,
  },
  header: {
    justifyContent: "center",
    marginTop: -40,
    paddingHorizontal: perfectSize(15),
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 40,
    paddingVertical: perfectSize(40),
    borderTopRightRadius: 30,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
  },

  inputContainer: {
    borderWidth: 0.5,
    borderColor: "gray",
    marginTop: perfectSize(20),
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    fontSize: 15,
  },
  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    marginTop: -50,
    borderRadius: 50,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: perfectSize(20),
    backgroundColor: "navy",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 12,
    color: "red",
  },
  contentLoader: {
    marginTop: perfectSize(10),
  },
});

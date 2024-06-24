import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import MapView, { Marker } from "react-native-maps";

import DrawerScreenHeader from "../../Components/DrawerScreenHeader";
import { perfectSize } from "../../constants/theme";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function ContactUs({ navigation }) {
  const location = {
    latitude: 12.988740092735037,
    longitude: 77.59453238191081,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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
          <Text style={styles.title}>Contact Us</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, padding: perfectSize(15) }}
        >
          <Text style={styles.subTitle}>24/7 Support</Text>
          <Text style={[styles.content, { marginBottom: 10 }]}>
            Corporate Office
          </Text>
          <Text style={styles.content}>
            Finnovest Research, JP Nagar Bangalore, Karnataka.
          </Text>
          <Text style={styles.content}>Phone Number: (+91) 8497077442</Text>
          <Text style={styles.content}>
            Email: support@finnovestresearch.com
          </Text>
          <KeyboardAwareScrollView style={{ flex: 1 }}>
            <View style={{ marginTop: perfectSize(10) }}>
              <Text style={styles.subTitle}>Contact Form</Text>

              <View style={styles.inputcontainer}>
                <View>
                  <FontAwesome name="user-o" size={20} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput placeholder="Full Name" style={styles.input} />
                </View>
              </View>

              <View style={styles.inputcontainer}>
                <View>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="black"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              <View style={styles.inputcontainer}>
                <View>
                  <Feather name="phone-call" size={20} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Mobile Number"
                    style={styles.input}
                    inputMode="numeric"
                    maxLength={10}
                  />
                </View>
              </View>

              <View style={{ borderWidth: 0.5, padding: perfectSize(10) }}>
                <TextInput
                  placeholder="Message"
                  style={[styles.input, { textAlignVertical: "top" }]}
                  multiline={true}
                  numberOfLines={5}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.content, { color: "white" }]}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
          {/* <MapView style={styles.map} initialRegion={location}>
            <Marker
              coordinate={location}
              title="Bangalore,Karnataka"
              // description="A popular place in Bangalore"
            />
          </MapView> */}
        </ScrollView>
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
  content: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 23,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.7,
    marginVertical: perfectSize(10),
  },
  inputcontainer: {
    borderWidth: 0.6,
    height: 45,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: perfectSize(10),
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    fontSize: 15,
    letterSpacing: 0.5,
    paddingLeft: perfectSize(10),
    fontWeight: "500",
  },
  button: {
    backgroundColor: "navy",
    marginTop: perfectSize(20),
    paddingVertical: perfectSize(10),
    alignItems: "center",
    borderRadius: 5,
  },
  map: {
    marginVertical: perfectSize(15),
    height: 150,
    width: "100%",
  },
});

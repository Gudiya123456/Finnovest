import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { perfectSize } from "../constants/theme";

export default function CallsCard({ activeTab }) {
  const [show, setShow] = useState(0);
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={["#000fFF", "#00F4FF"]}
        locations={[0.2, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 20 }}
      > */}
      {/* <LinearGradient
        start={{ x: 0, y: 0.4 }}
        end={{ x: 1, y: 0.6 }}
        colors={["#ff751a", "#ffff00"]}
        style={{ borderRadius: 20 }}
      > */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 15,
          // margin: 3,
          // shadowColor: "#000",
          // shadowOffset: { width: 1, height: 1 },
          // shadowOpacity: 0.4,
          // shadowRadius: 3,
          // elevation: 5,
          zIndex: 1,
          borderColor: "#ff7c18",
          borderWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 5 }}>
            <Image
              style={styles.image}
              source={require("../assets/round-shape.png")}
              contentFit="cover"
              transition={500}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <View style={{ padding: 5, justifyContent: "center" }}>
              <Text
                style={{
                  color: "gray",
                  fontSize: 16,
                }}
              >
                {/* {signal.script} */}
                Buy Dixon Nov 5350 CE
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
              >
                {/* {signal.created_at}
                 */}
                21 Nov 2023 09:30 pm
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 8, paddingLeft: 5, paddingTop: 5 }}
              onPress={() => {
                setShow(!show);
              }}
            >
              {activeTab === "live" ? (
                ""
              ) : (
                <MaterialIcons
                  name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={25}
                  color="#000"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                }}
              >
                {/* ₹{signal.price_range} */}
                ₹40.00 - 42.50
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontStyle: "italic",
                }}
              >
                (Recommended / Entry Price)
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "" }}>
            <View
              style={{
                backgroundColor: "green",
                paddingHorizontal: 2,
                alignItems: "center",
                paddingVertical: 2,
                width: "auto",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                Buy
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontStyle: "italic",
                }}
              >
                (Action)
              </Text>
            </View>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "#f2f2f2",
              paddingBottom: 5,
            }}
          >
            <Text
              style={{
                color: "gray",
                flex: 4,
              }}
            >
              Stoploss
            </Text>
            <Text style={{ color: "gray" }}>Rs. 30.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "#f2f2f2",
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                color: "gray",
                flex: 4,
              }}
            >
              Target 1
            </Text>
            <Text style={{ color: "gray" }}>Rs. 60.60</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "#f2f2f2",
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                color: "gray",
                flex: 4,
              }}
            >
              Target 2
            </Text>
            <Text style={{ color: "gray" }}>Rs. 70.00</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 5,
            }}
          >
            <Text
              style={{
                color: "gray",
                flex: 4,
              }}
            >
              Duration
            </Text>
            <Text style={{ color: "gray" }}>interady/Holding</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          // elevation: 5,
          // shadowColor: "black",
          // shadowOpacity: 0.5,
          // shadowOffset: { width: 1, height: 1 },
          borderColor: "orange",
          borderWidth: 1,
          marginLeft: 15,
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
          marginRight: 15,
          marginTop: -5,
          marginBottom: perfectSize(5),
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
          display: activeTab === "live" ? "flex" : show ? "flex" : "none",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#ddd",

            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#000" }}>one</Text>
          <Text style={{ color: "#000" }}>10:30</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#ddd",

            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#000" }}>Two</Text>
          <Text style={{ color: "#000" }}>10:30</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: "#ddd",

            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#000" }}>Three</Text>
          <Text style={{ color: "#000" }}>10:30</Text>
        </View>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: perfectSize(10),

    // borderWidth: 6
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  titleContainer: {
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 16,
  },
  image: {
    width: 50,
    height: 50,
    maxHeight: 50,
    // margin: 5,
    // backgroundColor: 'red',
  },
});

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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CallsCard({ data }) {
  const [show, setShow] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [readRemarks, setReadRemarks] = useState(new Set());

  useEffect(() => {
    // Load read remarks from AsyncStorage on component mount
    const loadReadRemarks = async () => {
      try {
        const storedReadRemarks = await AsyncStorage.getItem("readRemarks");
        if (storedReadRemarks !== null) {
          setReadRemarks(new Set(JSON.parse(storedReadRemarks)));
        }
      } catch (error) {
        console.error("Error loading read remarks:", error);
      }
    };

    loadReadRemarks();
  }, []);

  useEffect(() => {
    // Calculate new unread remarks count
    const unreadRemarksCount = data.remarks.filter(
      (remark) => !readRemarks.has(remark.id)
    ).length;
    setUnreadCount(unreadRemarksCount);
  }, [data.remarks, readRemarks]);

  const handleArrowPress = () => {
    setShow(!show);
    // Mark all remarks as read when opening
    const updatedReadRemarks = new Set([...readRemarks]);
    data.remarks.forEach((remark) => updatedReadRemarks.add(remark.id));
    setReadRemarks(updatedReadRemarks);
    setUnreadCount(0); // Reset unread count
    saveReadRemarks(updatedReadRemarks);
  };

  const saveReadRemarks = async (remarks) => {
    try {
      await AsyncStorage.setItem("readRemarks", JSON.stringify([...remarks]));
    } catch (error) {
      console.error("Error saving read remarks:", error);
    }
  };

  return (
    <View style={styles.container} key={data.id}>
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
                  fontWeight: "600",
                }}
              >
                {data.script_name}
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
              >
                {/* {signal.created_at}
                 */}
                {data.time}
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 8, paddingLeft: 5, paddingTop: 5 }}
              onPress={handleArrowPress}
            >
              {data.remarks.length <= 0 ? (
                ""
              ) : (
                <View>
                  <MaterialIcons
                    name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    size={25}
                    color="#000"
                  />

                  <View
                    style={{
                      display: unreadCount > 0 ? "flex" : "none",
                      position: "absolute",
                      right: 0,
                      top: -4,
                      backgroundColor: "red",
                      borderRadius: 7,
                      height: 14,
                      minWidth: 14,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        color: "white",
                        lineHeight: 13,
                        margin: 1,
                      }}
                    >
                      {unreadCount}
                    </Text>
                  </View>
                </View>
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
                {data.price_range}
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
                backgroundColor:
                  (data.action == "Buy" && "green") ||
                  (data.action == "Sell" && "red") ||
                  (data.action == "Hold" && "orange"),
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
                {data.action}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                (Action){" "}
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
            <Text style={{ color: "gray" }}>Rs. {data.stop_loss}</Text>
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
            <Text style={{ color: "gray" }}>Rs. {data.target1}</Text>
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
            <Text style={{ color: "gray" }}>Rs. {data.target2}</Text>
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
            <Text style={{ color: "gray" }}>{data.duration}</Text>
          </View>
        </View>
      </View>
      {/* {data.remarks.length && ( */}
      {data.remarks.length > 0 && (
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
            // marginBottom: perfectSize(5),
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
            display: show ? "flex" : "none",
          }}
        >
          {data.remarks.map((calls, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: index + 1 == data.remarks.length ? "#fff" : "#ddd",
                paddingVertical: 5,
              }}
              key={calls.id}
            >
              <Text style={{ color: "#000" }}>{calls.title}</Text>
              <Text style={{ color: "#000" }}>{calls.created_at}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
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

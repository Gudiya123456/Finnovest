import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Default, perfectSize } from "../constants/theme";
import {
  MaterialCommunityIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image } from "expo-image";
export default function HomeHeader({ navigation }) {
  return (
    <View style={{color:'red', flexDirection:'row', justifyContent:'space-between', margin:perfectSize(15)}} >
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View><Image source={require("../assets/logo.png")}  style={styles.image} /></View>
      <TouchableOpacity onPress={() => navigation.push("notifications")}>
          <MaterialCommunityIcons name="bell-badge" size={24} color="#fff" />
          <View
            style={{
              position: "absolute",
              right: -2,
              backgroundColor: "navy",
              borderRadius: 10,
              minWidth: 15,
              top: -2,
              padding: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                minWidth: 14,
                justifyContent: "center",
                alignItems: "center",
                padding: 0.3,
              }}
            >
              <Text style={{ fontSize: 12, color: "orange", lineHeight: 13 }}>
                1
              </Text>
            </View>
          </View>
        </TouchableOpacity>
    </View>
   
    // <View
    //   style={{
    //     flexDirection: "row",
    //     marginHorizontal: perfectSize(15),
    //     alignItems: "center",
    //     marginTop: perfectSize(5),
    //   }}
    // >
      // <View>
      //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
      //     <FontAwesome5 name="bars" size={22} color="#fff" />
      //   </TouchableOpacity>
      // </View>
    //   {/* <View
    //     style={{
    //       flex: 1,
    //       height: perfectSize(40),
    //       alignItems: "center",
    //     }}
    //   >
    //     <Image source={require("../assets/logo.png")} style={styles.image} />
    //   </View> */}
    //   <View style={{ flex: 1, alignItems: "flex-end" }}>
    //       <Image source={require("../assets/fav-icon.png")}  style={[styles.image , {backgroundColor:'red', marginLeft:'200px'}]} />
    //   </View>
    //   <View style={{ flex: 1, alignItems: "flex-end" }}>
        // <TouchableOpacity onPress={() => navigation.push("notifications")}>
        //   <MaterialCommunityIcons name="bell-badge" size={24} color="#fff" />
        //   <View
        //     style={{
        //       position: "absolute",
        //       right: -2,
        //       backgroundColor: "navy",
        //       borderRadius: 10,
        //       minWidth: 15,
        //       top: -2,
        //       padding: 1,
        //       justifyContent: "center",
        //       alignItems: "center",
        //     }}
        //   >
        //     <View
        //       style={{
        //         backgroundColor: "white",
        //         borderRadius: 10,
        //         minWidth: 14,
        //         justifyContent: "center",
        //         alignItems: "center",
        //         padding: 0.3,
        //       }}
        //     >
        //       <Text style={{ fontSize: 12, color: "orange", lineHeight: 13 }}>
        //         1
        //       </Text>
        //     </View>
        //   </View>
        // </TouchableOpacity>
    //   </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: perfectSize(100),
    height: perfectSize(40),
    contentFit: "contain",
    // color:'white',
    // marginLeft:'100px'
   
  },
});

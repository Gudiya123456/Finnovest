import { View, Text, StatusBar, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import LogoutBtn from "../Components/LogoutBtn";
// import { StatusBar } from "expo-status-bar";

const DraweContent = ({ props, routes }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <>
        {/* <DrawerHeader /> */}
        {/* <StatusBar style="auto" /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: "white",
            paddingTop: 10,
            justifyContent: "center",
          }}
        >
          <DrawerItemList {...props} />

          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <LogoutBtn />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default DraweContent;

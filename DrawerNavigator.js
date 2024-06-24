import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import StackNavigator from "./StackNavigator";
import MyAccount from "./Screens/Drawer/MyAccount";
import AboutUs from "./Screens/Drawer/AboutUs";
import ContactUs from "./Screens/Drawer/ContactUs";

import LogoutBtn from "./Components/LogoutBtn";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import TermsAndConditions from "./Screens/Drawer/TermsAndConditions";
import CancellationAndRefundPolicy from "./Screens/Drawer/CancellationAndRefundPolicy";
import PrivacyPolicy from "./Screens/Drawer/PrivacyPolicy";
import RegulatoryCompliance from "./Screens/Drawer/RegulatoryCompliance";
import InvestorCharter from "./Screens/Drawer/InvestorCharter";
import ComplaintRedressal from "./Screens/Drawer/ComplaintRedressal";
import Kyc from "./Screens/Kyc/Kyc";
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <SafeAreaView
              style={{
                flex: 1,
                paddingTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 0,
              }}
            >
              <>
                {/* <DrawerHeader /> */}

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
        }}
        screenOptions={{
          drawerStyle: {
            width: "90%",
          },
          headerShown: false,
          drawerActiveTintColor: "#000",
          drawerLabelStyle: "blue",
          drawerLabelStyle: {
            // backgroundColor: "#000",
            // height: 50,
            // borderBottomWidth: 1,
            // borderBottomColor: "red"
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={20} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="My Account"
          options={{
            drawerLabel: "My Account",
            title: "My Account",
            drawerIcon: () => (
              <AntDesign name="profile" size={20} color="black" />
            ),
          }}
          component={MyAccount}
        />

        <Drawer.Screen
          name="About Us"
          options={{
            drawerLabel: "About Us",
            title: "About Us",
            drawerIcon: () => (
              <FontAwesome name="users" size={20} color="black" />
            ),
          }}
          component={AboutUs}
        />
        <Drawer.Screen
          name="TermsAndConditions"
          options={{
            drawerLabel: "Terms & Conditions",
            title: "Terms & Conditions",
            drawerIcon: () => (
              <FontAwesome5 name="question-circle" size={20} color="#000" />
            ),
          }}
          component={TermsAndConditions}
        />
        <Drawer.Screen
          name="CancellationAndRefundPolicy"
          options={{
            drawerLabel: "Cancellation & RefundPolicy",
            title: "CancellationAndRefundPolicy",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="cash-refund"
                size={20}
                color="black"
              />
            ),
          }}
          component={CancellationAndRefundPolicy}
        />
        <Drawer.Screen
          name="PrivacyPolicy"
          options={{
            drawerLabel: "Privacy Policy",
            title: "PrivacyPolicy",
            drawerIcon: () => (
              <MaterialIcons name="security" size={20} color="black" />
            ),
          }}
          component={PrivacyPolicy}
        />
        <Drawer.Screen
          name="RegulatoryCompliance"
          component={RegulatoryCompliance}
          options={{
            drawerLabel: "Regulatory Compliance",
            title: "RegulatoryCompliance",
            drawerIcon: () => (
              <MaterialIcons name="fact-check" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          options={{
            drawerLabel: "Contact Us",
            title: "Contact Us",
            drawerIcon: () => (
              <MaterialIcons name="perm-phone-msg" size={20} color="black" />
            ),
          }}
          component={ContactUs}
        />
        <Drawer.Screen
          name="InvestorCharter"
          component={InvestorCharter}
          options={{
            drawerLabel: "Investor Charter",
            title: "InvestorCharter",
            drawerIcon: () => (
              <FontAwesome5 name="user-tie" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="ComplaintRedressal"
          component={ComplaintRedressal}
          options={{
            drawerLabel: "Complaint Redressal",
            title: "ComplaintRedressal",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="account-question-outline"
                size={20}
                color="black"
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="FAQs"
          options={{
            drawerLabel: "FAQs",
            title: "FAQs",
            drawerIcon: () => (
              <FontAwesome5 name="question-circle" size={20} color="#000" />
            ),
          }}
          component={Faqs}
        /> */}
        <Drawer.Screen
          name="Kyc"
          component={Kyc}
          options={{
            drawerLabel: "Kyc",
            title: "Kyc",
            drawerIcon: () => (
              <Feather name="user-check" size={22} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

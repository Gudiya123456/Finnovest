import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndentityDetails from "./IndentityDetails";
import Addressdetails from "./Addressdetails";
import UploadDocument from "./UploadDocument";

const StackNavigation = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="IdentityDetails" component={IndentityDetails} />
      <stack.Screen name="Addressdetails" component={Addressdetails} />
      <stack.Screen name="UploadDocument" component={UploadDocument} />
    </stack.Navigator>
  );
};

export default StackNavigation;

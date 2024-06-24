import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IndentityDetails from "./IndentityDetails";
import Addressdetails from "./Addressdetails";
import UploadDocument from "./UploadDocument";

const Kyc = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IdentityDetails"
        component={IndentityDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Addressdetails"
        component={Addressdetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Kyc;

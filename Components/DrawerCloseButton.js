import { TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
export default function DrawerCloseButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
    >
      <FontAwesome5 name="chevron-circle-left" size={25} color="#fff" />
    </TouchableOpacity>
  );
}

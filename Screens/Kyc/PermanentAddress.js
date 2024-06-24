import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  EvilIcons,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { perfectSize } from "./IndentityDetails";

const PermanentAddress = () => {
  const [isChecked, setChecked] = useState(false);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const states = [
    { label: "Karnataka", value: "Karnataka" },
    { label: "TamilNadu", value: "TamilNadu" },
    { label: "AndraPradesh", value: "AndraPradesh" },
  ];
  const cities = [
    { label: "Banglore", value: "Banglore" },
    { label: "Tumkur", value: "Tumkur" },
    { label: "Hassan", value: "Hassan" },
  ];
  return (
    <View style={style.inputContainer}>
      <View style={style.inputfield}>
        <Entypo name="address" size={perfectSize(20)} color="black" />
        <TextInput
          style={style.input}
          placeholder="Flat No / Door No "
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={style.inputfield}>
        <Entypo name="address" size={perfectSize(20)} color="black" />
        <TextInput
          style={style.input}
          placeholder="Address Line 1"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={style.inputfield}>
        <Entypo name="address" size={perfectSize(20)} color="black" />
        <TextInput
          style={style.input}
          placeholder="Address Line 2"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={style.inputfield}>
        <Ionicons
          name="location-outline"
          size={perfectSize(20)}
          color="black"
        />
        <TextInput
          style={style.input}
          placeholder="Enter Your Pincode"
          underlineColorAndroid="transparent"
          maxLength={6}
        />
      </View>
      <View style={style.dropdowns}>
        <FontAwesome6
          name="building-columns"
          size={perfectSize(20)}
          color="black"
          style={{ marginRight: perfectSize(10) }}
        />
        <View style={{ flex: 1 }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{
              label: "State",
              value: "",
              color: "#9EA0A4",
            }}
            items={[
              { label: "Karnataka", value: "Karnataka" },
              { label: "TamilNadu", value: "TamilNadu" },
              { label: "AndraPradesh", value: "AndraPradesh" },
            ]}
            useNativeAndroidPickerStyle={false}
            style={{
              inputIOS: style.content,
              inputAndroid: style.content,
              placeholder: {
                color: "#9EA0A4",
              },
            }}
          />
        </View>
      </View>

      <View style={style.dropdowns}>
        <MaterialCommunityIcons
          name="city"
          size={perfectSize(20)}
          color="black"
          style={{ marginRight: perfectSize(10) }}
        />
        <View style={{ flex: 1 }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{
              label: "City",
              value: "",
              color: "#9EA0A4",
            }}
            items={[
              { label: "Banglore", value: "Banglore" },
              { label: "Tumkur", value: "Tumkur" },
              { label: "Hassan", value: "Hassan" },
            ]}
            useNativeAndroidPickerStyle={false}
            style={{
              inputIOS: style.content,
              inputAndroid: style.content,
              placeholder: {
                color: "#9EA0A4",
              },
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PermanentAddress;
const style = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
  },
  inputfield: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(15),
    backgroundColor: "white",
  },
  input: {
    fontSize: perfectSize(14),
    fontFamily: "Montserrat_500Medium",
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(15),

    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  content: {
    fontSize: perfectSize(14),
    fontFamily: "Montserrat_500Medium",
  },
  dropdowns: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(10),
    marginBottom: perfectSize(5),
    backgroundColor: "white",
    flexDirection: "row",
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { perfectSize } from "./IndentityDetails";
import PermanentAddress from "./PermanentAddress";
import RNPickerSelect from "react-native-picker-select";
const Addressdetails = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const validationSchema = yup.object().shape({
    flat: yup
      .string()

      .required("This Field is required"),
    address1: yup.string().required("This Field is required"),
    // address2: yup
    //   .string()

    //   .required("This Field is required"),
    pincode: yup
      .string()
      .matches(/^\d{6}$/, "Invalid  pincode. It should be 6 digits")
      .required("This Field is required"),

    state: yup.string().required("This Field is required"),
    city: yup.string().required("This Field is required"),

    pflat: yup
      .string()

      .required("This Field is required"),
    paddress1: yup.string().required("This Field is required"),
    // paddress2: yup
    //   .string()

    //   .required("This Field is required"),
    ppincode: yup
      .string()
      .matches(/^\d{6}$/, "Invalid  pincode. It should be 6 digits")
      .required("This Field is required"),

    pstate: yup.string().required("This Field is required"),
    pcity: yup.string().required("This Field is required"),
  });

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    navigation.navigate("UploadDocument");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.heading}>Address Details</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Formik
            initialValues={{
              flat: "",
              address1: "",
              address2: "",
              pincode: "",
              state: "",
              city: "",
              pflat: "",
              paddress1: "",
              paddress2: "",
              ppincode: "",
              pstate: "",
              pcity: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={style.inputContainer}>
                <View style={{ marginBottom: perfectSize(5) }}>
                  <Text style={style.subheading}>Residential Address</Text>
                </View>
                <View style={style.inputfield}>
                  <Entypo name="address" size={perfectSize(20)} color="black" />
                  <TextInput
                    style={style.input}
                    placeholder="Flat No / Door No "
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("flat")}
                    onBlur={handleBlur("flat")}
                    value={values.flat}
                    returnKeyType="done"
                  />
                </View>
                {touched.flat && errors.flat && (
                  <Text style={style.error}>{errors.flat}</Text>
                )}
                <View style={style.inputfield}>
                  <Entypo name="address" size={perfectSize(20)} color="black" />
                  <TextInput
                    style={style.input}
                    placeholder="Address Line 1"
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("address1")}
                    onBlur={handleBlur("address1")}
                    value={values.address1}
                    returnKeyType="done"
                  />
                </View>
                {touched.address1 && errors.address1 && (
                  <Text style={style.error}>{errors.address1}</Text>
                )}
                <View style={style.inputfield}>
                  <Entypo name="address" size={perfectSize(20)} color="black" />
                  <TextInput
                    style={style.input}
                    placeholder="Address Line 2"
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("address2")}
                    onBlur={handleBlur("address2")}
                    value={values.address2}
                    returnKeyType="done"
                  />
                </View>
                {/* {touched.address2 && errors.address2 && (
                  <Text style={style.error}>{errors.address2}</Text>
                )} */}
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
                    keyboardType="numeric"
                    onChangeText={handleChange("pincode")}
                    onBlur={handleBlur("pincode")}
                    value={values.pincode}
                    returnKeyType="done"
                  />
                </View>
                {touched.pincode && errors.pincode && (
                  <Text style={style.error}>{errors.pincode}</Text>
                )}
                <View style={style.dropdowns}>
                  <MaterialCommunityIcons
                    name="city"
                    size={perfectSize(20)}
                    color="black"
                    style={{ marginRight: perfectSize(10) }}
                  />
                  <View style={{ flex: 1 }}>
                    <RNPickerSelect
                      placeholder={{
                        label: "City",
                        value: "",
                        color: "#9EA0A4",
                      }}
                      onValueChange={handleChange("city")}
                      value={values.city}
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
                {touched.city && errors.city && (
                  <Text style={style.error}>{errors.city}</Text>
                )}
                <View style={style.dropdowns}>
                  <Feather
                    name="flag"
                    size={perfectSize(20)}
                    color="black"
                    style={{ marginRight: perfectSize(10) }}
                  />
                  <View style={{ flex: 1 }}>
                    <RNPickerSelect
                      placeholder={{
                        label: "State",
                        value: "",
                        color: "#9EA0A4",
                      }}
                      onValueChange={handleChange("state")}
                      value={values.state}
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
                {touched.state && errors.state && (
                  <Text style={style.error}>{errors.state}</Text>
                )}

                <View style={{ marginTop: perfectSize(10) }}>
                  <Text style={style.subheading}>Permanent Address</Text>
                  <View style={style.permanentconfirmation}>
                    <Text
                      style={[
                        style.content,
                        { marginTop: perfectSize(3), flex: 1 },
                      ]}
                    >
                      Same As Residential Address
                    </Text>
                    <Checkbox
                      style={{ color: "red" }}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#2d96ff" : undefined}
                    />
                  </View>
                  {/* <PermanentAddress /> */}
                  <View style={style.inputfield}>
                    <Entypo
                      name="address"
                      size={perfectSize(20)}
                      color="black"
                    />
                    <TextInput
                      style={style.input}
                      placeholder="Flat No / Door No "
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("pflat")}
                      onBlur={handleBlur("pflat")}
                      value={values.pflat}
                      returnKeyType="done"
                    />
                  </View>
                  {touched.pflat && errors.pflat && (
                    <Text style={style.error}>{errors.pflat}</Text>
                  )}
                  <View style={style.inputfield}>
                    <Entypo
                      name="address"
                      size={perfectSize(20)}
                      color="black"
                    />
                    <TextInput
                      style={style.input}
                      placeholder="Address Line 1"
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("paddress1")}
                      onBlur={handleBlur("paddress1")}
                      value={values.paddress1}
                      returnKeyType="done"
                    />
                  </View>
                  {touched.paddress1 && errors.paddress1 && (
                    <Text style={style.error}>{errors.paddress1}</Text>
                  )}
                  <View style={style.inputfield}>
                    <Entypo
                      name="address"
                      size={perfectSize(20)}
                      color="black"
                    />
                    <TextInput
                      style={style.input}
                      placeholder="Address Line 2"
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("paddress2")}
                      onBlur={handleBlur("paddress2")}
                      value={values.paddress2}
                      returnKeyType="done"
                    />
                  </View>
                  {/* {touched.paddress2 && errors.paddress2 && (
                    <Text style={style.error}>{errors.paddress2}</Text>
                  )} */}
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
                      keyboardType="numeric"
                      onChangeText={handleChange("ppincode")}
                      onBlur={handleBlur("ppincode")}
                      value={values.ppincode}
                      returnKeyType="done"
                    />
                  </View>
                  {touched.ppincode && errors.ppincode && (
                    <Text style={style.error}>{errors.ppincode}</Text>
                  )}

                  <View style={style.dropdowns}>
                    <MaterialCommunityIcons
                      name="city"
                      size={perfectSize(20)}
                      color="black"
                      style={{ marginRight: perfectSize(10) }}
                    />
                    <View style={{ flex: 1 }}>
                      <RNPickerSelect
                        placeholder={{
                          label: "City",
                          value: "",
                          color: "#9EA0A4",
                        }}
                        onValueChange={handleChange("pcity")}
                        value={values.pcity}
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
                  {touched.pcity && errors.pcity && (
                    <Text style={style.error}>{errors.pcity}</Text>
                  )}
                  <View style={style.dropdowns}>
                    <Feather
                      name="flag"
                      size={perfectSize(20)}
                      color="black"
                      style={{ marginRight: perfectSize(10) }}
                    />
                    <View style={{ flex: 1 }}>
                      <RNPickerSelect
                        placeholder={{
                          label: "State",
                          value: "",
                          color: "#9EA0A4",
                        }}
                        onValueChange={handleChange("pstate")}
                        value={values.pstate}
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
                  {touched.pstate && errors.pstate && (
                    <Text style={style.error}>{errors.pstate}</Text>
                  )}
                </View>

                <View style={style.buttonContainer}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      style={style.button}
                      onPress={() => navigation.pop()}
                    >
                      <Text style={[style.content, { color: "white" }]}>
                        Previous Steps
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={style.button}
                      onPress={handleSubmit}
                    >
                      <Text style={[style.content, { color: "white" }]}>
                        Next Steps
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Addressdetails;
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "whitesmoke",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: perfectSize(10),
    backgroundColor: "white",
  },
  heading: {
    fontSize: perfectSize(18),
    letterSpacing: 1.5,
  },
  subheading: {
    fontSize: perfectSize(15),
    color: "#2d96ff",
  },
  content: {
    fontSize: perfectSize(14),
  },
  inputContainer: {
    backgroundColor: "white",

    marginTop: perfectSize(2),
    padding: perfectSize(15),
  },
  inputfield: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(10),
    backgroundColor: "white",
    marginBottom: perfectSize(5),
  },
  input: {
    fontSize: perfectSize(14),
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: perfectSize(20),
  },
  button: {
    backgroundColor: "#2d96ff",
    padding: perfectSize(10),
    borderRadius: 5,
    width: perfectSize(130),
    justifyContent: "center",
    alignItems: "center",
  },
  permanentconfirmation: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(10),
    backgroundColor: "white",
    marginBottom: perfectSize(5),
  },
  icon: {
    marginRight: 5,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  error: {
    color: "red",
    fontSize: perfectSize(12),
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

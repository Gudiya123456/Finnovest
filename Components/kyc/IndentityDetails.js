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
import React, { useState } from "react";

import { create } from "react-native-pixel-perfect";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export const PerfectFixSize = {
  width: 414,
  height: 896,
};

export const perfectSize = create(PerfectFixSize);

const IndentityDetails = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters")
      .required("Name is required"),
    fathername: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters")
      .required("Name is required"),
    aadharNumber: yup
      .string()
      .matches(
        /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
        "Invalid Aadhar number. It should be 12 digits and 1234-1234-1234 format"
      )
      .required("Aadhar number is required"),
    panCardNumber: yup
      .string()
      .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid PAN card number")
      .required("PAN card number is required"),
    gender: yup.string().required("Gender is required"),
    marriedstatus: yup.string().required("married status is required"),
    nationality: yup.string().required("nationality is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
  });

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    navigation.navigate("Addressdetails");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign
              name="arrowleft"
              size={24}
              style={{ paddingLeft: perfectSize(3) }}
            />
          </TouchableOpacity>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={style.heading}>KYC</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Formik
            initialValues={{
              name: "",
              fathername: "",
              aadharNumber: "",
              panCardNumber: "",
              gender: "",
              marriedstatus: "",
              nationality: "",

              dateOfBirth: null,
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
              setFieldValue,
            }) => (
              <View style={style.inputContainer}>
                <View style={{ marginBottom: perfectSize(5) }}>
                  <Text style={style.subheading}>Identity Details</Text>
                </View>
                <View style={style.inputfield}>
                  <FontAwesome
                    name="user-o"
                    size={perfectSize(20)}
                    color="black"
                  />
                  <TextInput
                    style={style.input}
                    placeholder="Enter Your Full Name "
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    returnKeyType="done"
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={style.error}>{errors.name}</Text>
                )}
                <View style={style.inputfield}>
                  <FontAwesome
                    name="user-o"
                    size={perfectSize(20)}
                    color="black"
                  />
                  <TextInput
                    style={style.input}
                    placeholder="Enter Your Father's / Spouse name"
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("fathername")}
                    onBlur={handleBlur("fathername")}
                    value={values.fathername}
                    returnKeyType="done"
                  />
                </View>

                {touched.fathername && errors.fathername && (
                  <Text style={style.error}>{errors.fathername}</Text>
                )}
                <View style={style.inputfield}>
                  <MaterialCommunityIcons
                    name="identifier"
                    size={perfectSize(20)}
                    color="black"
                  />
                  <TextInput
                    style={[style.input]}
                    placeholder="Enter Your PAN Number"
                    autoCapitalize="characters"
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange("panCardNumber")}
                    onBlur={handleBlur("panCardNumber")}
                    value={values.panCardNumber}
                    returnKeyType="done"
                    maxLength={10}
                  />
                </View>
                {touched.panCardNumber && errors.panCardNumber && (
                  <Text style={style.error}>{errors.panCardNumber}</Text>
                )}
                <View style={style.inputfield}>
                  <FontAwesome
                    name="id-card-o"
                    size={perfectSize(20)}
                    color="black"
                  />
                  <TextInput
                    style={style.input}
                    placeholder="Enter Your Aadhar Number"
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={handleChange("aadharNumber")}
                    onBlur={handleBlur("aadharNumber")}
                    value={values.aadharNumber}
                    returnKeyType="done"
                    maxLength={15}
                  />
                </View>
                {touched.aadharNumber && errors.aadharNumber && (
                  <Text style={style.error}>{errors.aadharNumber}</Text>
                )}
                <View style={style.dropdowns}>
                  <MaterialCommunityIcons
                    name="gender-male-female"
                    size={perfectSize(20)}
                    color="black"
                    style={{ marginRight: perfectSize(10) }}
                  />
                  <View style={{ flex: 1 }}>
                    <RNPickerSelect
                      placeholder={{
                        label: "Gender",
                        value: "",
                        color: "#9EA0A4",
                      }}
                      useNativeAndroidPickerStyle={false}
                      onValueChange={handleChange("gender")}
                      value={values.gender}
                      items={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                      ]}
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

                {touched.gender && errors.gender && (
                  <Text style={style.error}>{errors.gender}</Text>
                )}

                <View style={style.dropdowns}>
                  <FontAwesome5
                    name="ring"
                    size={perfectSize(20)}
                    color="black"
                    style={{ marginRight: perfectSize(10) }}
                  />
                  <View style={{ flex: 1 }}>
                    <RNPickerSelect
                      placeholder={{
                        label: "Married Status",
                        value: "",
                        color: "#9EA0A4",
                      }}
                      onValueChange={handleChange("marriedstatus")}
                      value={values.marriedstatus}
                      items={[
                        { label: "Single", value: "Single" },
                        { label: "Married", value: "Married" },
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
                {touched.marriedstatus && errors.marriedstatus && (
                  <Text style={style.error}>{errors.marriedstatus}</Text>
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
                        label: "Nationality",
                        value: "",
                        color: "#9EA0A4",
                      }}
                      onValueChange={handleChange("nationality")}
                      value={values.nationality}
                      items={[
                        { label: "Indian", value: "Indian" },
                        { label: "NRI", value: "NRI" },
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
                {touched.nationality && errors.nationality && (
                  <Text style={style.error}>{errors.nationality}</Text>
                )}

                <TouchableOpacity
                  onPress={showDatePicker}
                  style={style.inputfield}
                >
                  <AntDesign
                    name="calendar"
                    size={perfectSize(20)}
                    color="black"
                  />
                  <Text style={style.input}>
                    {values.dateOfBirth
                      ? values.dateOfBirth.toDateString()
                      : "Select Date of Birth"}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={(date) => {
                    setFieldValue("dateOfBirth", date);
                    hideDatePicker();
                  }}
                  onCancel={hideDatePicker}
                />
                {touched.dateOfBirth && errors.dateOfBirth && (
                  <Text style={style.error}>{errors.dateOfBirth}</Text>
                )}
                <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.button} onPress={handleSubmit}>
                    <Text style={[style.content, { color: "white" }]}>
                      Next Steps
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default IndentityDetails;
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "whitesmoke",
  },
  header: {
    padding: perfectSize(10),
    backgroundColor: "white",
    flexDirection: "row",
  },
  heading: {
    fontSize: perfectSize(18),
    letterSpacing: 1.5,
    marginRight: perfectSize(18),
    // fontWeight: "600",
    // color: "#ff7c18",
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
    flex: 1,
    marginTop: perfectSize(2),
    padding: perfectSize(15),
    // borderTopStartRadius: perfectSize(20),
    // borderTopEndRadius: perfectSize(20),
  },
  inputfield: {
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(10),
    marginBottom: perfectSize(5),
    backgroundColor: "white",
  },
  input: {
    fontSize: perfectSize(14),
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  buttonContainer: {
    alignItems: "flex-end",

    marginVertical: perfectSize(20),
  },
  button: {
    backgroundColor: "#2d96ff",
    padding: perfectSize(10),
    borderRadius: 5,
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: 0.5,

    borderRadius: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(10),
    marginBottom: perfectSize(5),
    backgroundColor: "white",
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

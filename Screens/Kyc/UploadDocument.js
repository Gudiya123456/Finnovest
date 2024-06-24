import {
  View,
  Text,
  styleheet,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { perfectSize } from "../../constants/theme";
const UploadDocument = ({ navigation }) => {
  const [aadhar, setaadhar] = useState(null);
  const [pan, setPan] = useState(null);
  const [error, setError] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [panmodal, setPanmodal] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const togglePanmodal = () => {
    setPanmodal(!panmodal);
  };
  useEffect(() => {
    (async () => {
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      const galleryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraPermission.status !== "granted" ||
        galleryPermission.status !== "granted"
      ) {
        alert(
          "Sorry, we need camera and gallery permissions to make this work!"
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      allowsEditing: true,
      aspect: [18, 32],
      quality: 1,
    });
    if (result.assets === null) {
      setaadhar(null);
    } else {
      setaadhar(result.assets.map((i) => i.uri));
      setDropdownVisible(false);
    }
  };
  const pickPan = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (result.assets === null) {
      setPan(null);
    } else {
      setPan(result.assets.map((i) => i.uri));
      setPanmodal(false);
    }
  };
  //***** Gallery ***** */
  const pickImagefromgallery = async () => {
    // Launch the image picker to select a photo from the gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [18, 32],
      quality: 1,
    });

    if (result.assets === null) {
      setaadhar(null);
    } else {
      setaadhar(result.assets.map((i) => i.uri));
      console.log(result.assets);
      setDropdownVisible(false);
    }
  };
  const pickPanfromgaley = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [3, 4],
      allowsEditing: true,

      quality: 1,
    });
    if (result.assets === null) {
      setPan(null);
    } else {
      setPan(result.assets.map((i) => i.uri));
      setPanmodal(false);
    }
  };
  const validate = () => {
    const newError = {};
    if (!aadhar) {
      newError.aadhar = "Aadhar Document is Required";
    } else if (!pan) {
      newError.pan = "Pan Document is Required";
    }
    setError(newError);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.heading}>Upload Documents</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={style.inputContainer}>
            <Text style={style.content}>Aadhar Number</Text>
            <View style={style.inputfield}>
              <FontAwesome name="id-card-o" size={20} color="black" />
              <TextInput
                style={style.input}
                placeholder=""
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                maxLength={12}
              />
            </View>
            <Text style={style.content}>PAN Number</Text>
            <View style={style.inputfield}>
              <MaterialCommunityIcons
                name="identifier"
                size={20}
                color="black"
              />
              <TextInput
                style={style.input}
                placeholder=""
                underlineColorAndroid="transparent"
                maxLength={10}
              />
            </View>
            <View style={[style.inputfield, { marginBottom: perfectSize(5) }]}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",

                  alignItems: "center",
                }}
                onPress={toggleDropdown}
              >
                <AntDesign name="addfile" size={22} color="black" />

                {aadhar ? (
                  <Text numberOfLines={1} style={style.input}>
                    {aadhar}
                  </Text>
                ) : (
                  <Text style={[style.input, { color: "gray" }]}>
                    Upload Your Aadhar Card
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {error.aadhar && <Text style={style.error}>{error.aadhar}</Text>}
            <View
              style={[
                style.inputfield,
                { marginTop: perfectSize(10), marginBottom: perfectSize(5) },
              ]}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",

                  alignItems: "center",
                }}
                onPress={togglePanmodal}
              >
                <AntDesign name="addfile" size={22} color="black" />

                {pan ? (
                  <Text numberOfLines={1} style={style.input}>
                    {pan}
                  </Text>
                ) : (
                  <Text style={[style.input, { color: "gray" }]}>
                    Upload Your PAN Card
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {error.pan && <Text style={style.error}>{error.pan}</Text>}
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
                <TouchableOpacity style={style.button} onPress={validate}>
                  <Text style={[style.content, { color: "white" }]}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal
          visible={dropdownVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity
            style={style.modelcontainer}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={style.modelbox}>
              <TouchableOpacity
                style={{ alignItems: "center", marginRight: perfectSize(10) }}
                onPress={pickImage}
              >
                <Entypo name="camera" size={perfectSize(24)} color="black" />
                <Text style={style.content}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={pickImagefromgallery}
              >
                <FontAwesome
                  name="photo"
                  size={perfectSize(24)}
                  color="black"
                />
                <Text style={style.content}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        <Modal
          visible={panmodal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setPanmodal(false)}
        >
          <TouchableOpacity
            style={style.modelcontainer}
            onPress={() => setPanmodal(false)}
          >
            <View style={style.modelbox}>
              <TouchableOpacity
                style={{ alignItems: "center", marginRight: perfectSize(10) }}
                onPress={pickPan}
              >
                <Entypo name="camera" size={perfectSize(24)} color="black" />
                <Text style={style.content}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={pickPanfromgaley}
              >
                <FontAwesome
                  name="photo"
                  size={perfectSize(24)}
                  color="black"
                />
                <Text style={style.content}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default UploadDocument;
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
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "600",
  },
  subheading: {
    fontSize: 16,
    color: "#2d96ff",
    fontWeight: "600",
  },
  content: {
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: "white",
    flex: 1,
    marginTop: perfectSize(2),
    padding: perfectSize(15),
  },
  inputfield: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: perfectSize(5),
    height: 45,
    alignItems: "center",
    paddingHorizontal: perfectSize(10),
    marginBottom: perfectSize(10),
    marginTop: perfectSize(5),
    backgroundColor: "white",
  },
  input: {
    fontSize: 14,
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
  error: {
    color: "red",
    fontSize: perfectSize(12),
  },
  modelcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modelbox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  modelcontentbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    padding: perfectSize(2),
  },
});

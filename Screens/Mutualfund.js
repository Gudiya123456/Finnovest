import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { FONTS, COLORS } from "../constants";
import TabScreenHeader from "../Components/TabScreenHeader";
import { Breadcrumb } from "../Components/Breadcrumb";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
export const Mutualfund = ({ navigation }) => {
  const [show, setShow] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TabScreenHeader navigation={navigation} />
      <Breadcrumb title="Performance Coming Soon" subTitle="" />
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        {/* <View style={styles.container}>
                        <LinearGradient
                            colors={['#ff751a', '#ffff00']}
                            locations={[0.2, 1]}

                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 20 }}
                        >

                            <View style={{
                                backgroundColor: "#fff", borderRadius: 16, margin: 8,

                            }} >

                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ padding: 5 }}>
                                        <Image
                                            style={styles.image}
                                            source="https://i0.wp.com/brameshtechanalysis.com/wp-content/uploads/2022/01/Nifty-50-analysis1.png?fit=1504%2C1504&ssl=1"
                                            contentFit="cover"
                                            transition={500}
                                        />
                                    </View>
                                    <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                                        <View style={{ padding: 5, justifyContent: "center" }}>
                                            <Text style={{ color: "gray", fontWeight: 800, fontSize: 16 }}>BUY NIFTY 18 NOV 21500 CE</Text>
                                            <Text style={{ color: "gray", fontWeight: 500, fontSize: 12 }}>18 Nov 2023 09:30 am</Text>
                                        </View>
                                        <TouchableOpacity style={{ paddingRight: 8, paddingLeft: 5, paddingTop: 5 }} onPress={() => {
                                            setShow(!show)
                                        }}>
                                            <MaterialIcons name={show ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={25} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                    <View style={{ padding: 5, justifyContent: "center" }}>
                                        <Text style={{ fontWeight: 800, fontSize: 16, color: "gray" }}>₹80.00 - 85.00</Text>
                                    </View>
                                    <View style={{ paddingRight: 8, paddingLeft: 5, paddingTop: 8 }}>
                                        <Text style={{ fontWeight: 500, fontSize: 12, color: "gray", fontStyle: "italic" }}>(Recommended / Entry Price)</Text>
                                    </View>
                                </View>



                                <View style={{ margin: 10 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 4 }}>Stoploss</Text>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 3 }}>Rs.40.50</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 4 }}>Target 1</Text>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 3 }}>Rs.120.00</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 4 }}>Target 2</Text>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 3 }}>Rs.180.00</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 4 }}>Duration</Text>
                                        <Text style={{ fontWeight: 500, color: "gray", flex: 3 }}>Interaday / Holding</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{
                                backgroundColor: "#f2f2f2",
                                marginLeft: 15,
                                padding: 5,
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginRight: 15,
                                marginTop: -11,
                                marginBottom: 10, borderBottomStartRadius: 10, borderBottomEndRadius: 10,
                                display: show ? 'flex' : 'none'
                            }}>
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#ddd', borderStyle: 'dashed', paddingBottom: 5,
                                }}>
                                    <Text style={{ color: "#000" }}>Target 1 Done</Text>
                                    <Text style={{ color: "#000" }}>Nov 18th 11:14 am </Text>
                                </View>

                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#ddd', borderStyle: 'dashed', paddingBottom: 5,
                                }}>
                                    <Text style={{ color: "#000" }}>Target 2 Done</Text>
                                    <Text style={{ color: "#000" }}>Nov 18th 02:18 pm </Text>
                                </View>

                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#ddd', borderStyle: 'dashed', paddingBottom: 5,
                                }}>
                                    <Text style={{ color: "#000" }}>Fire Call 200 🔥</Text>
                                    <Text style={{ color: "#000" }}>Nov 18th 02:50 pm</Text>
                                </View>
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#ddd', borderStyle: 'dashed', paddingBottom: 5,
                                }}>
                                    <Text style={{ color: "#000" }}>Existed</Text>
                                    <Text style={{ color: "#000" }}>Nov 18th 03:15 pm</Text>
                                </View>
                            </View>


                        </LinearGradient >

                    </View > */}

        {/* <Text>Comming Soon</Text> */}
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  inputHeader: {
    textTransform: "uppercase",
    ...FONTS.body4,
    marginVertical: 4,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 28,
  },
  checkbox: {
    marginRight: 8,
    height: 16,
    width: 16,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  image: {
    width: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 100,
    borderWidth: 0.5,
  },
});

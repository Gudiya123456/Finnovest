import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { FONTS, COLORS } from "../constants";
import TabScreenHeader from "../Components/TabScreenHeader";
import { Breadcrumb } from "../Components/Breadcrumb";

export const Portfolio = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TabScreenHeader navigation={navigation} />
      <Breadcrumb title="Portfolio Coming Soon" subTitle="" />

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        {/* <Text>comming soon</Text> */}
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
});

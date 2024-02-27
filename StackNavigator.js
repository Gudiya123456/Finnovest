import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OtpScreen from "./Screens/Auth/OtpScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import { HomeScreen } from "./Screens/HomeScreen";
import Notifications from "./Screens/Notifications";
import { TabNavigator } from "./TabNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import StackNavigation from "./Components/kyc/StackNavigation";
const Stack = createStackNavigator();

const checkLogedIn = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      // setIsLogedIn(true);
    }
  } catch (error) {
    console.error(error);
  }
};

const StackNavigator = () => (
  // <NavigationContainer>
  <Stack.Navigator
    initialRouteName="tabnavigator"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="kyc" component={StackNavigation} />
    <Stack.Screen name="otp" component={OtpScreen} />
    <Stack.Screen name="tabnavigator" component={TabNavigator} />
    <Stack.Screen
      name="notifications"
      component={Notifications}
      options={{ headerShown: true, title: "Notification" }}
    />
    {/* <Stack.Screen name="drawerNavigator" component={DrawerNavigator} /> */}
    {/* Add more screens as needed */}
  </Stack.Navigator>
  // </NavigationContainer>
);

export default StackNavigator;

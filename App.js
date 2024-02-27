import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
import DrawerNavigator from "./DrawerNavigator";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setBackgroundColorAsync("#000");

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Sen-Regular.ttf"),
    bold: require("./assets/fonts/Sen-Bold.ttf"),
    extraBold: require("./assets/fonts/Sen-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <DrawerNavigator />
    </SafeAreaProvider>
  );
}

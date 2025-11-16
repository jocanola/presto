import SafeAreaWrapper from "@/src/shared/components/SafeAreaWrapper/SafeAreaWrapper";
import { ReactQueryProvider } from "@/src/shared/libs/ReactQueryProvider";
import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsBold: require("../src/assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../src/assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../src/assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("../src/assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReactQueryProvider>
        <ToastProvider placement="top" offsetTop={30}>
          <SafeAreaWrapper>
            <Slot />
          </SafeAreaWrapper>
        </ToastProvider>
      </ReactQueryProvider>
    </GestureHandlerRootView>
  );
}

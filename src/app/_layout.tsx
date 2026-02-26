import * as Font from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MapleMono from "@/assets/font/MapleMono-NF-CN-MediumItalic.ttf";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        MapleMono,
      });
      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView>
      <StatusBar barStyle={"light-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}

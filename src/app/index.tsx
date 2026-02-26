import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { SplitButton } from "@/components";
import { Palette } from "@/constants";

export default function Index() {
  const [splitted, setSplitted] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Palette.background,
      }}
    >
      <SplitButton
        splitted={splitted}
        mainAction={{
          label: "stop",
          backgroundColor: Palette.card,
          onPress: () => {
            setSplitted(true);
          },
        }}
        leftAction={{
          label: "resume",
          backgroundColor: Palette.card,
          onPress: () => {
            setSplitted(false);
          },
        }}
        rightAction={{
          label: "finish",
          backgroundColor: Palette.highlight,
          onPress: () => {
            setSplitted(false);
          },
        }}
      />
    </SafeAreaView>
  );
}

import { JSX, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { SplitButton, StackedCard } from "@/components";
import { Palette } from "@/constants";

// 按钮分裂组件
// oxlint-disable-next-line no-unused-vars
const SplitButtonComponent = (): JSX.Element => {
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
};

// 堆叠卡片组件
const StackedCardComponent = (): JSX.Element => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e2e2",
      }}
    >
      {new Array(4).fill(0).map((_, index) => (
        <StackedCard key={index} index={index} />
      ))}
    </SafeAreaView>
  );
};

const Index = (): JSX.Element => {
  // return <SplitButtonComponent />;
  return <StackedCardComponent />;
};

export default Index;

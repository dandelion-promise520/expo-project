import { JSX } from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { SpringConfig } from "react-native-reanimated/lib/typescript/animation/spring";

import { StackedCardProps } from "./types";

export const StackedCard = ({ index, progress }: StackedCardProps): JSX.Element => {
  // 弹簧效果
  const SPRING: SpringConfig = { damping: 15, stiffness: 180, mass: 1 };

  const reCardStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, index * 25]);
    const translateY = interpolate(progress.value, [0, 1], [0, -index * 5]);
    const rotate = interpolate(progress.value, [0, 1], [-index * 10, index * 10]);
    return {
      transform: [
        { translateX: translateX }, //index * 25
        { translateY: translateY }, //-index * 5
        { rotate: `${rotate}deg` }, //`${index * 10}deg`
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        reCardStyle,
        {
          zIndex: -index,
        },
      ]}
      onTouchStart={() => {
        progress.set(withSpring(1, SPRING));
      }}
      onTouchEnd={() => {
        progress.set(withSpring(0, SPRING));
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    aspectRatio: 3 / 4,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderCurve: "continuous",
    ...Platform.select({
      ios: {
        shadowColor: "#cccccc",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
    borderWidth: 1,
    borderColor: "#b9b9b9",
    position: "absolute",
  },
});

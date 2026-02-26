import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { PressableScale } from "@/components/PressableScale";
import { Palette } from "@/constants";

import { SplitButtonProps } from "./types";

export const SplitButton = ({
  splitted,
  leftAction,
  mainAction,
  rightAction,
}: SplitButtonProps) => {
  const LeftButtonStyle = useAnimatedStyle(() => {
    const buttonFlex = splitted ? 1 : 0;
    return { flex: withTiming(buttonFlex) };
  }, [splitted]);

  const RightButtonStyle = useAnimatedStyle(() => {
    const buttonBackgroundColor = splitted
      ? rightAction.backgroundColor
      : mainAction.backgroundColor;
    const buttonMarginLeft = splitted ? 10 : 0;
    return {
      backgroundColor: withTiming(buttonBackgroundColor),
      marginLeft: withTiming(buttonMarginLeft),
    };
  }, [splitted]);

  const disappearTextStyle = useAnimatedStyle(() => {
    const textOpacity = splitted ? 1 : 0;
    return { opacity: withTiming(textOpacity) };
  }, [splitted]);

  const appearTextStyle = useAnimatedStyle(() => {
    const textOpacity = splitted ? 0 : 1;
    return { opacity: withTiming(textOpacity) };
  }, [splitted]);

  return (
    <View style={{ height: 60, paddingHorizontal: 20, flexDirection: "row" }}>
      <PressableScale
        style={[styles.button, LeftButtonStyle, { backgroundColor: leftAction.backgroundColor }]}
        onPress={leftAction.onPress}
      >
        <Animated.Text style={[styles.label, disappearTextStyle]} numberOfLines={1}>
          {leftAction.label}
        </Animated.Text>
      </PressableScale>

      <PressableScale
        style={[styles.button, RightButtonStyle]}
        onPress={splitted ? rightAction.onPress : mainAction.onPress}
      >
        <Animated.Text style={[styles.label, disappearTextStyle]}>
          {rightAction.label}
        </Animated.Text>
        <Animated.Text style={[styles.label, appearTextStyle]}>{mainAction.label}</Animated.Text>
      </PressableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: Palette.text,
    fontFamily: "MapleMono",
    textTransform: "lowercase",
    position: "absolute",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 30,
    borderCurve: "continuous",
  },
});

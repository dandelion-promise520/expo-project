import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { PressableScaleProps } from "./types";

export const PressableScale = ({ children, onPress, style }: PressableScaleProps) => {
  const buttonScale = useSharedValue(1);

  const reButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  }, []);

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      buttonScale.set(withTiming(0.9));
    })
    .onTouchesUp(() => {
      buttonScale.set(withTiming(1));
      scheduleOnRN(onPress);
    })
    .onFinalize(() => {
      buttonScale.set(withTiming(1));
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, reButtonStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
};

import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface PressableScaleProps {
  children: React.ReactNode;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

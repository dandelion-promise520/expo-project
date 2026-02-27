import { SharedValue } from "react-native-reanimated";

export interface StackedCardProps {
  index: number;
  progress: SharedValue<number>;
}

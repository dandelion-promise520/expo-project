import { JSX } from "react";
import { Platform, StyleSheet, View } from "react-native";

import { StackedCardProps } from "./types";

export const StackedCard = ({ index }: StackedCardProps): JSX.Element => {
  return (
    <View
      style={[
        styles.card,
        {
          zIndex: -index,
          transform: [
            { translateX: 0 }, //index * 25
            { translateY: 0 }, //-index * 5
            { rotate: `${-index * 10}deg` }, //`${index * 10}deg`
          ],
        },
      ]}
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

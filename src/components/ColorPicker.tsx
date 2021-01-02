import React from "react";
import { Animated, View } from "react-native";
import { TouchableOpacity } from "@gorhom/bottom-sheet"; // Pressables/ touchables don't work on android https://gorhom.github.io/react-native-bottom-sheet/troubleshooting

interface Props {
  colors: string[];
  dotSize: number;
  onPress: (i: number) => void;
}

const Item = ({ colors, dotSize, onPress }: Props) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const translateY = Animated.divide(scrollY, 100).interpolate({
    inputRange: [0, 1],
    outputRange: [0, dotSize],
  });

  return (
    <View>
      {colors.map((color: string, i: number) => {
        return (
          <TouchableOpacity
            key={`color-${i}`}
            onPress={() => {
              onPress(i);
              scrollY.setValue(i * (10 * dotSize));
            }}
          >
            <View
              style={{
                height: dotSize,
                width: dotSize,
                borderRadius: dotSize,
                backgroundColor: color,
                marginBottom: dotSize,
              }}
            />
          </TouchableOpacity>
        );
      })}
      <Animated.View
        style={{
          position: "absolute",
          top: -dotSize / 2,
          left: -dotSize / 2,
          height: dotSize * 2,
          width: dotSize * 2,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: dotSize,
          transform: [
            {
              translateY,
            },
          ],
        }}
      />
    </View>
  );
};

export default Item;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet"; // Pressables/ touchables don't work on android https://gorhom.github.io/react-native-bottom-sheet/troubleshooting

interface Props {
  sizes: string[];
  sizeIndex: any;
  onPress: (i: number) => void;
}

const Item = ({ sizes, sizeIndex, onPress }: Props) => {
  return (
    <View>
      <Text style={{ fontSize: 14, marginBottom: 12, fontWeight: "bold" }}>
        Your Size
      </Text>
      <View style={{ flexDirection: "row" }}>
        {sizes.map((size, i) => {
          return (
            <TouchableWithoutFeedback
              key={`size-${i}`}
              onPress={() => onPress(i)}
            >
              <View
                style={[
                  styles.size,
                  { backgroundColor: sizeIndex !== i ? "white" : "#F8D9E0" },
                ]}
              >
                <Text>{size}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  size: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderWidth: 1,
    margin: 6,
    borderColor: "#DEDEDE",
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

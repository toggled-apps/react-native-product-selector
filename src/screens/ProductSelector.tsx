import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Item from "../components/Item";
import SizePicker from "../components/SizePicker";
import ScalingDot from "../components/ScalingDot";
import ColorPicker from "../components/ColorPicker";

const ITEM_HEIGHT = height * 0.68;
const DOT_SIZE = 8;
const COLOR_DOT_SIZE = 20;

interface Props {
  content: any;
  data: string[];
  colors: string[];
  onAddToCart: ({
    colorIndex,
    sizeIndex,
  }: {
    colorIndex: number;
    sizeIndex: number;
  }) => void;
  sizeIndicatorColor: string;
  sizes: string[];
  subtitle: string;
  title: string;
}

const ProductSelector = ({
  content = null,
  data,
  colors = [],
  onAddToCart,
  sizeIndicatorColor = "#F8D9E0",
  sizes = [],
  subtitle = "",
  title = "",
}: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [sizeIndex, setSizeIndex] = React.useState<number>(0);
  const [colorIndex, setColorIndex] = React.useState<number>(0);

  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(
    () => [height - ITEM_HEIGHT, height - ITEM_HEIGHT, height * 0.66],
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Item
        data={data}
        itemHeight={ITEM_HEIGHT}
        width={width}
        scrollX={scrollX}
      />
      <ScalingDot
        data={data}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          backgroundColor: "white",
          borderRadius: DOT_SIZE,
          marginHorizontal: 5,
        }}
        containerStyle={{
          top: ITEM_HEIGHT - 100,
        }}
      />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View
          style={{
            height: height - ITEM_HEIGHT - 20,
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 12,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            <View style={{ flex: 5 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, marginBottom: 4 }}
              >
                {title}
              </Text>
              <Text
                style={{ color: "#A5A5A4", fontSize: 18, marginBottom: 16 }}
              >
                {subtitle}
              </Text>
              <SizePicker
                sizeIndicatorColor={sizeIndicatorColor}
                sizes={sizes}
                sizeIndex={sizeIndex}
                onPress={(i) => setSizeIndex(i)}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <ColorPicker
                colors={colors}
                dotSize={COLOR_DOT_SIZE}
                onPress={(i) => setColorIndex(i)}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 46 }}>
            <Pressable
              onPress={() => onAddToCart({ colorIndex, sizeIndex })}
              style={styles.button}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Add to Cart</Text>
            </Pressable>
          </View>
        </View>
        <BottomSheetScrollView
          contentContainerStyle={{
            marginTop: 24,
            paddingVertical: 12,
            paddingHorizontal: 20,
          }}
          style={{ backgroundColor: "white" }}
        >
          {content}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default ProductSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: width - 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
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

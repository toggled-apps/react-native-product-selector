import React from "react";
import { Animated, Image } from "react-native";

interface Props {
  data: string[];
  width: number;
  itemHeight: number;
  scrollX: any;
}

const Item = ({ data, itemHeight, width, scrollX }: Props) => {
  return (
    <Animated.FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(_: Object, index: number) => index.toString()}
      snapToInterval={width}
      decelerationRate="fast"
      bounces={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
          useNativeDriver: true,
        }
      )}
      renderItem={({ item, index }: { item: string, index: number }) => {
        return (
          <Image
          key={`item-${index}`}
            source={{ uri: item }}
            style={{ width, height: itemHeight, resizeMode: "cover" }}
          />
        );
      }}
    />
  );
};

export default Item;

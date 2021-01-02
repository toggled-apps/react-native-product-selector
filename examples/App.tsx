import React from "react";
import { Text, View } from "react-native";
import RNProductSelector from "@toggled-apps/react-native-product-selector";
const data = [
  "https://static.zara.net/photos///2021/V/0/1/p/2012/413/802/2/w/1730/2012413802_1_1_1.jpg?ts=1607083982345",
  "https://static.zara.net/photos///2021/V/0/1/p/2012/413/802/2/w/1730/2012413802_2_1_1.jpg?ts=1607083982463",
  "https://static.zara.net/photos///2021/V/0/1/p/2012/413/802/2/w/1730/2012413802_2_2_1.jpg?ts=1607083982989",
  "https://static.zara.net/photos///2021/V/0/1/p/2012/413/802/2/w/1730/2012413802_6_1_1.jpg?ts=1607010695335",
  "https://static.zara.net/photos///2021/V/0/1/p/2012/413/802/2/w/1730/2012413802_6_2_1.jpg?ts=1607010598951",
];

const colors = ["#0A0808", "#FDDD5C", "#FBD9E0", "#A5A5A4"];

const sizes = ["S", "M", "L", "XL"];

const content = (
  <View>
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={{ fontWeight: "bold", marginBottom: 12 }}>
          Composition
        </Text>
        <Text>Wool</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text style={{ fontWeight: "bold", marginBottom: 12 }}>Country</Text>
        <Text>Morocco</Text>
      </View>
    </View>
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 12 }}>Description</Text>
      <Text style={{marginBottom: 8,}}>
        Coat made of a wool blend. Lapel collar, long sleeves, front flap
        pockets and a chest welt pocket. Lining. Button fastening at the front.
      </Text>
      <Text style={{marginBottom: 8,}}>
        We work alongside our suppliers, workers, unions and international
        bodies to develop a supply chain that respects and promotes human
        rights, contributing to the United Nations Sustainable Development
        Goals.
      </Text>
      <Text style={{ marginBottom: 38 }}>
        Additionally, thanks to an ongoing collaboration with our suppliers, we
        have developed a tracking programme that allows us to determine where
        and how our products are being made.
      </Text>
    </View>
  </View>
);

export default function App() {
  return (
    <RNProductSelector
      content={content}
      colors={colors}
      data={data}
      onAddToCart={({
        colorIndex,
        sizeIndex,
      }: {
        colorIndex: number;
        sizeIndex: number;
      }) => {
        console.log(`color: ${colors[colorIndex]}, size: ${sizes[sizeIndex]}`);
      }}
      sizes={sizes}
      subtitle={"99.99 GBP"}
      title={"OVERSIZED COAT WITH WOOL"}
    />
  );
}

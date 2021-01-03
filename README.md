# React Native Product Selector

This react native module is intended to provide a beautifully animated product selector with an expandable description which you can customise and use in your own projects.

![Example](./assets/react-native-product-selector.gif)

## Usage

```
yarn add @toggled-apps/react-native-product-selector
or
npm install @toggled-apps/react-native-product-selector
```

### Example Usage
```javascript
import React from "react";
import RNProductSelector from "@toggled-apps/react-native-product-selector";

const data = [ ... ];
const colors = [... ];
const sizes = [ ... ];

const content = (
  <View> ... </View>
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
      subtitle={"Subtitle"}
      title={"Title"}
    />
  );
}
```

## Props
|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|colors|array|Optional|[]|An array of colors to be selected|
|content|any|Optional|null|Component to be rendered in the product description.|
|data|array|Required|None|An an array of urls of images for your carousel.|
|onAddToCart|function|Required|None| Function which returns the color index and the size index. ({ colorIndex, sizeIndex }: { colorIndex: number; sizeIndex: number; }) => void;|
|sizeIndicatorColor|string|Optional|"#F8D9E0"|Hex color which shows the user what size is selected|
|sizes|array|Optional|[]|Any array of strings of sizes for your products|
|subtitle|string|Optional|""|Description string.|
|title|string|Optional|""|Title string.|

## 🚀 Run the example
The provided example uses [expo](https://expo.io/).

Expo Project: https://expo.io/@toggled-apps/react-native-product-selector

Build locally: Navigate to the "examples" directory and run:

- Install packages with `yarn` or `npm install`.
- Run `yarn ios` or `yarn android` or `npm run ios` or `npm run android`.

## 💸 Credit
Credit also goes to Purrweb UI for making this concept avaliable. The dribble can be found [here](https://dribbble.com/shots/14473051-eCommerce-Store-App-Design)

## 🤟 Contributions
This project is mantained by Toggled LTD (@toggled-apps).

We welcome all contributions to the upkeep and further development of this module! Feel free to raise PRs and Issues 😇

## MIT License
Copyright 2021 Toggled LTD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

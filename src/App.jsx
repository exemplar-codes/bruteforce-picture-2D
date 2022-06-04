import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [pixelWidth, setPixelWidth] = useState(undefined);
  const [imageArr, setImageArr] = useState(undefined);

  return (
    <div>
      <Input setPixelWidth={setPixelWidth} setImageArr={setImageArr} />
      <br />
      <Output pixelWidth={pixelWidth} imageArr={imageArr} />
    </div>
  );
}

export default App;

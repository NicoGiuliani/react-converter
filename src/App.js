import "./App.css";
import Converter from "./components/Converter.js";
import Output from "./components/Output.js";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  const callback = (output) => {
    setData(output);
  };
  return (
    <div>
      <Converter callback={callback} />
      <Output outputValue={data} />
    </div>
  );
};

export default App;

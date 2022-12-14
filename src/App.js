import "./bootstrap.min.css";
import Converter from "./components/Converter.js";
import Output from "./components/Output.js";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  const callback = (output) => {
    setData(output);
  };
  return (
    <div className="mt-5">
      <Converter callback={callback} className="mb-5" display="block" />
      <Output outputValue={data} />
    </div>
  );
};

export default App;

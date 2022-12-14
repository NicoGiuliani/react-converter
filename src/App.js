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
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center mt-5">
        <Converter callback={callback} />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center"></div>
      <Output outputValue={data} />
    </div>
  );
};

export default App;

import "./bootstrap.min.css";
import Converter from "./components/Converter.js";
import Output from "./components/Output.js";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);
  const [mode, setMode] = useState("decToBin");

  const outputCallback = (output) => {
    setData(output);
  };

  const changeCallback = (mode) => {
    setMode(mode);
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container" style={{ minWidth: "190px" }}>
        <div className="row">
          <div className="col-12 text-center">
            <Converter
              changeCallback={changeCallback}
              outputCallback={outputCallback}
            />
            <Output mode={mode} outputValue={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

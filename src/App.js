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
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Converter callback={callback} />
            <Output outputValue={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

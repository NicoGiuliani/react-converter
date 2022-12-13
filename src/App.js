import "./App.css";
import Converter from "./components/Converter.js";
import Output from "./components/Output.js";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ items: ["this"] });

  const callback = (item) => {
    const currentItems = data["items"];
    currentItems.push(item);
    setData({ items: currentItems });
  };
  return (
    <div>
      <Converter callback={callback} />
      <Output outputItems={data["items"]} />
    </div>
  );
};

export default App;

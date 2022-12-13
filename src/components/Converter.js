import { useState } from "react";

const Converter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState(0);

  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const buttonClicked = (e) => {
    e.preventDefault();
    convertDecToHex(inputValue);
  };

  const convertDecToHex = (decimalValue) => {
    const hexValue = parseInt(decimalValue) + 100;
    props.callback(hexValue);
    setOutputValue(hexValue);
  };

  return (
    <form>
      <label htmlFor="inputValue">Enter value: </label>
      <input type="text" name="inputValue" onChange={updateInputValue}></input>
      <button onClick={buttonClicked}>Do it</button>
    </form>
  );
};

export default Converter;

import { useState } from "react";

const Converter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const buttonClicked = () => {
    convertDecToHex(inputValue);
  };

  const convertDecToHex = (decimalValue) => {
    const hexValue = parseInt(decimalValue) + 100;
    setOutputValue(hexValue);
    props.callback(outputValue);
  };

  return (
    <form>
      <label htmlFor="inputValue">Enter value: </label>
      <input type="text" name="inputValue" onChange={updateInputValue}></input>
      <button onClick={buttonClicked} type="button">
        Do it
      </button>
    </form>
  );
};

export default Converter;

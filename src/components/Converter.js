import { useState } from "react";

const Converter = (props) => {
  const [inputValue, setInputValue] = useState("");

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
  };

  return (
    <form>
      <label className="me-2" htmlFor="inputValue">
        Enter value:
      </label>
      <input
        className="me-2 mb-5"
        type="text"
        name="inputValue"
        onChange={updateInputValue}
      />
      <button onClick={buttonClicked}>Do it</button>
    </form>
  );
};

export default Converter;

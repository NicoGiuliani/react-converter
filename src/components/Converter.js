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
    <div className="container">
      <div className="row">
        <div className="col-3" />
        <div className="col-9">
          <form>
            <div className="col-3" />
            <label htmlFor="inputValue">Enter value: </label>
            <input
              type="text"
              name="inputValue"
              onChange={updateInputValue}
              className="col-4"
            ></input>
            <button onClick={buttonClicked} className="col-2">
              Do it
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Converter;

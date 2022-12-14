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
    <div className="row mb-5">
      <div className="col-2">
        <label className="form-label" htmlFor="inputValue">
          <strong>Enter decimal value:</strong>
        </label>
      </div>
      <div className="col-7">
        <input
          className="form-control text-center"
          type="text"
          name="inputValue"
          onChange={updateInputValue}
        />
      </div>
      <div className="col-3">
        <button
          className="btn btn-outline-warning px-5 py-2"
          onClick={buttonClicked}
        >
          <strong>Convert</strong>
        </button>
      </div>
    </div>
  );
};

export default Converter;

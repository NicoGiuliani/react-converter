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

  const convertDecToHex = (decimalValueString) => {
    let decimalValue = parseInt(decimalValueString);

    let bitIndices = [];
    while (decimalValue > 0) {
      const highestIndex = Math.floor(Math.log(decimalValue) / Math.log(2));
      // console.log(highestIndex);
      decimalValue -= Math.pow(2, highestIndex);
      // console.log(decimalValue);
      bitIndices.push(highestIndex);
      console.log("---------------------");
    }
    console.log(bitIndices);
    const reversedBits =
      bitIndices.length > 0 ? Array(bitIndices[0] + 1).fill(0) : [0];

    bitIndices.forEach((index) => (reversedBits[index] = 1));
    console.log(reversedBits);
    const bits = reversedBits.reverse().join("");
    console.log(bits);

    props.callback(bits);
  };

  return (
    <>
      <div className="row mb-3 bigScreen">
        <div className="col-2">
          <label className="form-label pt-1" htmlFor="inputValue">
            <strong>Enter decimal value:</strong>
          </label>
        </div>
        <div className="col-8">
          <input
            className="form-control text-center"
            type="text"
            name="inputValue"
            onChange={updateInputValue}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-warning px-3 py-2"
            onClick={buttonClicked}
          >
            <strong>Convert</strong>
          </button>
        </div>
      </div>

      <div className="row mb-3 smallScreen mx-auto">
        <label className="form-label pt-1" htmlFor="inputValue">
          <strong>Enter decimal value:</strong>
        </label>
        <input
          className="form-control text-center mb-3"
          type="text"
          name="inputValue"
          onChange={updateInputValue}
        />
        <button
          className="btn btn-outline-warning px-3 py-2"
          onClick={buttonClicked}
        >
          <strong>Convert</strong>
        </button>
      </div>
    </>
  );
};

export default Converter;

import { useState } from "react";

const Converter = (props) => {
  let currentInput;
  const [inputValue, setInputValue] = useState(0);

  const updateInputValue = (e) => {
    currentInput = e.target.value;
  };

  const buttonClicked = (e) => {
    e.preventDefault();
    let result = parseInt(currentInput);
    if (isNaN(result) || result < 0) {
      alert("Input value must be a positive integer.");
      result = 0;
    }

    convertDecToHex(result);
  };

  const convertDecToHex = (decimalValue) => {
    let bitIndices = [];
    while (decimalValue > 0) {
      let highestIndex = Math.floor(Math.log(decimalValue) / Math.log(2));
      decimalValue -= Math.pow(2, highestIndex);
      bitIndices.push(highestIndex);
    }
    const reversedBits =
      bitIndices.length > 0 ? Array(bitIndices[0] + 1).fill(0) : [0];

    bitIndices.forEach((index) => (reversedBits[index] = 1));
    let bitStream = Array(reversedBits.length);
    for (let i = 0; i < reversedBits.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        bitStream.push(" ");
      }
      bitStream.push(reversedBits[i]);
    }
    const bits = bitStream.reverse();
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
            placeholder={inputValue}
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
          placeholder={inputValue}
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

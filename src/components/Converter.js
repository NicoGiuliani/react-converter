import { useState } from "react";

const Converter = (props) => {
  let currentInput;
  const [mode, setMode] = useState("decToBin");
  // const [inputValue, setInputValue] = useState(0);

  const updateInputValue = (e) => {
    currentInput = e.target.value;
  };

  const buttonClicked = (e) => {
    e.preventDefault();
    let result = parseInt(currentInput);
    if (isNaN(result) || result < 0) {
      alert("Input value must be a positive integer.");
      result = 0;
    } else if (result > 2 ** 53 - 1) {
      alert("Too large of an input provided.");
      result = 0;
    }

    convertDecToBin(result);
  };

  const convertDecToBin = (decimalValue) => {
    let bitIndices = [];
    let highestIndex;
    while (decimalValue > 0) {
      highestIndex = Math.floor(Math.log(decimalValue) / Math.log(2));
      decimalValue -= Math.pow(2, highestIndex);
      bitIndices.push(highestIndex);
      // console.log("bitIndices: " + bitIndices);
      // console.log("decimalValue: " + decimalValue);
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
        <div className="col-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
            style={{ width: "100%" }}
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked={mode === "decToBin"}
            />
            <label class="btn btn-outline-success" for="btnradio1">
              Decimal to Binary
            </label>
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
              checked={mode === "binToDec"}
            />
            <label class="btn btn-outline-success" for="btnradio2">
              Binary to Decimal
            </label>
          </div>
        </div>
        <div className="col-7">
          <input
            className="form-control text-center"
            type="text"
            name="inputValue"
            onChange={updateInputValue}
            placeholder={"0"}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-warning py-2"
            onClick={buttonClicked}
            style={{ width: "100%" }}
          >
            <strong>Convert</strong>
          </button>
        </div>
      </div>

      {/* <div className="row mb-3 smallScreen mx-auto">
        <label className="form-label pt-1" htmlFor="inputValue">
          <strong>Enter decimal value:</strong>
        </label>
        <input
          className="form-control text-center mb-3"
          type="text"
          name="inputValue"
          onChange={updateInputValue}
          // placeholder={0}
        />
        <button
          className="btn btn-outline-warning px-3 py-2"
          onClick={buttonClicked}
        >
          <strong>Convert</strong>
        </button>
      </div> */}
    </>
  );
};

export default Converter;

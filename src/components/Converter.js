import { useState } from "react";

const Converter = (props) => {
  const [mode, setMode] = useState("decToBin");
  const [inputValue, setInputValue] = useState(0);

  const updateInputValue = (e) => {
    const currentInput = e.target.value;
    setInputValue(currentInput);
  };

  const convert = () => {
    let currentValue = 0;

    let regex = /[\D]/g;
    if (regex.test(inputValue)) {
      alert("Input value must be a positive integer.");
    } else {
      currentValue = parseInt(inputValue);
      if (inputValue > 2 ** 53 - 1) {
        alert("Too large of an input provided.");
        currentValue = 0;
      }
    }

    switch (mode) {
      case "decToBin":
        let decimalValue = currentValue;
        let bitIndices = [];
        let highestIndex;
        while (decimalValue > 0) {
          highestIndex = Math.floor(Math.log(decimalValue) / Math.log(2));
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
        break;
      case "binToDec":
        const binaryValue = currentValue;
        const binaryString = binaryValue.toString();
        const regex = /[^01]/g;
        if (regex.test(binaryString)) {
          alert("Invalid digit present in binary");
        } else {
          let decimalValue = 0;
          const reversedBinaryDigits = binaryString.split("").reverse();
          for (let i = 0; i < reversedBinaryDigits.length; i++) {
            if (reversedBinaryDigits[i] === "1") {
              decimalValue += Math.pow(2, i);
            }
          }
          props.callback(decimalValue);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="row mb-3 bigScreen">
        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
            style={{ width: "100%" }}
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              checked={mode === "decToBin"}
              onChange={() => setMode("decToBin")}
            />
            <label className="btn btn-outline-success" htmlFor="btnradio1">
              Decimal to Binary
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              checked={mode === "binToDec"}
              onChange={() => setMode("binToDec")}
            />
            <label className="btn btn-outline-success" htmlFor="btnradio2">
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
            onClick={convert}
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

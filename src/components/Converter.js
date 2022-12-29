import { useState, React } from "react";

const Converter = (props) => {
  const [mode, setMode] = useState("decToBin");
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (e) => {
    const currentInput = e.target.value;
    setInputValue(currentInput);
  };

  const changeMode = (mode) => {
    setInputValue("");
    setMode(mode);
    props.outputCallback(0);
    props.changeCallback(mode);
  };

  const validateInputValue = () => {
    let value;
    let regex = /[\D]/g;
    if (regex.test(inputValue)) {
      alert("Input value must be a positive integer.");
    } else {
      value = parseInt(inputValue);
      if (inputValue > 2 ** 53 - 1) {
        alert("Too large of an input provided.");
        value = 0;
      }
    }
    return value;
  };

  const convert = () => {
    let currentValue = validateInputValue();

    switch (mode) {
      case "decToBin":
        let decimalValue = currentValue;
        let binaryOneIndices = [];
        let highestIndex;

        while (decimalValue > 0) {
          highestIndex = Math.floor(Math.log(decimalValue) / Math.log(2));
          decimalValue -= Math.pow(2, highestIndex);
          binaryOneIndices.push(highestIndex);
        }
        const binaryDigitArray =
          binaryOneIndices.length > 0
            ? Array(binaryOneIndices[0] + 1).fill(0)
            : [0];

        binaryOneIndices.forEach((index) => (binaryDigitArray[index] = 1));

        let binaryOutputArray = Array(binaryDigitArray.length);
        for (let i = 0; i < binaryDigitArray.length; i++) {
          if (i % 4 === 0 && i !== 0) {
            binaryOutputArray.push(" ");
          }
          binaryOutputArray.push(binaryDigitArray[i]);
        }

        const binaryOutput = binaryOutputArray.reverse().join("");
        props.outputCallback(binaryOutput);
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
          props.outputCallback(decimalValue);
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
              onChange={() => changeMode("decToBin")}
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
              onChange={() => changeMode("binToDec")}
            />
            <label className="btn btn-outline-success" htmlFor="btnradio2">
              Binary to Decimal
            </label>
          </div>
        </div>
        <div className="col-6">
          <input
            className="form-control text-center"
            type="text"
            name="inputValue"
            id="inputField"
            onChange={updateInputValue}
            value={inputValue}
            placeholder={"0"}
          />
        </div>
        <div className="col-3">
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

const Output = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card text-white bg-primary text-center px-0">
          <div className="card-header">
            <strong className="test">
              {props.mode === "decToBin" ? "Binary" : "Decimal"} Output
            </strong>
          </div>
          <div className="card-body">
            <p className="card-text">{props.outputValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;

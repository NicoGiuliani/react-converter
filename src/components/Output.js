const Output = (props) => {
  return (
    <div className="card text-white bg-secondary text-center">
      <div className="card-header">
        <strong>Binary Output</strong>
      </div>
      <div className="card-body">
        <p className="card-text">{props.outputValue}</p>
      </div>
    </div>
  );
};

export default Output;

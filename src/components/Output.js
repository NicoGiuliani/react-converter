const Output = (props) => {
  return (
    <div className="card text-white bg-secondary mb-3 container">
      <div className="card-header">Binary Output</div>
      <div className="card-body">
        <h4 className="card-title">Binary Output</h4>
        <p className="card-text">{props.outputValue}</p>
      </div>
    </div>
  );
};

export default Output;

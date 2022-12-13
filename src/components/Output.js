const Output = (props) => {
  const showItem = (item) => {
    return <p>{item}</p>;
  };

  return <div>{props.outputValue}</div>;
};

export default Output;

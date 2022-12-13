const Output = (props) => {
  const showItem = (item) => {
    return <p>{item}</p>;
  };

  return (
    <div>
      {props.outputItems.length > 0
        ? props.outputItems.map((item) => showItem(item))
        : "Nothing"}
    </div>
  );
};

export default Output;

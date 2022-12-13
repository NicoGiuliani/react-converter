const DisplayOutput = (outputItems) => {
  const showItem = (item) => {
    return <p>{item}</p>;
  };

  return <div>{outputItems.map((item) => showItem(item))}</div>;
};

export default DisplayOutput;

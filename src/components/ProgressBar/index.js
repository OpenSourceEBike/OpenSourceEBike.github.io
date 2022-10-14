import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 25,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "auto"
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 10,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`€250`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

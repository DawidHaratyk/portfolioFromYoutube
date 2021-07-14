import React from "react";

function PercentagesLine({ percentages }) {
  const style = {
    width: percentages,
  };

  return (
    <div className="line">
      <span className="line__amount" style={style}></span>
    </div>
  );
}

export default PercentagesLine;

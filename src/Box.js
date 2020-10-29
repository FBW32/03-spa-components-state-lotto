import React from "react";

function Box(props) {
  return (
    <div className="div-number">
      <div className="show-number">{props.num}</div>
    </div>
  );
}

export default Box;

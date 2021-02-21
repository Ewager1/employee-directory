import React from "react";

//when we click reset, call the handleResetBtn function from ContentContainer
const ResetFormBtn = (props) => {
  return (
    <button className="ml-5" onClick={() => props.handleResetBtn()}>
      Reset
    </button>
  );
};

export default ResetFormBtn;

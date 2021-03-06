import React from "react";
import Headers from "comps/Header";
import iconLeft from "images/back.png";
import TransTitle from "comps/TransTitle";
import TransTextarea from "comps/TransTextarea";
import Buttons from "comps/Button";

import { useHistory } from "react-router-dom";

const AddBills = () => {
  const history = useHistory();

  return (
    <div className="addbills">
      <Headers headText={"Add Bills"} iconLeft={iconLeft} />
      <div className="input1">
        <TransTitle text={"Bill Title"} />
      </div>
      <div className="input2">
        <TransTitle text={"Amount"} />
      </div>
      <div className="input3">
        <TransTextarea text={"Note"} height={"140px"} />
      </div>
      <div className="button" onClick={() => history.push("/trans")}>
        <Buttons
          width={"308px"}
          height={"52px"}
          fontSize={"16px"}
          text={"Add"}
        />
      </div>
    </div>
  );
};
export default AddBills;

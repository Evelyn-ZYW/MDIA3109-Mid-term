import React, { useState } from "react";
import styled from "styled-components";

import { useHistory, useLocation } from "react-router-dom";

const Container = styled.div`
  // border: 1px solid #002B54;
  border-radius: 10px;
  background-color: #c7deec;
  min-width: 346px;
  max-width: 346px;
  min-height: 213px;
  max-height: 213px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    & > span {
      padding: 5px 15px;
      display: flex;
      justify-content: space-between;
      color: #002b54;
      & > span {
        ${(props) => props.color && "color:" + props.color + ";"};
      }
    }
  }
`;
const White = styled.div`
  background-color: white;
  min-width: 346px;
  max-width: 346px;
`;
const Subtitle = styled.div`
  border-bottom: 1px solid #8395a4;
  color: #002b54;
  align-items: center;
  margin: 0 15px;
`;
const Button = styled.div`
  align-items: center;
  color: #002b54;
  &:hover {
    cursor: pointer;
    color: #0064A0;
  }
`;

const Cashflow = ({ inc, exp }) => {
  const [net, setNet] = useState(Math.round((inc - exp) * 100) / 100);
  const history = useHistory();
  const location = useLocation();

  const SeeMore = () => {
    if (location.pathname === "/") {
      history.push("/trans");
    }
  };
  return (
    <Container>
      <Subtitle>
        <h4>January Cash Flow</h4>
      </Subtitle>
      <div>
        <span>
          <span>Income</span>
          <span style={{ color: "#2D7700" }}>{inc}</span>
        </span>
        <span>
          <span>Expense</span>
          <span style={{ color: "#B80000" }}>{exp}</span>
        </span>
      </div>
      <White>
        <span>
          <span>New Cash Inflow</span>
          <span>{net}</span>
        </span>
      </White>
      <Button onClick={SeeMore}>
        <b>See More</b>
      </Button>
    </Container>
  );
};
Cashflow.defaultProps = {
  inc: 6443.45,
  exp: 4332.34,
};
export default Cashflow;

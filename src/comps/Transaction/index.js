import React, { useState } from "react";
import styled from "styled-components";
import a1 from "images/a1.png";

const Container = styled.div`
  min-width: 375px;
  min-height: 108px;
  ${(props) => props.highlight && "background: rgba(189, 155, 82, 0.25)"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Date = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  color: #8395a4;
  display: flex;
  & > :nth-child(1){
      margin-right: 5px;
  }
`;
const Line1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #002b54;

  span {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 40px;
    max-hetght: 40px;
    margin-right: 15px;
  }
`;
const Line2 = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: #ff8a00;
  text-align: right;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;
const Line3 = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: -1px;
  border-bottom: 1px solid #8395a4;
`;

const Transaction = ({
  onTransSelect,
  id,
  title,
  src,
  amount,
  status,
  date,
  highlight,
}) => {
  /*
    const [bgcolor, setBgcolor] = useState("white");
    const [clicked, setClicked] = useState(false);

    // console.log(clicked)

    const HandleTransSelect = () => {
        if (bgcolor === "white") {
            setBgcolor("rgba(189, 155, 82, 0.25)");
            setClicked(true)
        } else {
            setBgcolor("white")
            setClicked(false)
        }
        onTransSelect(clicked);
    }
    */

  const HandleTransSelect = () => {
    onTransSelect(id);
  };

  return (
    <Container highlight={highlight} onClick={HandleTransSelect}>
      <Date>
        <h6>Created:</h6>
        <h6>{date}</h6>
      </Date>
      <Line1>
        <span>
          <img src={src} />
          {title}
        </span>
        <span>{amount}</span>
      </Line1>
      <Line2>{status}</Line2>
      <Line3 />
    </Container>
  );
};

Transaction.defaultProps = {
  onTransSelect: () => {},
};

export default Transaction;

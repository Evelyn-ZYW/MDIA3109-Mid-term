import React from "react";
import styled from "styled-components";

const TitleCont = styled.div`
  z-index: 1;
  min-width: 375px;
  max-width: 375px;
  font-size: 16px;
  color: #bd9b52;
  text-decoration: upercase;
  font-weight: bold;
  border-top: 2px solid #bd9b52;
  border-bottom: 2px solid #bd9b52;
  // margin:10px; // comment out by evelyn

  div {
    margin: 12px 0px 12px 20px;
  }
`;

const Subtitle = ({ text }) => {
  return (
    <TitleCont>
      <div>{text}</div>
    </TitleCont>
  );
};

Subtitle.defaultProps = {
  text: "bills",
};

export default Subtitle;

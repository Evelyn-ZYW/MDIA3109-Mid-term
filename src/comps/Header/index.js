import React, { useState } from "react";
import styled from "styled-components";
import "images/back.png";

import { useHistory, useLocation } from "react-router-dom";

const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #c7deec;
  min-width: 375px;
  min-height: 65px;
  color: #002b54;
  top: 0px;

  img {
    max-width: 30px;
    max-height: 28px;
    min-width: 15px;
    max-height: 28px;
    &: hover {
      cursor: pointer;
    }
  }

  .left {
    position: relative;
    right: 30px;
  }

  .right {
    position: relative;
    left: 20px;
  }

  div {
    font-size: 18px;
    min-width: 225px;
    max-width: 205px;
    text-align: center;
  }
`;

const Header = ({ headText, iconRight, iconLeft, onSelectFilter }) => {
  const history = useHistory();
  const location = useLocation();

  function MoveBack() {
    if (location.pathname === "/trans") {
      history.push("/");
    } else {
      history.push("/trans");
    }
  }

  const [expand, setExpand] = useState(false);

  const HandleFilter = () => {
    if (expand === true) {
      setExpand(!true);
    } else if (expand === false) {
        setExpand(!false);
    }
    onSelectFilter(expand);
  };
  console.log("Filter Clicked: " + expand);

  return (
    <HeaderCont>
      <img src={iconLeft} className="left" onClick={MoveBack} />
      <div>{headText}</div>
      <img src={iconRight} className="right" onClick={HandleFilter} />
    </HeaderCont>
  );
};

Header.defaultProps = {
  headText: null,
  iconLeft: null,
  iconRight: null,
  onSelectFilter: () => {},
};

export default Header;

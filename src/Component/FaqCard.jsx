import React from "react";
import styled from "styled-components";
import avatar1 from "../img/avata.jpg";
import { NavLink , useNavigate } from "react-router-dom";


function SellerCard(props) {
  return (
    <SellerCardStyled>
     
      <img src={props.img} alt="" />
      <div className="info">
      <NavLink to="/faq">
        <span>{props.wh}</span>
      </NavLink>

      </div>
    </SellerCardStyled>
  );
}

const SellerCardStyled = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  img {
    width: 700px;
    height: 450px;
  }
  .info {
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 500px;
    width: 328px;
    span {
      position: absolute;
      top: 20rem;
      left: 5rem;
      width: 47%;
      text-align: center;
      font-size: 2rem;
    }
  }
  :hover {
    scale: 1.05;
    box-shadow: 0px 0px 16px #ee82ee82;
  }
`;

export default SellerCard;

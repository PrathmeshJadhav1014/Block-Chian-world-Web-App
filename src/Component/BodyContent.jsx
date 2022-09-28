import React from "react";
import styled from "styled-components";
import { NavLink , useNavigate } from "react-router-dom";
import { InnerLayout } from "../Layouts";
import ContactSection from "./ContactSection";
import MainTitle from "./MainTitle";
import FaqCard from "./FaqCard";
import blockchain from "../img/blockchain.jpg";
import web3 from "../img/web3.jpg";
import nft from "../img/nft.jpg";
import Coins from "./Coins";

function BodyContent() {
    const navigate = useNavigate();
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle
          title={"Have A Question About BlockChain ?"}
          subtitle={"Know More About BlockChain Technologies with us"}
        />
        <div className="faqcards">
            <FaqCard img={blockchain} wh={"What is BlockChain ?"}  />
            <FaqCard img={web3} wh={"What is WEB3 ?"} />
            <FaqCard img={nft} wh={"What is NFT ?"}/>
        </div>
      </InnerLayout>
      <Coins/>
      
      <ContactSection />
      <footer>
        <p>Copyright @Prathmesh Jadhav. All Rights Reserved</p>
      </footer>
    </BodyContentStyled>
  );
}

const BodyContentStyled = styled.div`
  .faqcards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020a27;
    padding: 3rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      text-align: center;
      opacity: 0.7;
    }
  }
`;

export default BodyContent;

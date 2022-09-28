import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SmallHeading from "./SmallHeading";
import blockchain from "../img/bchain.png";
import BlockChain from "./BlockChain";
import Web3 from "./Web3";
import Nft from "./Nft";
function FAQ() {
  const [blockChain, setBlockChain] = useState(true);
  const [web3, setWeb3] = useState(false);
  const [nft, setNft] = useState(false);
  const block1 = () => {
    setBlockChain(true);
    setWeb3(false);
    setNft(false);
  };
  const block2 = () => {
    setBlockChain(false);
    setWeb3(true);
    setNft(false);
  };
  const block3 = () => {
    setWeb3(false);
    setBlockChain(false);
    setNft(true);
  };
  return (
    <MainContentStyled>
      <Navbar />
      <div className="content">
        <div className="left">
          <SmallHeading
            title={"Know more About Block-Chain Technology"}
            identifier={"Before"}
          />
          <ul>
            <li onClick={block1}>What is BlockChain ?</li>
            <li onClick={block2}>What is WEB3 ?</li>
            <li onClick={block3}>What is NFT ?</li>
          </ul>
        </div>
        <div className="right">
          {blockChain && <BlockChain />}
          {web3 && <Web3/>}
          {nft && <Nft/>}
          </div>
      </div>
      <footer>
        <p>Copyright @Prathmesh Jadhav. All Rights Reserved</p>
      </footer>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    margin-top: 7rem;


    .left {
      width: 30vw;
      height: 100%;
      h1 {
        padding: 1.8rem 0;
      }
      .btns-con {
        margin-top: 3rem;
      }
      ul{

        li{
          margin: 20px 0px;
          cursor: pointer;
        }
      }
    }

    .right {
      width: 70vw;
      height: fit-content;
      padding-left: 20px;
      border-left: 2px solid violet;
      color: #ffffffd4;
      p {
        text-align: justify;
      }
      a {
        courser: pointer;
        color: violet;
        border-bottom: 2px solid violet;
      }
      h1 {
        transition: 0.5s;
      }
      h1:hover {
        text-shadow: 0px 0px 16px #ee82ee;
        color: violet;
      }
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    p {
      text-align: center;
      opacity: 0.7;
    }
  }
`;
export default FAQ;

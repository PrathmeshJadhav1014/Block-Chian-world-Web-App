import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png';
import Navbar from './Navbar';

function MainContent() {
    return (
        <MainContentStyled >
            <Navbar/>
            <div className="content">
                <div className="left">
                    <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'} />
                    <h1>
                        All Block-Chain Information You need is on One place.  <span className='GradientText'>BlockChain World</span> 
                    </h1>
                    <p>
                        Hey Their, My Name is Prathmesh Jadhav . My aim is to give all BlockChain information on one place . 
                        Also Contain Information about top 100 Crypto Currencies.
                    </p>
                   </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
                height: auto;
            }
        }
    }
`;
export default MainContent;

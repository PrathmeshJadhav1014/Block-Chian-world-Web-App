import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinItem from './CoinItem'
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
import Navbar from './Navbar';

function About() {
    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setCoins(response.data)
        // console.log(response.data[0])
      }).catch((error) => {
        console.log(error)
      })
    }, [])
  return (
    <MainContentStyled >
            <Navbar/>
            <div className='container'>
            
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map(coins => {
                    return (
                        <NavLink to={`/coin/${coins.id}`}>
                            <CoinItem coins={coins} />
                            </NavLink>


                    )
                })}

            </div>
        </div>
        <footer>
        <p>Copyright @Prathmesh Jadhav. All Rights Reserved</p>
      </footer>
            </MainContentStyled>
            
  )
}
const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
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
export default About
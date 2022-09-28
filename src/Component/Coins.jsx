import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinItem from './CoinItem'
import {NavLink} from 'react-router-dom'

// import Coin from '../routes/Coin'

import './Coins.css'

const Coins = (props) => {
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

                {coins.slice(0,5).map(coins => {
                    return (
                        <NavLink to={`/coin/${coins.id}`}>
                            <CoinItem coins={coins} />
                            </NavLink>


                    )
                })}

            </div>
        </div>
    )
}

export default Coins

import React from 'react'
import { nftMain, nftImp,nftex } from"../Data";

function Nft() {
  return (
    <>
    <h1>What is NFT's ?</h1>
    <br />
    {nftMain.map(data=>{
        return(
            <>
            <p>{data.p}</p><br />
            </>
        )
    })}
    <h2>Why NFTs Are Important</h2><br />
    {nftImp.map(data=>{
        return(
            <>
            <p>{data.p}</p><br />
            </>
        )
    })}
    {nftex.map(data=>{
        return(
            <>
            <p><h3>{data.title}</h3>{data.p}</p><br />
            </>
        )
    })}
     <a href="https://en.wikipedia.org/wiki/Non-fungible_token" target="_blank"rel="noopener noreferrer">For More Resources Click Here</a>
    </>
  )
}

export default Nft
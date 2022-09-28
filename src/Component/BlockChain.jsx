import React from "react";
import{key , work ,need , important,defination} from "../Data"

function BlockChain() {
    console.log(key)
  return (
    <>
      <h1>What is Block-Chain ?</h1> <br />
      <p>
        {defination.content}
      </p>
      <p>
        <br />
        <h2>Why blockchain is important: </h2> {important.content}
      </p>
      <br />
      <h2>Key elements of a blockchain</h2>
      <br />
      {key.map(data=>{
        return(
            <>
            <p>
            <h3>{data.title}</h3>
            {data.content}
            </p>
            <br />
            </>
        )
      })}
      <br />
      <h2>How blockchain works ?</h2>
      {work.map(data=>{
        return(
            <>
            <p>
            {data.content}
            </p>
            <br />
            </>
        )
      })}
      <br />
      <h2> Benefits of blockchain</h2>
      <br />
      {need.map(data=>{
        return(
            <>
            <p>
            <h3>{data.title}</h3>
            {data.content}
            </p><br />
            </>
        )
      })}
      <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank"rel="noopener noreferrer">For More Resources Click Here</a>
      
    </>
  );
}

export default BlockChain;

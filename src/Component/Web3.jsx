import React from "react";
import { web3Def, gen,idea ,importants} from "../Data";

function Web3() {
  return (
    <>
      <h1>What is Web3 ?</h1>
      <br />
      <p>{web3Def.content}</p>
      <br />
      {gen.map((data) => {
        return <>
        <p><h2>{data.title}</h2><br />
        {data.content}</p>
        <br />
        </>;
      })}
      <h2>Core ideas of Web3</h2>
      <p>Although it's challenging to provide a rigid definition of what Web3 is, a few core principles guide its creation.</p><br />
      {idea.map((data) => {
        return <>
        <p><h3>{data.title}</h3>
        {data.content}</p>
        <br />
        
        </>;
      })}
      <h2>Why is Web3 important?</h2><br />
        <p>Although Web3's killer features aren't isolated and don't fit into neat categories, for simplicity we've tried to separate them to make them easier to understand.</p>
        {importants.map((data) => {
        return <>
        <p><h3>{data.title}</h3>
        {data.content}</p>
        <br />
        
        </>;
      })}
       <a href="https://en.wikipedia.org/wiki/Web3#:~:text=Web3%20(also%20known%20as%20Web,%2C%20and%20token%2Dbased%20economics." target="_blank"rel="noopener noreferrer">For More Resources Click Here</a>
    </>
  );
}

export default Web3;

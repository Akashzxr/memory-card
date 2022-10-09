import React, { useEffect, useState } from "react";





const Card1=({sendDataToParent})=>{

  const [count,setcount] = useState(0);
   const change=()=>{
    setcount(count+1);
    console.log(count);
   }
  
    return(
      <div id="n" onClick={change} style={{color: "black"}}>
        1
          <img src={require('../images/p1.jpeg')} alt="p1" />
      </div>
    );
}

const Card2=()=>{
    return(
      <div style={{color: "black"}}>2
          <img src={require('../images/p2.jpeg')} alt="p2" />
      </div>
    );
}

const Card3=()=>{
    return(
      <div style={{color: "black"}}>3
         <img src={require('../images/p3.jpeg')} alt="p3" />
      </div>
    );
}

const Card4=()=>{
  return(
    <div style={{color: "black"}}>4
       <img src={require('../images/p4.jpeg')} alt="p4" />
    </div>
  );
}

const Score=({s})=>{
  return(
    <div>
      <h1>score={s}</h1>
    </div>
  )
}

export {Card1,Card2,Card3,Card4,Score};
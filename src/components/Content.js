import React, { useEffect, useState } from "react";


const Card1=(props)=>{

 

    return(
      <div  style={{color: "black"}}>
          <img src={require('../images/p1.jpeg')} alt="p1" />
      </div>
    );
}

const Card2=()=>{
    return(
      <div style={{color: "black"}}>
          <img src={require('../images/p2.jpeg')} alt="p2" />
      </div>
    );
}

const Card3=()=>{
    return(
      <div style={{color: "black"}}>
         <img src={require('../images/p3.jpeg')} alt="p3" />
      </div>
    );
}

const Card4=()=>{
  return(
    <div style={{color: "black"}}>
       <img src={require('../images/p4.jpeg')} alt="p4" />
    </div>
  );
}



export {Card1,Card2,Card3,Card4};
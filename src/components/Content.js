import React,{useEffect, useState} from "react";




const Card1=()=>{
    return(
      <div style={{color: "white",backgroundColor: "red",}}>
          card 1
      </div>
    );
}

const Card2=()=>{
    return(
      <div style={{color: "white",backgroundColor: "black",}}>
           card 2
      </div>
    );
}

const Card3=()=>{
    return(
      <div style={{color: "white",backgroundColor: "grey",}}>
           card 3
      </div>
    );
}

export {Card1,Card2,Card3};
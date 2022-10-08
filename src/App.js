import './App.css';
import { Card1,Card2,Card3 } from './components/Content';
import React, {useState,useEffect} from 'react';

function App() {

  const [text1,settext1] = useState(<Card1/>);
    const [text2,settext2] = useState(<Card2/>);
    const [text3,settext3] = useState(<Card3/>);
    

    useEffect(() => {
        const change=()=>{
            var arr = [];
            while(arr.length < 3){
                var r = Math.floor(Math.random() * 3) + 1;
                if(arr.indexOf(r) === -1) {
                  arr.push(r);
                }
            }
            console.log(arr);

        if(arr[0]===1){
           settext1(<Card1/>);
        }
        else if(arr[0]===2){
          settext1(<Card2/>);
        }
        else{
          settext1(<Card3/>);
        }
        
        if(arr[1]===1){
          settext2(<Card1/>);
       }
       else if(arr[1]===2){
         settext2(<Card2/>);
       }
       else{
         settext2(<Card3/>);
       } 

       if(arr[2]===1){
        settext3(<Card1/>);
       }
     else if(arr[2]===2){
       settext3(<Card2/>);
     }
     else{
       settext3(<Card3/>);
     } 

        };

        document.addEventListener("click",change);
        return () => {
          document.removeEventListener("click", change);
        };

    

    },[text1,text2,text3])



  return (
    <div className="App">
      <div>{text1}</div>
      <div>{text2}</div>
      <div>{text3}</div>
    </div>
  );
}

export default App;

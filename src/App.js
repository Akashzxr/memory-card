import './App.css';
import { Card1,Card2,Card3,Card4 } from './components/Content';
import React, {useState} from 'react';

function App() {

  const [text1,settext1] = useState(<Card1/>);
    const [text2,settext2] = useState(<Card2/>);
    const [text3,settext3] = useState(<Card3/>);
    const [text4,settext4] = useState(<Card4/>);
    const [score,setscore] = useState(0);
   
    const change=()=>{
            var arr = [];
            while(arr.length < 4){
                var r = Math.floor(Math.random() * 4) + 1;
                if(arr.indexOf(r) === -1) {
                  arr.push(r);
                }
            }

       const check=(num,set)=>{
        if(arr[num]===1){
          set(<Card1/>);
         }
        else if(arr[num]===2){
         set(<Card2/>);
        }
        else if(arr[num]===3){
          set(<Card3/>);
         }
        else{
          set(<Card4/>);
        }
       }

        check(0,settext1);
        check(1,settext2);
        check(2,settext3); 
        check(3,settext4);

    };





  return (
    <div className="App">
      <div onClick={change} >{text1}</div>
      <div onClick={change} >{text2}</div>
      <div onClick={change} >{text3}</div>
      <div onClick={change} >{text4}</div>
    </div>
  );
}

export default App;

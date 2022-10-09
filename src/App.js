import './App.css';
import { Card1,Card2,Card3,Card4,Score } from './components/Content';
import React, {useEffect, useState} from 'react';

function App() {

  const [score,setscore] = useState(0);
  const [c1,setc1] = useState(0);
  const [c2,setc2] = useState(0);
  const [c3,setc3] = useState(0);
  const [c4,setc4] = useState(0);
  
  const [column1,setcolumn1] = useState(1);
  const [column2,setcolumn2] = useState(2);
  const [col1,setcol1] = useState(2);
  const [col2,setcol2] = useState(3);

  const [row1,setrow1] =useState(1);
  const [row2,setrow2] =useState(2);
  const [ro1,setro1] =useState(2);
  const [ro2,setro2] =useState(3);
 
    const count = (set,c) => { 
      set(c+1);
      console.log(c);
      if(c===1){
        setscore(0);
        setc1(0);
        setc2(0);
        setc3(0);
        setc4(0);
      }
    };
    

  

  
  
    
  
    
   
    const change=()=>{
            var arr = [];
            while(arr.length < 2){
                var r = Math.floor(Math.random() * 2) + 1;
                if(arr.indexOf(r) === -1) {
                  arr.push(r);
                }
            }

            var a = [];
            while(a.length < 2){
                var r = Math.floor(Math.random() * 2) + 1;
                if(a.indexOf(r) === -1) {
                  a.push(r);
                }
            }

            
       

        setscore(score+1);
        setcolumn1(arr[0])
        setcolumn2(arr[1]);
        setcol1(arr[0]+1);
        setcol2(arr[1]+1);

        setrow1(a[0]);
        setrow2(a[1]);
        setro1(a[0]+1);
        setro2(a[1]+1);

    };

    


    
  return (
    <div>
      <Score s={score}/>
    <div className="App">
      <div onClick={()=>{change();count(setc1,c1)}} style={ { gridColumn: `${column1}/${col1}`,gridRow: `${row1}/${ro1}`} } ><Card1/></div>
      <div onClick={()=>{change();count(setc2,c2)}} style={ { gridColumn: `${column2}/${col2}`,gridRow: `${row1}/${ro2}`} }><Card2/></div>
      <div onClick={()=>{change();count(setc3,c3)}} style={ { gridColumn: `${column1}/${col1}`,gridRow: `${row2}/${ro2}`} }><Card3/></div>
      <div onClick={()=>{change();count(setc4,c4)}} style={ { gridColumn: `${column2}/${col2}`,gridRow: `${row2}/${ro2}`} }><Card4/></div>
    </div>
    </div>
  );
}

export default App;

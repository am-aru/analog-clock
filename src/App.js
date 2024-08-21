import React, { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'


function App() {
const [time , setTime] = useState(new Date());
useEffect(()=>{
  setInterval(()=>{
    setTime(new Date())
  },1000)
})

  return (
    <div style={{backgroundColor :'pink' , display : 'inline-block' , top : '50%' , left : '50%' , transform : 'translate(-50%,-50%' , position :'center',padding:'12vh', position : 'absolute'}}>
      <h1 style={{paddingLeft:'8vh' , paddingBottom :'5vh'}}> React Clock 🕰️ </h1>
      <Clock value={time} size={300} renderNumbers = {true}/>
    </div>
  );
}

export default App;

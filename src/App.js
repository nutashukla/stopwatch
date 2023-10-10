import { useEffect, useState } from "react"

function App(){

const[time,setTime]=useState(0)
const[abc,setAbc]=useState(false)
useEffect(()=>{
  if(abc)
  {
      let a=setInterval(()=>{setTime(time+1)}, 1000);
      return () => clearInterval(a);    //cleanup on unmount
  }})

    const pause=()=> {
      setAbc(false)
    }
    const play=()=> {
      setAbc(true)
    }
    const stop=()=> {
      setAbc(false)
      setTime(0)
    }
    return(
        <> 
        <div className="container1">
        <div className="container">
        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
        <button onClick={stop}>stop</button>
        </div>
            <p>{time}</p>
            </div>
        </>
    )
}
export default App
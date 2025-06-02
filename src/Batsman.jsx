import { useState } from "react"

export default function Batsman(){
    const[runs,setRuns]=useState(0)
    const[sixes,setSixes]=useState(0)
    const[fours,setFours]=useState(0)
    const[singles,setSingle]=useState(0)
    
    const handleSingle=()=>{
        const updatedSingle=runs+1;
        const updateSingles=singles+1;
        setSingle(updateSingles)
        setRuns(updatedSingle) ;   
    }

     const handleFour=()=>{
        const updatedSingle=runs+4;
        const updateFours=fours+1;
        setFours(updateFours)
        setRuns(updatedSingle) ;   
    }

     const handleSix=()=>{
        const updatedSingle=runs+6;
        const updateSixes=sixes+1;
        setSixes(updateSixes)
        setRuns(updatedSingle) ;   
    }
    
    const counterStyle={
        border:'4px solid green',
        padding:'30px'
    }
    return(
        <div style={counterStyle}>
            <h3>Player : Bangla Batsman</h3>
            <p><small>Total Six :{sixes}</small></p>
            <p><small>Total Single :{singles}</small></p>
            <p><small>Total Four :{fours}</small></p>
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
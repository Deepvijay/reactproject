import React, { useState } from 'react';
//let chkCount =1;
const Add =()=>{
    const state = useState();
    const [count,setCount] =useState(1)
    
    const IncNum = ()=>{
        chkCount++;
        setCount(count+1);
    }

    return (
        <>
            <h1> Event binding and state management (Hooks)</h1>
            <h5>{count}</h5>
            <button onClick={IncNum}>Click ME </button>
        </>
    )
}

export default Add
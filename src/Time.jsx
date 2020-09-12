import React, { useState } from 'react';

const Time= ()=>{
    
    const [curDateTime,updateDateTime] = useState(new Date().toLocaleString())

    const getTime = ()=>{
        updateDateTime(new Date().toLocaleString());
    }
    return(
        <>
            <h1>{curDateTime}</h1>
            
            <button onClick={getTime}>Click Me</button>
        </>
    )
}

export default Time;
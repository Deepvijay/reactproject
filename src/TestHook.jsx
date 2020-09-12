import React, { useState, useEffect } from 'react'

const TestHook =()=>{
    const [num,setNum] = useState(0)
    const [number ,setNumber] = useState(0)
    const clickME = ()=>{
        
        setNum(num + 1)
    }
    const clickForNumber = ()=>{
        setNumber(number + 1);
    }

    useEffect(()=>{
        alert("Change or Render new value in html")
        document.title = ` Number of Click me ${num}`
    },[num]) // if Empty array it render alert once when page render else it alert occurce then array listed Values Change
    return(
        <>
            <h1>useEffect Hook Test</h1>
            <div>
                <span>Num :{num}</span><span>Number : {number}</span>
                <div>
                    <button onClick={clickME}>Click ME For Num</button>
                    <button onClick={clickForNumber}>Click  For Number</button>
                </div>
            </div>
        </>
    )
}

export default TestHook
import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Api  = ()=>{
    const [optionNum,setOptionNum] = useState()
    const [name,setName]= useState();
    const [moves,setMoves] = useState();
    useEffect(()=>{
        async function getApi(){
            const res = await axios.get(`https://pokeapi.co/api/v2/type/${optionNum}`)
            setMoves(res.data.moves.length)
            setName(res.data.name)
        }
        getApi();
    })
    return (
        <>
            <h1>Call Api using Axios</h1>
            <div>
                <h2>Your Are Choose Number :{optionNum}</h2>
                <h2>Name of Character {name } and its Moves {moves}</h2>
                <select value={optionNum} onChange={(event)=>{
                    setOptionNum(event.target.value)
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="25">25</option>

                </select>
            </div>
        </>
    )
}

export default Api;
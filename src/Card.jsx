import React from 'react';

const Card =(probs)=>{
    const removeItem = ()=>{
        console.log("remove Item");
    }
    return(
        <>
            <li><button onClick={()=>{
                probs.onSelect(probs.id)
            }}>-</button>{probs.text}</li>
        </>
    )
}

export default Card;
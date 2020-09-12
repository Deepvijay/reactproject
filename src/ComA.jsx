import React, { createContext } from 'react';
import ComB from './ComB'
const FirstName = createContext();
const SecondName = createContext();
const ComA =()=>{
    return (
    <>
        <FirstName.Provider value={"Vijay"}>
        <SecondName.Provider value={"patil"}>
            <ComB/>
        </SecondName.Provider>
        </FirstName.Provider>
        
    </>
    )
}

export default ComA;

export {FirstName,SecondName};

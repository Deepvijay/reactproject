import React, { useContext } from 'react';
import ComD from './ComD'
import {FirstName,SecondName } from './ComA';

const ComC =()=>{
    const fName = useContext(FirstName);
    const lName = useContext(SecondName);

    return (
    <>
        <h1>Get Data from A-D Context Implementation (Easy Way) </h1>
        <div>My Name is {fName} {lName}</div>

        <ComD/>
    </>
    )
}

export default ComC;
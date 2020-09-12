import React from 'react';
import {FirstName,SecondName} from './ComA';

const ComD=()=>{
    return (
        <>
            <h1>Get Data from A-D Context Implementation (Complex Way) </h1>
            <FirstName.Consumer>{(fName)=>{
                
                return (
                    <SecondName.Consumer>{(lname)=>{
                        return(<h2> Get Data from A (My name is {fName} {lname})</h2>)

                    }}
                    </SecondName.Consumer>
                )
                
                
            }}</FirstName.Consumer>

        </>
        )
}

export default ComD;
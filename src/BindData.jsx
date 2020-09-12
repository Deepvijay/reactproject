import React, { useState } from 'react';

const BindData= ()=>{
    const [name,setName]=useState();// init with Black to name var
    const [eventName,afterClick]= useState();//eventName is var initiat with empty value and afterClick is function
    const [password ,setPasword]= useState();
    const [spassword ,showPasword]= useState();

    const getName = (event)=>{
        console.log(event.target.value);
        setName(event.target.value);
        console.log("get name Clicked");
    }
    const submitMe = (event)=>{
        event.preventDefault();// this function avoid to refresh html page after submiting
        afterClick(name)
        showPasword(password)
        console.log('Show Text Clicked');
    }
    const getPassword =(event)=>{
        setPasword(event.target.value)
    }
    return(
    <>
        <form onSubmit={submitMe}>
            <h1>Deual data Binding Example  Show input Text :{name} </h1>
            <h2>Show Text here After Click Event (Event Binding) :{eventName} </h2>
            <h2>Name and Password :{eventName} : { spassword} </h2>

            <input type="text" onChange={getName} value={name} placeholder="Name"/>
            {/* <input type="text" onChange={getPassword} value={password} placeholder="Enter Password"/> */}

            <button type="submit" >Click Me</button>
        </form>
    </>
    );
}

export default BindData;
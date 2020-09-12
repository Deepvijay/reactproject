import React, { useState } from 'react';

const RegForm = ()=>{
    const [regData,setRegData]= useState({fname:'',lname:'',email:''})
    const changeEvent =(event)=>{
        console.log(event.target.name);
        console.log(event.target.value);
        // const name =event.target.name;
        // const value =event.target.value;
        const {name,value} = event.target;
        setRegData((prevData)=>{
            console.log(prevData)
            return {
                ...prevData,
                [name]:value
            }
            //convert Below commented line of code in above 
            //  if(name =='fname'){
            //   return { 
            //         fname:value,
            //         lname:prevData.lname,
            //         email:prevData.email
            //      }
            //  }else if(name =='lname'){
            //     return { 
            //         fname:prevData.lname,
            //         lname:value,
            //         email:prevData.email
            //      }
            //  }else if(name =='email'){
            //     return { 
            //         fname:prevData.lname,
            //         lname:prevData.lname,
            //         email:value
            //      }
            //  }
        })
       
    }
    const submitForm = (event)=>{
        event.preventDefault();
        console.log("Submit Form")
        console.log(regData)
    }
    return (
        <>
            <h1>Registration Form</h1>
            <form onSubmit={submitForm}>
            <input type='text' name='fname' onChange={changeEvent} value={regData.fname}/>
            <input type='text' name='lname' onChange={changeEvent} value={regData.lname}/>
            <input type='email' name='email' onChange={changeEvent} value={regData.email}/>
            <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegForm;
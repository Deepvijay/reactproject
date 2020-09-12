import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom'
const User = ({match})=>{
    return <h1> Parameter pass with Match method {match.params.name} </h1>
}

const UserName = ()=>{  
    const {fname,lname} = useParams()
    return <h1> using useParams {fname} {lname} </h1>
}

const UrlLocation=()=>{
    const location = useLocation();
    const {fname,lname} = useParams()
    console.log(location);
    const history = useHistory()
    console.log(history)
        return (
        <>
            <h1> Here we are useLocation Hook </h1>
            <div>location Path {location.pathname}</div>
            {location.pathname ==='/urllocation/vijay/patil' ? <button onClick={()=>{alert(`hello ${fname}`)}}>Click ME</button>:null}
            {fname ==='vijay' ? <h1>Vijay Is Selected</h1>:null}
            <button onClick={()=>{history.goBack()}}>Go Back</button>
            <button onClick={()=>{history.push('/')}}>Home</button>
        </>
    )
}
export default User;
export {UserName,UrlLocation};
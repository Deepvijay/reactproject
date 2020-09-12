import React from 'react'
import {Switch,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import NavBar from './NavBar'
import Services from './Services';
import Search from './Search';
import User,{UserName,UrlLocation} from './User'
const MainRoutes = ()=>{
    return(
        <>
            <NavBar/>
            <Switch>

                <Route exact path='/' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/services' component={()=><Services name="services ....!"/>}/>
                <Route exact path='/search' render={()=><Search name="Render method"/>}/>
                <Route  path='/user/:name' component={User} />
                <Route  path='/username/:fname/:lname' component={UserName} />
                <Route  path='/urllocation/:fname/:lname' component={UrlLocation} />
                <Route  component={Error} />
            </Switch>
        </>
    )
}


export default MainRoutes
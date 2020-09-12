// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';
// let currenTime = new Date(2020,9,5,7);
// currenTime = currenTime.getHours();
// let Greeting;
// let GreetingStyle={}
// if(currenTime>=0 && currenTime<=12){
//   Greeting="Good Morning";
//   GreetingStyle.color="Green";
// }else if(currenTime>=13 && currenTime<=18){
//   Greeting="Good Evening";
//   GreetingStyle.color="yellow";

// }else{
//   Greeting="Good Night";
//   GreetingStyle.color="Black";

// }

// ReactDom.render(
//   <>
//     <div className="containt">
//       <h1>hello Sir, <span style={GreetingStyle}>{Greeting}</span></h1>
//      </div>
//      </>,
//   document.getElementById('root')
// )


// how to create componet 
//create compont of Heading, Para, List |  component first Letter always Capital

// import React from 'react';
// import ReactDom from 'react-dom';
// import Heading,{testme} from './Heading';
// import ParaDisplay from './Para';
// import App from './app';

// // ReactDom.render(
// // <>
// //   <Heading/>
// //   <ParaDisplay/>

// // </>,
// // document.getElementById('root')
// // )

// ReactDom.render(
//   <>
//   <App/>
//   <h1>{testme()}</h1>
//   </>
//   ,document.getElementById('root')
// );



// set property to component 

// import React from 'react';
// import ReactDom from 'react-dom';

// function Card(){
// return(
//   <>
//   <h1>Set property to component</h1>
//   <div>
//     <h2>Title</h2>
//     <img src="https://source.unsplash.com/collection/190727/250x250"/>
//     <div>
//       Decription 
//     </div>
//   </div>

//   </>
// )
// }
// ReactDom.render(
//   <>
//   <Card title="First Imge" imgsrc="https://source.unsplash.com/collection/190727/250*250" desc="here first Random img "/> 
//   <Card title="First Imge" imgsrc="https://source.unsplash.com/collection/190727/300*300" desc="here first Random img "/> 
//   <Card title="First Imge" imgsrc="https://source.unsplash.com/collection/190727/400*400" desc="here first Random img "/> 

//   </>,
// document.getElementById('root')  
// )


// Array Map funtion in REact

// import React from 'react';
// import ReactDom from 'react-dom';
// import Data from './Data';

// // Below function we can write as component Also
// function Card(prob){
//   console.log(prob)
//   return (

//       <h1>my name is : {prob.cname} and {prob.cAge} year of Old</h1>
//   )
// }
// ReactDom.render(<>
//     <h1>Array with map Function in React</h1>
//     {Data.map((cval,i)=>{
//       return (
//         <Card cname= {cval.name} cAge={cval.age}/>
//       )
//     })}
// </>,document.getElementById('root'))


// complete 30



// Event binding and Hook in React 

// import React from 'react';
// import ReactDom from 'react-dom'
// import Add from './Add'
// ReactDom.render(<Add/>,document.getElementById('root'))



// import React from 'react';
// import ReactDom from 'react-dom';
// import Time from './Time';
// ReactDom.render(<Time/>,document.getElementById('root'))


// complete 36



//Dual binding and clickEvent
// import React from 'react';
// import ReactDom from 'react-dom';
// import BindData from './BindData';
// ReactDom.render(<BindData/>,document.getElementById('root'))
// complete 38



//Capture Input formated manner

// import React from 'react';
// import ReactDom from 'react-dom';
// import RegForm from './RegForm';
// ReactDom.render(<RegForm/>,document.getElementById('root'))


// TODO LIST App 

// import React from 'react';
// import ReactDom from 'react-dom';
// import ToDoList from './ToDoList';

// ReactDom.render(<ToDoList/>,document.getElementById('root'));


// Context concept with Examples
//Inherit from A->B->C->D and pass data from A->D Directly 

// import React from 'react';
// import ReactDom from 'react-dom';
// import ComA from './ComA';
// ReactDom.render(<ComA/>,document.getElementById('root'),()=>{
//     console.log("vijay Patil call back from index.jsx")
// })

//complite 56 and 57 

//useEffect

// import React from 'react';
// import ReactDom from 'react-dom';
// import TestHook from './TestHook';

// ReactDom.render(<TestHook/>,document.getElementById('root'));




// consume API

// import React from 'react';
// import ReactDom from 'react-dom';
// import Api from './Api'
// ReactDom.render(<Api/>,document.getElementById('root'))



// Routing with React-dom

// import React from 'react';
// import ReactDom from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'
// import MainRoutes from './MainRoutes'
// ReactDom.render(
//     <BrowserRouter>
//         <MainRoutes/>
//     </BrowserRouter>,
//     document.getElementById('root')
// )


//complite 60


// NavBar implementation
//Difference between Render and Component Prop on React
//useParams Hook Parameter pass between component
//useLocation Hook
//useHistory Hook

import React from 'react';
import ReactDom from 'react-dom';
import MainRoutes from './MainRoutes';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
ReactDom.render(<BrowserRouter><MainRoutes/></BrowserRouter>,document.getElementById('root'))
